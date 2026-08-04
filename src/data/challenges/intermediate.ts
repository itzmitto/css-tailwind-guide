import type { Challenge } from "./types";

const intermediateChallenges: Challenge[] = [
    {
        id: "three-column-grid",
        difficulty: "Intermediate",
        title: "Create a 3-column grid",
        goal: "Lay out cards in three equal columns with 1rem gaps.",
        cssRequirement: "display: grid;\ngrid-template-columns: repeat(3, minmax(0, 1fr));\ngap: 1rem;",
        solution: "grid grid-cols-3 gap-4",
        hint: "Use grid first, then choose the column count and gap scale.",
        explanation: "grid enables CSS Grid, grid-cols-3 creates three equal tracks, and gap-4 adds a 1rem gap between items.",
        cssEquivalent: "display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem;",
        preview: { containerClasses: "grid grid-cols-3 gap-4", items: ["1", "2", "3"] },
        tags: ["grid"],
    },
    {
        id: "responsive-layout",
        difficulty: "Intermediate",
        title: "Responsive layout",
        goal: "Use one column by default, two columns at md, and four columns at lg.",
        cssRequirement: "display: grid;\n@media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n@media (min-width: 1024px) { grid-template-columns: repeat(4, minmax(0, 1fr)); }",
        solution: "grid md:grid-cols-2 lg:grid-cols-4",
        hint: "Use mobile-first grid utilities with md: and lg: prefixes.",
        explanation: "The base grid utility creates the container. Breakpoint variants progressively add two and then four columns as viewport width increases.",
        cssEquivalent: "display: grid; @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); } @media (min-width: 1024px) { grid-template-columns: repeat(4, minmax(0, 1fr)); }",
        preview: { containerClasses: "grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4", items: ["A", "B", "C", "D"] },
        tags: ["responsive"],
    },
    {
        id: "flex-navigation",
        difficulty: "Intermediate",
        title: "Space navigation items",
        goal: "Place navigation items in a row with space between them.",
        cssRequirement: "display: flex;\njustify-content: space-between;",
        solution: "flex justify-between",
        hint: "The main axis alignment utility controls distribution.",
        explanation: "flex creates a row by default and justify-between pushes the first and last items to opposite edges.",
        cssEquivalent: "display: flex; justify-content: space-between;",
        preview: { containerClasses: "flex justify-between", items: ["Brand", "Menu"] },
        tags: ["flexbox"],
    },
];

export default intermediateChallenges;
