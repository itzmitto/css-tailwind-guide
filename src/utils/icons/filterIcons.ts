import type { IconCategory, IconDefinition } from "../../data/icons/catalog";

export type IconCategoryFilter = IconCategory | "All";

export function filterIcons(
    icons: readonly IconDefinition[],
    query: string,
    category: IconCategoryFilter
): IconDefinition[] {
    const normalizedQuery = query.trim().toLowerCase();

    return icons.filter((icon) => {
        const matchesCategory =
            category === "All" || icon.category === category;
        const matchesQuery = icon.name
            .toLowerCase()
            .includes(normalizedQuery);

        return matchesCategory && matchesQuery;
    });
}
