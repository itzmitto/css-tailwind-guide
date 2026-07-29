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
        title: "Display",
        description: "Display utilities",
        path: "/docs/display",
    },
    {
        title: "Flexbox",
        description: "Flex utilities",
        path: "/docs/flexbox",
    },
    {
        title: "Grid",
        description: "Grid utilities",
        path: "/docs/grid",
    },
    {
        title: "Spacing",
        description: "Margin & Padding",
        path: "/docs/spacing",
    },
    {
        title: "Sizing",
        description: "Width & Height",
        path: "/docs/sizing",
    },
    {
        title: "Colors",
        description: "Tailwind colors",
        path: "/docs/colors",
    },
    {
        title: "Typography",
        description: "Fonts & text",
        path: "/docs/typography",
    },
];