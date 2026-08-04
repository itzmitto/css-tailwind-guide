import { documentationPages } from "./docs/registry";

export const searchData = [
    { title: "Playground", path: "/playground" },
    { title: "Responsive Playground", path: "/responsive" },
    { title: "Challenge Mode", path: "/challenges" },
    { title: "Component Builder", path: "/builder" },
    { title: "Layout Builder", path: "/layout-builder" },
    { title: "Marketplace", path: "/marketplace" },
    { title: "Icons", path: "/icons" },
    ...documentationPages.map((page) => ({
        title: page.title,
        path: `/docs/${page.slug}`,
    })),
];
