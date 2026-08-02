import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CopyButton from "../ui/CopyButton";
import CssEditor from "./CssEditor";
import ReferencePanel from "./ReferencePanel";
import { cssMappings } from "../../data/playground/mappings";
import { useSuggestions } from "../../hooks/useSuggestions";
import { convertCss } from "../../utils/convertCss";
import { normalizeCss } from "../../utils/normalizeCss";
import { parseCss } from "../../utils/parseCss";
import { getDiagnostics } from "../../utils/diagnostics/cssDiagnostics";
import HistoryPanel from "./HistoryPanel";
import TailwindInspector from "./TailwindInspector";
import TailwindAssistant from "./TailwindAssistant";
import DeviceSelector from "./DeviceSelector";

const HISTORY_KEY = "css-tailwind-history";

export default function Playground() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [css, setCss] = useState(
        () => searchParams.get("css") ?? ""
    );
    const [selectedSuggestion, setSelectedSuggestion] = useState(0);

    const [showSuggestions, setShowSuggestions] = useState(true);

    const [device, setDevice] = useState<
        "desktop" | "tablet" | "mobile"
    >("desktop");

    const [history, setHistory] = useState<string[]>(() => {
        const saved = localStorage.getItem(HISTORY_KEY);

        if (!saved) {
            return [];
        }

        try {
            return JSON.parse(saved);
        } catch {
            return [];
        }
    });
    useEffect(() => {
        if (!css.trim()) {
            setSearchParams({});
            return;
        }
        setSearchParams({
            css,
        });
    }, [css, setSearchParams]);
    useEffect(() => {
        if (!css.trim()) {
            return;
        }
        const timer = setTimeout(() => {
            setHistory((previous) => {
                const next = [
                    css,
                    ...previous.filter(
                        (item) => item !== css
                    ),
                ];

                return next.slice(0, 10);
            });
        }, 800);
        return () => clearTimeout(timer);
    }, [css]);
    useEffect(() => {
        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(history)
        );
    }, [history]);
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
                    convertCss(line));
            })
            .filter((item): item is string => Boolean(item));
    }, [lines]);
    const diagnostics = useMemo(() => {
        return getDiagnostics(lines);
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
    async function handleShare() {
        await navigator.clipboard.writeText(
            window.location.href
        );
    }
    return (
        <section className="mx-auto max-w-[1800px]">
            <h1 className="text-5xl font-black text-foreground">
                CSS → Tailwind Playground
            </h1>
            <p className="mt-4 text-lg text-muted">
                Type CSS properties and instantly see the matching Tailwind
                utilities.
            </p>
            <div className="mt-10 grid gap-8 2xl:grid-cols-6">
                <div className="relative">
                    <h2 className="mb-4 text-xl font-semibold">
                        CSS
                    </h2>
                    <CssEditor
                        value={css}
                        onChange={(value) => {
                            setCss(value);
                            setShowSuggestions(true);
                        }} />
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
                                                    suggestion)}
                                            className={`block w-full border-b border-border px-4 py-3 text-left font-mono transition last:border-b-0 ${index ===
                                                selectedSuggestion
                                                ? "bg-primary text-white"
                                                : "hover:bg-surface"
                                                }`}>
                                            {suggestion}
                                        </button>))}</div>)}</div>
                <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <h2 className="text-xl font-semibold">
                            Tailwind
                        </h2>
                        <div className="flex gap-3">
                            <button
                                onClick={handleShare}
                                className="rounded-xl border border-border px-4 py-2 text-sm transition hover:bg-surface"> Share</button>
                            <CopyButton text={output} />
                        </div>
                    </div>
                    <pre className="h-72 overflow-auto rounded-2xl border border-border bg-background p-6">
                        <code>{output}</code>
                    </pre>
                    {diagnostics.length > 0 && (
                        <div className="mt-6 rounded-2xl border border-red-500 bg-red-500/10 p-4">
                            <h3 className="mb-3 font-semibold text-red-500">
                                Diagnostics
                            </h3>

                            <ul className="space-y-3">
                                {diagnostics.map((item) => (
                                    <li
                                        key={`${item.line}-${item.message}`}
                                        className="rounded-lg border border-red-500/20 p-3"
                                    >
                                        <div className="font-mono text-sm">
                                            {item.line}
                                        </div>

                                        <div className="mt-1 text-sm text-red-500">
                                            {item.message}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Live Preview
                        </h2>

                        <DeviceSelector
                            value={device}
                            onChange={setDevice}
                        />
                    </div>


                    
                    <div className="flex h-96 items-center justify-center rounded-2xl border border-border bg-background p-8">
                        <div
                            className={`transition-all duration-300 ${
                                device === "desktop"
                                    ? "w-full"
                                    : device === "tablet"
                                    ? "w-[768px] max-w-full"
                                    : "w-[390px] max-w-full"
                            }`}
                        >
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
                                ].join(" ")} >
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
                <ReferencePanel classes={classes} />

                <TailwindInspector classes={classes} />
                <TailwindAssistant classes={classes} />
                <HistoryPanel
                    history={history}
                    onSelect={(snippet) => {
                        setCss(snippet);
                    }}
                    onClear={() => {
                        setHistory([]);
                        localStorage.removeItem(HISTORY_KEY);
                    }}
                />
            </div>
        </section>
    );
}