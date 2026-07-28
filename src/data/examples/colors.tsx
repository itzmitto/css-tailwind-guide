import { DocsSection } from "../../types/docs";

export const colors: DocsSection = {
    title: "Colors",

    description:
        "Learn how CSS colors translate into Tailwind CSS utility classes.",

    examples: [
        {
            id: "background-color",
            title: "Background Color",
            description:
                "Sets the background color of an element.",
            css: "background-color: #3b82f6;",
            tailwind: "bg-blue-500",
            preview: (
                <div className="h-24 w-24 rounded-xl bg-blue-500"></div>
            ),
            difficulty: "Beginner",
            tags: [
                "color",
                "background",
                "utility",
            ],
            browserSupport: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],
            related: [
                "text-color",
                "border-color",
            ],
        },
        {
            id: "text-color",
            title: "Text Color",
            description:
                "Changes the text color.",
            css: "color: white;",
            tailwind: "text-white",
            preview: (
                <p className="text-3xl font-bold text-white">
                    Hello Tailwind
                </p>
            ),
            difficulty: "Beginner",
            tags: [
                "color",
                "text",
            ],
            browserSupport: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],
            related: [
                "background-color",
            ],
        },
        {
            id: "border-color",
            title: "Border Color",
            description:
                "Changes the border color.",
            css: "border:4px solid #27272a;",
            tailwind: "border-4 border-zinc-800",
            preview: (
                <div className="rounded-xl border-4 border-zinc-800 p-8">
                    Border Example
                </div>
            ),
            difficulty: "Beginner",
            tags: [
                "border",
                "color",
            ],
            browserSupport: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],
            related: [
                "background-color",
            ],
        },
    ],
};