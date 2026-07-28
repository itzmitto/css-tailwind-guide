import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";

type CodeTabsProps = {
    css: string;
    tailwind: string;
};

export default function CodeTabs({
    css,
    tailwind,
}: CodeTabsProps) {
    const [activeTab, setActiveTab] = useState<"css" | "tailwind">("css");

    const code = activeTab === "css" ? css : tailwind;
    const language = activeTab === "css" ? "css" : "html";

    return (
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab("css")}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === "css"
                            ? "bg-primary text-white"
                            : "text-muted hover:bg-card"
                            }`}
                    >
                        CSS
                    </button>

                    <button
                        onClick={() => setActiveTab("tailwind")}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === "tailwind"
                            ? "bg-primary text-white"
                            : "text-muted hover:bg-card"
                            }`}
                    >
                        Tailwind
                    </button>
                </div>

                <CopyButton text={code} />
            </div>

            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    background: "transparent",
                    padding: "1.5rem",
                    fontSize: "14px",
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}