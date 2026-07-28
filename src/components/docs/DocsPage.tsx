import Layout from "../layout/Layout";
import ExampleCard from "../cards/ExampleCard";
import type { Example } from "../../types/docs";

type DocsPageProps = {
    title: string;
    description: string;
    examples: Example[];
};

export default function DocsPage({
    title,
    description,
    examples,
}: DocsPageProps) {
    return (
        <Layout>
            <section>
                <header className="mb-14 rounded-3xl border border-border bg-surface p-10">
                    <h1 className="text-5xl font-black text-foreground">
                        {title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg text-muted">
                        {description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <div className="rounded-xl border border-border bg-background px-5 py-3">
                            <p className="text-sm text-muted">
                                Examples
                            </p>

                            <p className="text-2xl font-bold text-foreground">
                                {examples.length}
                            </p>
                        </div>

                        <div className="rounded-xl border border-border bg-background px-5 py-3">
                            <p className="text-sm text-muted">
                                Beginner
                            </p>

                            <p className="text-2xl font-bold text-foreground">
                                {
                                    examples.filter(
                                        (example) =>
                                            example.difficulty === "Beginner"
                                    ).length
                                }
                            </p>
                        </div>

                        <div className="rounded-xl border border-border bg-background px-5 py-3">
                            <p className="text-sm text-muted">
                                Tags
                            </p>

                            <p className="text-2xl font-bold text-foreground">
                                {
                                    new Set(
                                        examples.flatMap(
                                            (example) => example.tags
                                        )
                                    ).size
                                }
                            </p>
                        </div>
                    </div>
                </header>

                <div className="space-y-10">
                    {examples.map((example) => (
                        <ExampleCard
                            key={example.id}
                            title={example.title}
                            description={example.description}
                            css={example.css}
                            tailwind={example.tailwind}
                            difficulty={example.difficulty}
                            tags={example.tags}
                            browserSupport={example.browserSupport}
                        >
                            {example.preview}
                        </ExampleCard>
                    ))}
                </div>
            </section>
        </Layout>
    );
}