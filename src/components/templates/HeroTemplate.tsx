export default function HeroTemplate() {
    return (
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-20 text-white">
            <div className="mx-auto max-w-5xl text-center">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                    New
                </span>

                <h1 className="mt-8 text-6xl font-black">
                    Build beautiful websites
                    <br />
                    with Tailwind CSS
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
                    Generate responsive layouts, reusable components and
                    complete landing pages with a live preview.
                </p>

                <div className="mt-12 flex justify-center gap-5">
                    <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
                        Get Started
                    </button>

                    <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-600">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}