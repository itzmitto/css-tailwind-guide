import type { Challenge } from "./types";

const challengeModules = import.meta.glob<{ default?: Challenge[] }>("./*.ts", { eager: true });

export const challenges = Object.values(challengeModules)
    .flatMap((module) => module.default ?? [])
    .sort((first, second) => first.title.localeCompare(second.title));

export type { Challenge, ChallengeDifficulty } from "./types";
