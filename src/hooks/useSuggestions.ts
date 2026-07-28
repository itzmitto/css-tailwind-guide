import { useMemo } from "react";
import { cssSuggestions } from "../data/playground/suggestions";

export function useSuggestions(query: string) {
    return useMemo(() => {
        const value = query.trim().toLowerCase();

        if (!value) {
            return [];
        }

        return cssSuggestions
            .filter((item) =>
                item.toLowerCase().includes(value)
            )
            .slice(0, 8);
    }, [query]);
}