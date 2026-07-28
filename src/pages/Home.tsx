import Layout from "../components/layout/Layout";

export default function Home() {
    return (
        <Layout>
            <section className="max-w-6xl">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                    React • TypeScript • Tailwind CSS
                </span>

                <h1 className="mt-8 text-6xl font-black leading-tight">
                    Learn
                    <span className="text-blue-500"> CSS </span>
                    and
                    <span className="text-cyan-400"> Tailwind CSS</span>
                    <br />
                    Side by Side.
                </h1>

                <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
                    Discover how regular CSS translates into Tailwind CSS with live
                    examples, copyable code snippets and interactive previews.
                </p>

                <div className="mt-10 flex gap-4">
                    <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
                        Get Started
                    </button>

                    <button className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500 hover:bg-zinc-900">
                        Browse Examples
                    </button>
                </div>
                <div className="mt-20 grid grid-cols-3 gap-8">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                        <h2 className="text-2xl font-bold">400+</h2>

                        <p className="mt-3 text-zinc-400">
                            CSS properties explained with Tailwind equivalents.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                        <h2 className="text-2xl font-bold">Live Preview</h2>

                        <p className="mt-3 text-zinc-400">
                            Every utility class includes a visual example.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                        <h2 className="text-2xl font-bold">Copy Code</h2>

                        <p className="mt-3 text-zinc-400">
                            Copy CSS or Tailwind classes with one click.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}