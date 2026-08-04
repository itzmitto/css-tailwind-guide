import { useState } from "react";
import CopyButton from "../ui/CopyButton";
import type { InteractiveExample as InteractiveExampleData } from "../../types/docs";

type InteractiveExampleProps = {
    example: InteractiveExampleData;
};

export default function InteractiveExample({
    example,
}: InteractiveExampleProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = example.options[selectedIndex];

    return (
        <section className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-3xl font-bold text-foreground">
                {example.title}
            </h2>
            <p className="mt-3 max-w-3xl text-muted">
                {example.description}
            </p>

            <div
                role="group"
                aria-label={`${example.title} options`}
                className="mt-6 flex flex-wrap gap-3"
            >
                {example.options.map((option, index) => (
                    <button
                        key={option.tailwind}
                        type="button"
                        aria-pressed={selectedIndex === index}
                        onClick={() => setSelectedIndex(index)}
                        className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                            selectedIndex === index
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-border text-muted hover:bg-card hover:text-foreground"
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-foreground">
                            Generated Tailwind
                        </h3>
                        <CopyButton text={selected.tailwind} />
                    </div>
                    <pre className="mt-4 overflow-auto rounded-lg bg-surface p-4 text-sm text-foreground">
                        <code>{selected.tailwind}</code>
                    </pre>
                    <p className="mt-4 text-sm text-muted">
                        CSS: {selected.css}
                    </p>
                </div>

                <div className="flex min-h-48 items-center justify-center rounded-xl border border-border bg-background p-6">
                    {example.preview(selected.tailwind)}
                </div>
            </div>
        </section>
    );
}
