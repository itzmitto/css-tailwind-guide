import { useMemo, useState } from "react";
import CopyButton from "../ui/CopyButton";
import { cssMappings } from "../../data/playground/mappings";
import { normalizeCss } from "../../utils/normalizeCss";
import { parseCss } from "../../utils/parseCss";
import { useSuggestions } from "../../hooks/useSuggestions";

export default function Playground() {
    const [css, setCss] = useState("");

    const suggestions = useSuggestions(
        css.split(";").pop() ?? ""
    );

    const lines = useMemo(() => {
        return parseCss(css);
    }, [css]);

    const classes = useMemo(() => {
        return lines
            .map((line) => cssMappings[normalizeCss(line)])
            .filter(Boolean);
    }, [lines]);

    const output = classes.join("\n");

    function handleSuggestionClick(suggestion: string) {
        const parts = css.split(";");
        parts[parts.length - 1] = suggestion;
        setCss(parts.join(";"));
    }

    return (
        <section className="mx-auto max-w-7xl">
            <h1 className="text-5xl font-black text-foreground">
                CSS → Tailwind Playground
            </h1>

            <p className="mt-4 text-lg text-muted">
                Type CSS properties and instantly see the matching Tailwind utilities.
            </p>

            <div className="mt-10 grid gap-8 xl:grid-cols-3">
                <div>
                    <h2 className="mb-4 text-xl font-semibold">
                        CSS
                    </h2>

                    <textarea
                        value={css}
                        onChange={(e) => setCss(e.target.value)}
                        placeholder={`display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`}
                        className="h-96 w-full rounded-2xl border border-border bg-background p-6 font-mono outline-none"
                    />

                    {suggestions.length > 0 && (
                        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                            {suggestions.map((suggestion) => (
                                <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() =>
                                        handleSuggestionClick(suggestion)
                                    }
                                    className="block w-full border-b border-border px-4 py-3 text-left font-mono transition hover:bg-surface last:border-b-0"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}
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

                <div>
                    <h2 className="mb-4 text-xl font-semibold">
                        Live Preview
                    </h2>

                    <div className="flex h-96 items-center justify-center rounded-2xl border border-border bg-background p-8">
                        <div
                            className={[
                                ...classes,
                                "min-h-40",
                                "min-w-40",
                                "border",
                                "border-dashed",
                                "border-border",
                                "bg-surface",
                                "p-4",
                            ].join(" ")}
                        >
                            <div className="rounded-lg bg-blue-500 px-4 py-2 text-center text-white">
                                Item 1
                            </div>

                            <div className="mt-2 rounded-lg bg-emerald-500 px-4 py-2 text-center text-white">
                                Item 2
                            </div>

                            <div className="mt-2 rounded-lg bg-rose-500 px-4 py-2 text-center text-white">
                                Item 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}