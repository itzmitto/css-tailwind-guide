import { ReactNode } from "react";
import CodeTabs from "../ui/CodeTabs";

type ExampleCardProps = {
    title: string;
    css: string;
    tailwind: string;
    children: ReactNode;
};

export default function ExampleCard({
    title,
    css,
    tailwind,
    children,
}: ExampleCardProps) {
    return (
        <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-foreground">
                    {title}
                </h2>
            </header>

            <CodeTabs
                css={css}
                tailwind={tailwind}
            />

            <div className="mt-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                    Live Preview
                </h3>

                <div className="flex min-h-64 items-center justify-center rounded-2xl border border-border bg-background p-10">
                    {children}
                </div>
            </div>
        </section>
    );
}