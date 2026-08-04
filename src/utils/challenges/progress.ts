import { badges } from "../../data/challenges/badges";
import type { Challenge, BadgeDefinition } from "../../data/challenges/types";

export function getChallengeLevel(completedCount: number, totalCount: number): string {
    if (totalCount > 0 && completedCount === totalCount) return "Tailwind Master";
    if (completedCount >= 5) return "Advanced";
    if (completedCount >= 3) return "Intermediate";
    return "Beginner";
}

export function getUnlockedBadges(completedIds: string[], challenges: Challenge[]): BadgeDefinition[] {
    const completed = new Set(completedIds);
    const hasTag = (tag: string) => challenges.filter((challenge) => challenge.tags.includes(tag)).every((challenge) => completed.has(challenge.id));

    return badges.filter((badge) => {
        if (badge.requirement === "first") return completed.size > 0;
        if (badge.requirement === "all") return challenges.length > 0 && completed.size === challenges.length;
        if (badge.requirement === "grid") return completed.has("three-column-grid");
        if (badge.requirement === "responsive") return completed.has("responsive-layout");
        return hasTag(badge.requirement);
    });
}
