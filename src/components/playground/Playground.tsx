import {
    KeyboardEvent,
    useEffect,
    useMemo,
    useState,
} from "react";
import CopyButton from "../ui/CopyButton";
import { cssMappings } from "../../data/playground/mappings";
import { normalizeCss } from "../../utils/normalizeCss";
import { parseCss } from "../../utils/parseCss";
import { useSuggestions } from "../../hooks/useSuggestions";
import { convertCss } from "../../utils/convertCss";
import ReferencePanel from "./ReferencePanel";

export default function Playground() {
    const [css, setCss] = useState("");
    const [selectedSuggestion, setSelectedSuggestion] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const suggestions = useSuggestions(
        css.split(";").pop() ?? ""
    );

    useEffect(() => {
        setSelectedSuggestion(0);
    }, [suggestions]);

    const lines = useMemo(() => {
        return parseCss(css);
    }, [css]);

    const classes = useMemo(() => {
        return lines
            .map((line) => {
                return (
                    cssMappings[normalizeCss(line)] ??
                    convertCss(line)
                );
            })
            .filter((item): item is string => Boolean(item));
    }, [lines]);

    const output = useMemo(() => {
        return classes.join("\n");
    }, [classes]);

    function handleSuggestionClick(suggestion: string) {
        const parts = css.split(";");
        parts[parts.length - 1] = suggestion;

        setCss(parts.join(";"));
        setShowSuggestions(false);
    }

    function handleKeyDown(
        e: KeyboardEvent<HTMLTextAreaElement>
    ) {
        if (!showSuggestions || suggestions.length === 0) {
            return;
        }

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();

                setSelectedSuggestion((prev) =>
                    prev < suggestions.length - 1
                        ? prev + 1
                        : prev
                );
                break;

            case "ArrowUp":
                e.preventDefault();

                setSelectedSuggestion((prev) =>
                    prev > 0 ? prev - 1 : 0
                );
                break;

            case "Enter":
                e.preventDefault();

                handleSuggestionClick(
                    suggestions[selectedSuggestion]
                );
                break;

            case "Escape":
                e.preventDefault();
                setShowSuggestions(false);
                break;
        }
    }

    return (
        <section className="mx-auto max-w-[1800px]">
            <h1 className="text-5xl font-black text-foreground">
                CSS → Tailwind Playground
            </h1>

            <p className="mt-4 text-lg text-muted">
                Type CSS properties and instantly see the matching Tailwind utilities.
            </p>

            <div className="mt-10 grid gap-8 2xl:grid-cols-4">
                <div className="relative">
                    <h2 className="mb-4 text-xl font-semibold">
                        CSS
                    </h2>

                    <textarea
                        value={css}
                        onChange={(e) => {
                            setCss(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onKeyDown={handleKeyDown}
                        placeholder={`display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`}
                        className="h-96 w-full rounded-2xl border border-border bg-background p-6 font-mono outline-none"
                    />

                    {showSuggestions &&
                        suggestions.length > 0 && (
                            <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
                                {suggestions.map(
                                    (suggestion, index) => (
                                        <button
                                            key={suggestion}
                                            type="button"
                                            onClick={() =>
                                                handleSuggestionClick(
                                                    suggestion
                                                )
                                            }
                                            className={`block w-full border-b border-border px-4 py-3 text-left font-mono transition last:border-b-0 ${index ===
                                                selectedSuggestion
                                                ? "bg-primary text-white"
                                                : "hover:bg-surface"
                                                }`}
                                        >
                                            {suggestion}
                                        </button>
                                    )
                                )}
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

                <ReferencePanel classes={classes} />
            </div>
        </section>
    );
}