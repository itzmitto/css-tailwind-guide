import type { ReactNode } from "react";

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

export type DocumentationGroup =
    | "Layout"
    | "Design"
    | "Effects"
    | "Interactivity"
    | "Accessibility";

export type InteractiveOption = {
    label: string;
    tailwind: string;
    css: string;
};

export type InteractiveExample = {
    title: string;
    description: string;
    options: InteractiveOption[];
    preview: (tailwind: string) => ReactNode;
};

export type DocumentationPage = {
    slug: string;
    title: string;
    group: DocumentationGroup;
    introduction: string;
    explanation: string;
    example: Example;
    interactive: InteractiveExample;
    bestPractices: string[];
    commonMistakes: string[];
    tips: string[];
    relatedUtilities: string[];
};
