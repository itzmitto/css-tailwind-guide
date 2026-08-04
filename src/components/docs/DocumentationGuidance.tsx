type DocumentationGuidanceProps = {
    bestPractices: string[];
    commonMistakes: string[];
    tips: string[];
    relatedUtilities: string[];
};

type GuidanceSectionProps = {
    title: string;
    items: string[];
};

function GuidanceSection({ title, items }: GuidanceSectionProps) {
    return (
        <section className="rounded-2xl border border-border bg-background p-6">
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
            <ul className="mt-4 space-y-3 text-muted">
                {items.map((item) => (
                    <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function DocumentationGuidance(
    props: DocumentationGuidanceProps
) {
    return (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <GuidanceSection title="Best Practices" items={props.bestPractices} />
            <GuidanceSection title="Common Mistakes" items={props.commonMistakes} />
            <GuidanceSection title="Tips" items={props.tips} />
            <GuidanceSection title="Related Utilities" items={props.relatedUtilities} />
        </div>
    );
}
