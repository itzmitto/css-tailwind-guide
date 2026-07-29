export type UtilityReference = {
    tailwind: string;
    css: string;
    category: string;
    description: string;
    browserSupport: string[];
};

export const utilityReference: UtilityReference[] = [
    {
        tailwind: "flex",
        css: "display: flex",
        category: "Layout",
        description: "Creates a flex container.",
        browserSupport: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
        ],
    },
    {
        tailwind: "justify-center",
        css: "justify-content: center",
        category: "Flexbox",
        description: "Centers items on the main axis.",
        browserSupport: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
        ],
    },
    {
        tailwind: "items-center",
        css: "align-items: center",
        category: "Flexbox",
        description: "Centers items on the cross axis.",
        browserSupport: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
        ],
    },
    {
        tailwind: "flex-col",
        css: "flex-direction: column",
        category: "Flexbox",
        description: "Stacks flex items vertically.",
        browserSupport: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
        ],
    },
    {
        tailwind: "rounded-xl",
        css: "border-radius: 12px",
        category: "Borders",
        description: "Applies an extra large border radius.",
        browserSupport: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
        ],
    },
];