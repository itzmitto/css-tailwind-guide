type Props = {
    history: string[];
    onSelect(css: string): void;
};

export default function HistoryPanel({
    history,
    onSelect,
}: Props) {
    return (
        <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="mb-4 text-xl font-semibold">
                History
            </h2>

            {history.length === 0 ? (
                <p className="text-muted">
                    No recent snippets.
                </p>
            ) : (
                <div className="space-y-3">
                    {history.map((item, index) => (
                        <button
                            key={`${item}-${index}`}
                            onClick={() => onSelect(item)}
                            className="block w-full rounded-xl border border-border p-3 text-left transition hover:bg-surface"
                        >
                            <pre className="overflow-hidden text-ellipsis whitespace-pre-wrap font-mono text-sm">
                                {item}
                            </pre>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}