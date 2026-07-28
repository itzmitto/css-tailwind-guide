import { useMemo, useState } from "react";
import CopyButton from "../ui/CopyButton";

const mappings: Record<string, string> = {
    "display: flex": "flex",
    "display:flex": "flex",

    "justify-content: center": "justify-center",
    "justify-content:center": "justify-center",

    "align-items: center": "items-center",
    "align-items:center": "items-center",

    "flex-direction: column": "flex-col",
    "flex-direction:column": "flex-col",

    "flex-wrap: wrap": "flex-wrap",
    "flex-wrap:wrap": "flex-wrap",

    "text-align: center": "text-center",
    "text-align:center": "text-center",

    "font-weight: bold": "font-bold",
    "font-weight:bold": "font-bold",
};

export default function Playground() {
    const [css, setCss] = useState("");

    const output = useMemo(() => {
        const lines = css
            .split(";")
            .map((line) => line.trim())
            .filter(Boolean);

        return lines
            .map((line) => mappings[line] ?? `❌ Unknown: ${line}`)
            .join("\n");
    }, [css]);

    return (
        <section className="mx-auto max-w-6xl">
            <h1 className="text-5xl font-black text-foreground">
                CSS → Tailwind Playground
            </h1>

            <p className="mt-4 text-lg text-muted">
                Type CSS properties and instantly see the matching Tailwind utilities.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-xl font-semibold">
                        CSS
                    </h2>

                    <textarea
                        value={css}
                        onChange={(e) => setCss(e.target.value)}
                        placeholder={`display: flex;
justify-content: center;
align-items: center;`}
                        className="h-96 w-full rounded-2xl border border-border bg-background p-6 font-mono outline-none"
                    />
                </div>

                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Tailwind
                        </h2>

                        <CopyButton text={output} />
                    </div>

                    <pre className="h-96 overflow-auto rounded-2xl border border-border bg-background p-6">
                        <code>{output}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
}