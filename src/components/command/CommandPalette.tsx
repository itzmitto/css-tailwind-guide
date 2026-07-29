import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { commandItems } from "./commandData";
import { fuzzySearch } from "../../utils/search/fuzzySearch";

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();

                setOpen((prev) => !prev);

                if (!open) {
                    setQuery("");
                    setSelected(0);
                }
            }

            if (e.key === "Escape") {
                setOpen(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [open]);

    const results = useMemo(() => {
        return fuzzySearch(commandItems, query);
    }, [query]);

    useEffect(() => {
        setSelected(0);
    }, [query]);

    function openItem(index: number) {
        navigate(results[index].path);

        setOpen(false);
        setQuery("");
        setSelected(0);
    }

    function handleInputKeyDown(
        e: React.KeyboardEvent<HTMLInputElement>
    ) {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();

                setSelected((prev) =>
                    Math.min(prev + 1, results.length - 1)
                );

                break;

            case "ArrowUp":
                e.preventDefault();

                setSelected((prev) =>
                    Math.max(prev - 1, 0)
                );

                break;

            case "Enter":
                e.preventDefault();

                if (results.length > 0) {
                    openItem(selected);
                }

                break;
        }
    }

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-32">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
                <input
                    autoFocus
                    value={query}
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                    onKeyDown={handleInputKeyDown}
                    placeholder="Search documentation..."
                    className="w-full border-b border-border bg-transparent p-5 text-lg outline-none"
                />

                <div className="max-h-96 overflow-auto">
                    {results.length === 0 && (
                        <div className="p-6 text-center text-muted">
                            No results found.
                        </div>
                    )}

                    {results.map((item, index) => (
                        <button
                            key={item.path}
                            onClick={() =>
                                openItem(index)
                            }
                            onMouseEnter={() =>
                                setSelected(index)
                            }
                            className={`block w-full border-b border-border px-5 py-4 text-left transition last:border-b-0 ${index === selected
                                ? "bg-primary text-white"
                                : "hover:bg-surface"
                                }`}
                        >
                            <div className="font-semibold">
                                {item.title}
                            </div>

                            <div
                                className={`text-sm ${index === selected
                                    ? "text-white/80"
                                    : "text-muted"
                                    }`}
                            >
                                {item.description}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}