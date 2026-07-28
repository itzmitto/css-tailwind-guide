import { searchIndex } from "../data/search";
import { Example } from "../types/docs";

export function searchExamples(query: string): Example[] {
    const q = query.toLowerCase().trim();

    if (!q) {
        return [];
    }

    return searchIndex.flatMap((section) =>
        section.examples.filter((example) => {
            return (
                example.title.toLowerCase().includes(q) ||
                example.description.toLowerCase().includes(q) ||
                example.css.toLowerCase().includes(q) ||
                example.tailwind.toLowerCase().includes(q) ||
                example.tags.some((tag) =>
                    tag.toLowerCase().includes(q)
                )
            );
        })
    );
}