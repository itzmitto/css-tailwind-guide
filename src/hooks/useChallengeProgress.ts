import { useEffect, useMemo, useState } from "react";
import { challenges } from "../data/challenges";
import { getChallengeLevel, getUnlockedBadges } from "../utils/challenges/progress";

const STORAGE_KEY = "tailwind-challenge-progress";

export default function useChallengeProgress() {
    const [completedIds, setCompletedIds] = useState<string[]>(() => {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); } catch { return []; }
    });

    useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds)); }, [completedIds]);

    const progress = useMemo(() => {
        const completed = completedIds.filter((id) => challenges.some((challenge) => challenge.id === id));
        return { completedIds: completed, score: completed.length, percentage: challenges.length ? Math.round((completed.length / challenges.length) * 100) : 0, level: getChallengeLevel(completed.length, challenges.length), badges: getUnlockedBadges(completed, challenges) };
    }, [completedIds]);

    function markComplete(id: string) { setCompletedIds((current) => current.includes(id) ? current : [...current, id]); }

    return { ...progress, markComplete };
}
