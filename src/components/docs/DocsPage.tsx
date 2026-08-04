import Layout from "../layout/Layout";
import ExampleCard from "../cards/ExampleCard";
import DocumentationGuidance from "./DocumentationGuidance";
import InteractiveExample from "./InteractiveExample";
import type { DocumentationPage } from "../../types/docs";

type DocsPageProps = {
    page: DocumentationPage;
};

export default function DocsPage({ page }: DocsPageProps) {
    const { example } = page;

    return (
        <Layout>
            <section>
                <header className="mb-14 rounded-3xl border border-border bg-surface p-10">
                    <h1 className="text-5xl font-black text-foreground">
                        {page.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg text-muted">
                        {page.introduction}
                    </p>

                    <p className="mt-6 max-w-3xl leading-7 text-muted">
                        {page.explanation}
                    </p>
                </header>

                <ExampleCard {...example}>{example.preview}</ExampleCard>

                <div className="mt-10">
                    <InteractiveExample example={page.interactive} />
                </div>

                <DocumentationGuidance
                    bestPractices={page.bestPractices}
                    commonMistakes={page.commonMistakes}
                    tips={page.tips}
                    relatedUtilities={page.relatedUtilities}
                />
            </section>
        </Layout>
    );
}
