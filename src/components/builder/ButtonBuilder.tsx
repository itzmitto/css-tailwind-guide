import { useMemo, useState } from "react";
import { buttonVariants } from "../../data/components/button";

export default function ButtonBuilder() {
    const [color, setColor] = useState("blue");
    const [size, setSize] = useState("medium");
    const [rounded, setRounded] = useState("lg");

    const classes = useMemo(() => {
        return [
            buttonVariants.colors[
                color as keyof typeof buttonVariants.colors
            ],
            buttonVariants.sizes[
                size as keyof typeof buttonVariants.sizes
            ],
            buttonVariants.rounded[
                rounded as keyof typeof buttonVariants.rounded
            ],
            "font-semibold transition"
        ].join(" ");
    }, [color, size, rounded]);

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold">
                    Button Builder
                </h2>

                <div className="mt-8 space-y-6">
                    <div>
                        <label className="mb-2 block font-medium">
                            Color
                        </label>

                        <select
                            value={color}
                            onChange={(e) =>
                                setColor(e.target.value)
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="blue">Blue</option>
                            <option value="emerald">
                                Emerald
                            </option>
                            <option value="red">Red</option>
                            <option value="zinc">Zinc</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Size
                        </label>

                        <select
                            value={size}
                            onChange={(e) =>
                                setSize(e.target.value)
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="small">
                                Small
                            </option>

                            <option value="medium">
                                Medium
                            </option>

                            <option value="large">
                                Large
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Rounded
                        </label>

                        <select
                            value={rounded}
                            onChange={(e) =>
                                setRounded(e.target.value)
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="none">
                                None
                            </option>

                            <option value="md">
                                Medium
                            </option>

                            <option value="lg">
                                Large
                            </option>

                            <option value="full">
                                Full
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold">
                    Preview
                </h2>

                <div className="mt-10 flex justify-center">
                    <button className={classes}>
                        Click Me
                    </button>
                </div>

                <div className="mt-10">
                    <h3 className="mb-3 font-semibold">
                        Generated Tailwind
                    </h3>

                    <pre className="overflow-auto rounded-xl border border-border bg-surface p-4">
                        {classes}
                    </pre>
                </div>
            </div>
        </div>
    );
}