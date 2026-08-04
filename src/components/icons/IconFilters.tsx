import { Search } from "lucide-react";
import { iconCategories } from "../../data/icons/catalog";
import type { IconCategoryFilter } from "../../utils/icons/filterIcons";

type IconFiltersProps = {
    query: string;
    category: IconCategoryFilter;
    onQueryChange(query: string): void;
    onCategoryChange(category: IconCategoryFilter): void;
};

export default function IconFilters({
    query,
    category,
    onQueryChange,
    onCategoryChange,
}: IconFiltersProps) {
    const categories: IconCategoryFilter[] = ["All", ...iconCategories];

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative block w-full sm:max-w-md">
                <span className="sr-only">Search icons</span>
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                    placeholder="Search icons..."
                    className="w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-foreground outline-none transition focus:border-blue-500"
                />
            </label>

            <div
                role="group"
                className="flex gap-2 overflow-x-auto pb-1 sm:max-w-[55%]"
                aria-label="Icon categories"
            >
                {categories.map((item) => (
                    <button
                        key={item}
                        type="button"
                        aria-pressed={category === item}
                        onClick={() => onCategoryChange(item)}
                        className={`whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium transition ${
                            category === item
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-border text-muted hover:bg-surface hover:text-foreground"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
