import type { Challenge } from "./types";

const advancedChallenges: Challenge[] = [
    {
        id: "adaptive-sidebar",
        difficulty: "Advanced",
        title: "Adaptive sidebar layout",
        goal: "Stack content by default, then switch to a horizontal layout on large screens.",
        cssRequirement: "display: flex;\nflex-direction: column;\n@media (min-width: 1024px) { flex-direction: row; }",
        solution: "flex flex-col lg:flex-row",
        hint: "Start mobile-first with a column, then override direction at lg.",
        explanation: "flex establishes the layout, flex-col stacks children on smaller screens, and lg:flex-row changes the direction only at desktop widths.",
        cssEquivalent: "display: flex; flex-direction: column; @media (min-width: 1024px) { flex-direction: row; }",
        preview: { containerClasses: "flex flex-col gap-3 lg:flex-row", items: ["Sidebar", "Content"] },
        tags: ["responsive", "flexbox"],
    },
    {
        id: "interactive-button",
        difficulty: "Advanced",
        title: "Interactive button state",
        goal: "Create a blue button that darkens on hover with a smooth color transition.",
        cssRequirement: "background-color: #3b82f6;\ntransition: background-color 150ms;\n:hover { background-color: #2563eb; }",
        solution: "bg-blue-500 transition-colors hover:bg-blue-600",
        hint: "Combine a base color, a transition utility, and a hover variant.",
        explanation: "bg-blue-500 sets the base color, transition-colors animates color changes, and hover:bg-blue-600 applies the darker interactive state.",
        cssEquivalent: "background-color: #3b82f6; transition: background-color 150ms; &:hover { background-color: #2563eb; }",
        preview: { containerClasses: "flex", items: ["Hover me"] },
        tags: ["interactivity"],
    },
];

export default advancedChallenges;
