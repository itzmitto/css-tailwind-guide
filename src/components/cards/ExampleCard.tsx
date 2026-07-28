import { ReactNode } from "react";
import CodeTabs from "../ui/CodeTabs";

type ExampleCardProps = {
    title: string;
    description: string;
    css: string;
    tailwind: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    tags: string[];
    browserSupport: string[];
    children: ReactNode;
};

export default function ExampleCard({
    title,
    description,
    css,
    tailwind,
    difficulty,
    tags,
    browserSupport,
    children,
}: ExampleCardProps) {
    const difficultyColor = {
        Beginner: "bg-green-500/20 text-green-400",
        Intermediate: "bg-yellow-500/20 text-yellow-400",
        Advanced: "bg-red-500/20 text-red-400",
    };

    return (
        <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl">
            <header className="mb-8">
                <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-bold text-foreground">
                        {title}
                    </h2>

                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor[difficulty]}`}
                    >
                        {difficulty}
                    </span>
                </div>

                <p className="mt-4 max-w-3xl text-muted">
                    {description}
                </p>
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

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                        Tags
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                        Browser Support
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {browserSupport.map((browser) => (
                            <span
                                key={browser}
                                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
                            >
                                {browser}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}