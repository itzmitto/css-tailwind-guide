import type { Challenge } from "./types";

const beginnerChallenges: Challenge[] = [
    {
        id: "center-items",
        difficulty: "Beginner",
        title: "Center items",
        goal: "Center the items horizontally and vertically inside a container.",
        cssRequirement: "display: flex;\njustify-content: center;\nalign-items: center;",
        solution: "flex justify-center items-center",
        acceptedSolutions: ["grid place-items-center"],
        hint: "Start by creating a flex container, then align on both axes.",
        explanation: "flex creates the flex formatting context, justify-center aligns the main axis, and items-center aligns the cross axis.",
        cssEquivalent: "display: flex; justify-content: center; align-items: center;",
        preview: { containerClasses: "flex h-40 items-center justify-center", items: ["Centered item"] },
        tags: ["flexbox"],
    },
    {
        id: "create-spacing",
        difficulty: "Beginner",
        title: "Create spacing",
        goal: "Add 1.5rem of padding around a content block.",
        cssRequirement: "padding: 1.5rem;",
        solution: "p-6",
        hint: "Tailwind’s spacing scale uses 4px increments.",
        explanation: "p-6 applies padding on all four sides. Its value is 1.5rem, matching the CSS requirement.",
        cssEquivalent: "padding: 1.5rem;",
        preview: { containerClasses: "p-6", items: ["Padded content"] },
        tags: ["spacing"],
    },
    {
        id: "hide-element",
        difficulty: "Beginner",
        title: "Hide an element",
        goal: "Remove an element from the layout.",
        cssRequirement: "display: none;",
        solution: "hidden",
        hint: "Use the utility that maps directly to display: none.",
        explanation: "hidden applies display: none, removing the element from both rendering and layout flow.",
        cssEquivalent: "display: none;",
        preview: { containerClasses: "flex gap-3", items: ["Visible", "Hidden utility"] },
        tags: ["display"],
    },
];

export default beginnerChallenges;
