import Layout from "../components/layout/Layout";

export default function Builder() {
    return (
        <Layout>
            <section className="mx-auto max-w-7xl">
                <h1 className="text-5xl font-black text-foreground">
                    Tailwind Component Builder
                </h1>

                <p className="mt-4 text-lg text-muted">
                    Build complete Tailwind components with live preview and generated code.
                </p>

                <div className="mt-10 grid gap-8 lg:grid-cols-3">
                    <div className="rounded-2xl border border-border bg-background p-6">
                        <h2 className="text-xl font-semibold">
                            Components
                        </h2>

                        <div className="mt-6 space-y-3">
                            <button className="w-full rounded-xl border border-border p-3 text-left hover:bg-surface transition">
                                Button
                            </button>

                            <button className="w-full rounded-xl border border-border p-3 text-left hover:bg-surface transition">
                                Card
                            </button>

                            <button className="w-full rounded-xl border border-border p-3 text-left hover:bg-surface transition">
                                Alert
                            </button>

                            <button className="w-full rounded-xl border border-border p-3 text-left hover:bg-surface transition">
                                Badge
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-6">
                        <h2 className="text-xl font-semibold">
                            Preview
                        </h2>

                        <div className="mt-8 flex h-72 items-center justify-center rounded-xl border border-border">
                            <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
                                Button
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-6">
                        <h2 className="text-xl font-semibold">
                            Generated Code
                        </h2>

                        <pre className="mt-6 overflow-auto rounded-xl border border-border bg-surface p-5">
                            {`<button class="rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600">
    Button
</button>`}
                        </pre>
                    </div>
                </div>
            </section>
        </Layout>
    );
}