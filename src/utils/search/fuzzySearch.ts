import type { CommandItem } from "../../components/command/commandData";

function calculateScore(
    query: string,
    text: string
): number {
    query = query.toLowerCase().trim();
    text = text.toLowerCase();

    if (!query) {
        return 0;
    }

    let score = 0;
    let queryIndex = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === query[queryIndex]) {
            score += 5;
            queryIndex++;
        } else {
            score -= 0.05;
        }

        if (queryIndex === query.length) {
            break;
        }
    }

    if (queryIndex !== query.length) {
        return -1;
    }

    if (text.startsWith(query)) {
        score += 100;
    }

    if (text.includes(query)) {
        score += 40;
    }

    score -= text.length * 0.02;

    return score;
}

export function fuzzySearch(
    items: CommandItem[],
    query: string
): CommandItem[] {
    if (!query.trim()) {
        return items;
    }

    return items
        .map((item) => {
            const score = Math.max(
                calculateScore(query, item.title),
                calculateScore(query, item.description),
                calculateScore(query, item.path)
            );

            return {
                item,
                score,
            };
        })
        .filter((entry) => entry.score >= 0)
        .sort((a, b) => b.score - a.score)
        .map((entry) => entry.item);
}