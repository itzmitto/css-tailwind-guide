export type ChallengeDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ChallengePreview = {
    containerClasses: string;
    items: string[];
};

export type Challenge = {
    id: string;
    difficulty: ChallengeDifficulty;
    title: string;
    goal: string;
    cssRequirement: string;
    solution: string;
    acceptedSolutions?: string[];
    hint: string;
    explanation: string;
    cssEquivalent: string;
    preview: ChallengePreview;
    tags: string[];
};

export type BadgeDefinition = {
    id: string;
    name: string;
    description: string;
    requirement: "first" | "flexbox" | "grid" | "responsive" | "all";
};
