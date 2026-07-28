import { ReactNode } from "react";

export type Difficulty =
    | "Beginner"
    | "Intermediate"
    | "Advanced";

export interface Example {
    id: string;
    title: string;
    description: string;

    css: string;
    tailwind: string;

    preview: ReactNode;

    difficulty: Difficulty;

    tags: string[];

    browserSupport: string[];

    related: string[];
}

export interface DocsSection {
    title: string;
    description: string;
    examples: Example[];
}