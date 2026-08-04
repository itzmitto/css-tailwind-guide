export type CommandItem = {
    title: string;
    description: string;
    path: string;
};

export const commandItems: CommandItem[] = [
    {
        title: "Home",
        description: "Introduction",
        path: "/",
    },
    {
        title: "Playground",
        description: "CSS to Tailwind converter",
        path: "/playground",
    },
    {
        title: "Icon Browser",
        description: "Browse and copy Lucide React icons",
        path: "/icons",
    },
    ...documentationPages.map((page) => ({
        title: page.title,
        description: `${page.title} Tailwind utilities`,
        path: `/docs/${page.slug}`,
    })),
];
import { documentationPages } from "../../data/docs/registry";
