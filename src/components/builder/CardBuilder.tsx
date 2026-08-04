import { useMemo, useState } from "react";
import { cardVariants } from "../../data/components/card";
import CodeTabs from "./CodeTabs";

export default function CardBuilder() {
    const [background, setBackground] =
        useState("zinc");

    const [rounded, setRounded] =
        useState("2xl");

    const [shadow, setShadow] =
        useState("lg");

    const [padding, setPadding] =
        useState("md");

    const classes = useMemo(() => {
        return [
            cardVariants.background[
            background as keyof typeof cardVariants.background
            ],

            cardVariants.rounded[
            rounded as keyof typeof cardVariants.rounded
            ],

            cardVariants.shadow[
            shadow as keyof typeof cardVariants.shadow
            ],

            cardVariants.padding[
            padding as keyof typeof cardVariants.padding
            ],
        ].join(" ");
    }, [background, rounded, shadow, padding]);

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold">
                    Card Builder
                </h2>

                <div className="mt-8 space-y-6">
                    <div>
                        <label className="mb-2 block font-medium">
                            Background
                        </label>

                        <select
                            value={background}
                            onChange={(e) =>
                                setBackground(
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="white">
                                White
                            </option>

                            <option value="zinc">
                                Zinc
                            </option>

                            <option value="slate">
                                Slate
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
                                setRounded(
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="none">
                                None
                            </option>

                            <option value="md">
                                MD
                            </option>

                            <option value="lg">
                                LG
                            </option>

                            <option value="xl">
                                XL
                            </option>

                            <option value="2xl">
                                2XL
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Shadow
                        </label>

                        <select
                            value={shadow}
                            onChange={(e) =>
                                setShadow(
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="none">
                                None
                            </option>

                            <option value="sm">
                                Small
                            </option>

                            <option value="md">
                                Medium
                            </option>

                            <option value="lg">
                                Large
                            </option>

                            <option value="xl">
                                XL
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Padding
                        </label>

                        <select
                            value={padding}
                            onChange={(e) =>
                                setPadding(
                                    e.target.value
                                )
                            }
                            className="w-full rounded-xl border border-border bg-background p-3"
                        >
                            <option value="sm">
                                Small
                            </option>

                            <option value="md">
                                Medium
                            </option>

                            <option value="lg">
                                Large
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold">
                    Preview
                </h2>

                <div className="mt-8 flex justify-center">
                    <div className={`${classes} max-w-sm`}>
                        <h3 className="text-xl font-bold">
                            Card Title
                        </h3>

                        <p className="mt-3 opacity-80">
                            This is an example card
                            generated by the Component
                            Builder.
                        </p>

                        <button className="mt-6 rounded-lg bg-blue-500 px-4 py-2 text-white">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="mb-3 font-semibold">
                        Generated Tailwind
                    </h3>

                    <pre className="overflow-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm">
                        <code>{classes}</code>
                    </pre>

                    <CodeTabs classes={classes} />
                </div>
            </div>
        </div>
    );
}
