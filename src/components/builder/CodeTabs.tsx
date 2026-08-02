import { useMemo, useState } from "react";
import CopyButton from "../ui/CopyButton";

type Props = {
    classes: string;
};

const tabs = [
    "HTML",
    "React",
    "Vue",
    "Svelte",
    "Astro",
] as const;

export default function CodeTabs({
    classes,
}: Props) {
    const [activeTab, setActiveTab] =
        useState<(typeof tabs)[number]>("HTML");

    const code = useMemo(() => {
        switch (activeTab) {
            case "HTML":
                return `<button class="${classes}">
    Button
</button>`;

            case "React":
                return `export default function Button() {
    return (
        <button className="${classes}">
            Button
        </button>
    );
}`;

            case "Vue":
                return `<template>
    <button class="${classes}">
        Button
    </button>
</template>`;

            case "Svelte":
                return `<button class="${classes}">
    Button
</button>`;

            case "Astro":
                return `---
---

<button class="${classes}">
    Button
</button>`;
        }
    }, [activeTab, classes]);

    return (
        <div className="rounded-2xl border border-border bg-background">
            <div className="flex border-b border-border">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() =>
                            setActiveTab(tab)
                        }
                        className={`px-5 py-3 transition ${
                            activeTab === tab
                                ? "border-b-2 border-blue-500 font-semibold"
                                : "text-muted hover:text-foreground"
                        }`}
                    >
                        {tab}
                    </button>
                ))}

                <div className="ml-auto p-2">
                    <CopyButton text={code} />
                </div>
            </div>

            <pre className="overflow-auto p-6">
                <code>{code}</code>
            </pre>
        </div>
    );
}