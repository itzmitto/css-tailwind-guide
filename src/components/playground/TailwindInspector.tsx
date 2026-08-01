import { categoryMap } from "../../data/inspector/categories";

type Props = {
    classes: string[];
};

export default function TailwindInspector({
    classes,
}: Props) {
    const grouped = classes.reduce<
        Record<string, string[]>
    >((acc, cls) => {
        const category =
            categoryMap[cls] ?? "Other";

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(cls);

        return acc;
    }, {});

    return (
        <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="mb-6 text-xl font-semibold">
                Inspector
            </h2>

            <div className="space-y-5">
                {Object.entries(grouped).map(
                    ([category, values]) => (
                        <div key={category}>
                            <h3 className="mb-2 font-semibold">
                                {category}
                            </h3>

                            <div className="space-y-2">
                                {values.map((value) => (
                                    <div
                                        key={value}
                                        className="rounded-lg border border-border px-3 py-2 font-mono text-sm"
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="mt-8">
                <h3 className="mb-3 font-semibold">
                    Generated HTML
                </h3>

                <pre className="rounded-xl border border-border bg-surface p-4 text-sm overflow-auto">
{`<div class="${classes.join(" ")}"></div>`}
                </pre>
            </div>
        </div>
    );
}