import { ReactNode } from "react";
import CopyButton from "../ui/CopyButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type ExampleCardProps = {
    title: string;
    css: string;
    tailwind: string;
    children: ReactNode;
};

export default function ExampleCard({
    title,
    css,
    tailwind,
    children,
}: ExampleCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:border-blue-500">
            <h2 className="text-3xl font-bold text-white">
                {title}
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        CSS
                    </p>
                    <SyntaxHighlighter
                        language="css"
                        style={oneDark}
                        customStyle={{
                            margin: 0,
                            borderRadius: "0.75rem",
                            padding: "1.25rem",
                            background: "#09090b",
                            fontSize: "14px",
                        }}
                    >
                        {css}
                    </SyntaxHighlighter>

                    <div className="mt-4">
                        <CopyButton text={css} />
                    </div>
                </div>

                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        Tailwind
                    </p>

                    <SyntaxHighlighter
                        language="html"
                        style={oneDark}
                        customStyle={{
                            margin: 0,
                            borderRadius: "0.75rem",
                            padding: "1.25rem",
                            background: "#09090b",
                            fontSize: "14px",
                        }}
                    >
                        {tailwind}
                    </SyntaxHighlighter>

                    <div className="mt-4">
                        <CopyButton text={tailwind} />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Live Preview
                </p>

                <div className="flex min-h-52 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}