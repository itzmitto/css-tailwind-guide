import { documentationPages } from "./docs/registry";

const documentationGroups = [
    "Layout",
    "Design",
    "Effects",
    "Interactivity",
    "Accessibility",
] as const;

const documentationNavigation = documentationGroups.map((title) => ({
    title,
    links: documentationPages
        .filter((page) => page.group === title)
        .map((page) => ({
            name: page.title,
            path: `/docs/${page.slug}`,
        })),
}));

export const navigation = [
    {
        title: "Getting Started",
        links: [
            {
                name: "Home",
                path: "/",
            },
            {
                name: "Playground",
                path: "/playground",
            },
            {
                name: "Responsive Playground",
                path: "/responsive",
            },
        ],
    },
    {
        title: "Builders",
        links: [
            {
                name: "Component Builder",
                path: "/builder",
            },
            {
                name: "Layout Builder",
                path: "/layout-builder",
            },
            {
                name: "Marketplace",
                path: "/marketplace",
            },
            {
                name: "Icon Browser",
                path: "/icons",
            },
        ],
    },
    ...documentationNavigation,
];
