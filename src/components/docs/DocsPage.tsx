import Layout from "../layout/Layout";
import ExampleCard from "../cards/ExampleCard";
import { ReactNode } from "react";

export type Example = {
    title: string;
    css: string;
    tailwind: string;
    preview: ReactNode;
};

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
                <h1 className="text-5xl font-black">
                    {title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg text-zinc-400">
                    {description}
                </p>

                <div className="mt-12 space-y-10">
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