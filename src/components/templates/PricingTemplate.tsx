export default function PricingTemplate() {
    return (
        <section className="rounded-3xl border border-border bg-background px-10 py-20">
            <div className="mx-auto max-w-6xl text-center">
                <h2 className="text-5xl font-black">
                    Pricing
                </h2>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {[
                        {
                            name: "Starter",
                            price: "$0",
                        },
                        {
                            name: "Pro",
                            price: "$19",
                        },
                        {
                            name: "Enterprise",
                            price: "$99",
                        },
                    ].map((plan) => (
                        <div
                            key={plan.name}
                            className="rounded-2xl border border-border p-10"
                        >
                            <h3 className="text-2xl font-bold">
                                {plan.name}
                            </h3>

                            <p className="mt-6 text-5xl font-black">
                                {plan.price}
                            </p>

                            <button className="mt-10 w-full rounded-xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}