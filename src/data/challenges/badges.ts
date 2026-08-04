import type { BadgeDefinition } from "./types";

export const badges: BadgeDefinition[] = [
    { id: "first-challenge", name: "First Challenge", description: "Complete your first challenge.", requirement: "first" },
    { id: "flexbox-expert", name: "Flexbox Expert", description: "Complete every Flexbox challenge.", requirement: "flexbox" },
    { id: "grid-master", name: "Grid Master", description: "Complete the 3-column grid challenge.", requirement: "grid" },
    { id: "responsive-hero", name: "Responsive Hero", description: "Complete the responsive layout challenge.", requirement: "responsive" },
    { id: "tailwind-wizard", name: "Tailwind Wizard", description: "Complete every challenge.", requirement: "all" },
];
