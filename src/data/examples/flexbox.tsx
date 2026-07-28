import { DocsSection } from "../../types/docs";

export const flexbox: DocsSection = {
    title: "Flexbox",

    description:
        "Learn the CSS Flexbox layout system and its Tailwind CSS utilities.",

    examples: [
        {
            id: "display-flex",

            title: "Display Flex",

            description:
                "Creates a flex container.",

            css: `display: flex;`,

            tailwind: `flex`,

            preview: (
                <div className="flex gap-3">
                    <div className="h-16 w-16 rounded bg-blue-500"></div>
                    <div className="h-16 w-16 rounded bg-blue-500"></div>
                    <div className="h-16 w-16 rounded bg-blue-500"></div>
                </div>
            ),

            difficulty: "Beginner",

            tags: [
                "flex",
                "layout",
            ],

            browserSupport: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],

            related: [
                "justify-content",
                "align-items",
            ],
        },

        {
            id: "justify-center",

            title: "Justify Content",

            description:
                "Centers items horizontally.",

            css: `justify-content: center;`,

            tailwind: `justify-center`,

            preview: (
                <div className="flex justify-center gap-3 w-full">
                    <div className="h-16 w-16 rounded bg-green-500"></div>
                    <div className="h-16 w-16 rounded bg-green-500"></div>
                </div>
            ),

            difficulty: "Beginner",

            tags: [
                "justify",
                "flex",
            ],

            browserSupport: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],

            related: [
                "align-items",
            ],
        },

        {
            id: "align-items",

            title: "Align Items",

            description:
                "Centers items vertically.",

            css: `align-items: center;`,

            tailwind: `items-center`,

            preview: (
                <div className="flex h-40 items-center gap-3">
                    <div className="h-16 w-16 rounded bg-purple-500"></div>
                    <div className="h-16 w-16 rounded bg-purple-500"></div>
                </div>
            ),

            difficulty: "Beginner",

            tags: [
                "alignment",
                "flex",
            ],

            browserSupport: [
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
            ],

            related: [
                "justify-content",
            ],
        },
    ],
};