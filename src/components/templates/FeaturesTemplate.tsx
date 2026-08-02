export default function FeaturesTemplate() {
    const features = [
        {
            title: "Lightning Fast",
            description:
                "Generate Tailwind components instantly.",
        },
        {
            title: "Responsive",
            description:
                "Every component works on every screen.",
        },
        {
            title: "Developer Friendly",
            description:
                "Clean code ready to copy & paste.",
        },
    ];

    return (
        <section className="rounded-3xl border border-border bg-background px-10 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-5xl font-black">
                    Features
                </h2>

                <p className="mt-4 text-center text-muted">
                    Everything you need to build modern websites.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-border p-8"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 text-2xl text-white">
                                ⚡
                            </div>

                            <h3 className="text-2xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-muted">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}