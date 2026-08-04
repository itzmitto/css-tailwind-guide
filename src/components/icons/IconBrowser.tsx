import { useMemo, useState } from "react";
import { iconCatalog } from "../../data/icons/catalog";
import { filterIcons } from "../../utils/icons/filterIcons";
import type { IconCategoryFilter } from "../../utils/icons/filterIcons";
import IconCard from "./IconCard";
import IconFilters from "./IconFilters";

export default function IconBrowser() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<IconCategoryFilter>("All");

    const icons = useMemo(
        () => filterIcons(iconCatalog, query, category),
        [query, category]
    );

    return (
        <section className="mx-auto max-w-7xl">
            <header className="max-w-3xl">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                    Lucide React
                </span>
                <h1 className="mt-8 text-5xl font-black text-foreground sm:text-6xl">
                    Icon Browser
                </h1>
                <p className="mt-5 text-lg leading-8 text-muted">
                    Browse production-ready icons and copy the React snippet you
                    need for your Tailwind interface.
                </p>
            </header>

            <div className="mt-10">
                <IconFilters
                    query={query}
                    category={category}
                    onQueryChange={setQuery}
                    onCategoryChange={setCategory}
                />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-sm text-muted">
                    {icons.length} {icons.length === 1 ? "icon" : "icons"} found
                </p>
            </div>

            {icons.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-dashed border-border bg-background p-12 text-center">
                    <h2 className="text-xl font-semibold text-foreground">
                        No icons found
                    </h2>
                    <p className="mt-3 text-muted">
                        Try a different search term or category.
                    </p>
                </div>
            ) : (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {icons.map((icon) => (
                        <IconCard key={icon.name} icon={icon} />
                    ))}
                </div>
            )}
        </section>
    );
}
