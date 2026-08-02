export default function TestimonialsTemplate() {
    return (
        <section className="rounded-3xl border border-border bg-background px-10 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-5xl font-black">
                    Testimonials
                </h2>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-border p-8"
                        >
                            <p className="italic text-muted">
                                "This builder saved me hours of
                                work."
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
                                    A
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        Developer
                                    </h3>

                                    <p className="text-sm text-muted">
                                        Tailwind User
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}