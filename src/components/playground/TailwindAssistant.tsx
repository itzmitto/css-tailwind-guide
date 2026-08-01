import { tips } from "../../data/assistant/tips";

type Props = {
    classes: string[];
};

export default function TailwindAssistant({
    classes,
}: Props) {
    const matches = tips.filter((tip) =>
        tip.required.every((item) =>
            classes.includes(item)
        )
    );

    if (matches.length === 0) {
        return null;
    }

    return (
        <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="mb-5 text-xl font-semibold">
                Assistant
            </h2>

            <div className="space-y-4">
                {matches.map((tip) => (
                    <div
                        key={tip.title}
                        className="rounded-xl border border-border p-4"
                    >
                        <h3 className="font-semibold">
                            {tip.title}
                        </h3>

                        <p className="mt-2 text-sm text-muted">
                            {tip.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}