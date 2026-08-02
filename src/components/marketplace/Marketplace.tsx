import { templates } from "../../data/template-marketplace/templates";

export default function Marketplace() {
    return (
        <section className="mx-auto max-w-7xl">
            <h1 className="text-5xl font-black">
                Template Marketplace
            </h1>

            <p className="mt-4 text-muted">
                Browse reusable Tailwind templates.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {templates.map((template) => {
                    const Component = template.component;

                    return (
                        <div
                            key={template.id}
                            className="overflow-hidden rounded-2xl border border-border bg-background"
                        >
                            <div className="h-64 overflow-hidden border-b border-border">
                                <div className="scale-50 origin-top-left w-[200%]">
                                    <Component />
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
                                    {template.category}
                                </span>

                                <h2 className="mt-4 text-2xl font-bold">
                                    {template.title}
                                </h2>

                                <p className="mt-3 text-muted">
                                    {template.description}
                                </p>

                                <button className="mt-6 w-full rounded-xl bg-blue-500 py-3 text-white transition hover:bg-blue-600">
                                    Use Template
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}