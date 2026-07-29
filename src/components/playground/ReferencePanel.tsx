import { utilityReference } from "../../data/reference/utilities";

type Props = {
    classes: string[];
};

export default function ReferencePanel({
    classes,
}: Props) {
    const references = utilityReference.filter((item) =>
        classes.includes(item.tailwind)
    );

    return (
        <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="mb-6 text-xl font-semibold">
                Reference
            </h2>

            {references.length === 0 && (
                <p className="text-muted">
                    No reference available.
                </p>
            )}

            <div className="space-y-6">
                {references.map((item) => (
                    <div
                        key={item.tailwind}
                        className="rounded-xl border border-border p-4"
                    >
                        <h3 className="font-bold">
                            {item.tailwind}
                        </h3>

                        <p className="mt-2 text-sm text-muted">
                            {item.description}
                        </p>

                        <div className="mt-4 space-y-1 text-sm">
                            <p>
                                <strong>CSS:</strong>{" "}
                                {item.css}
                            </p>

                            <p>
                                <strong>Category:</strong>{" "}
                                {item.category}
                            </p>

                            <p>
                                <strong>Browser:</strong>{" "}
                                {item.browserSupport.join(
                                    ", "
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}