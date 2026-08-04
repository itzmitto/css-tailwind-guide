import { createDocumentation, createPreview, browserSupport } from "./createDocumentation";
import type { DocumentationGroup, DocumentationPage, InteractiveOption } from "../../types/docs";

type CategoryConfig = {
    slug: string;
    title: string;
    group: DocumentationGroup;
    css: string;
    tailwind: string;
    options: InteractiveOption[];
    previewLabel: string;
};

export function createCategoryDocumentation(
    config: CategoryConfig
): DocumentationPage {
    return createDocumentation({
        slug: config.slug,
        title: config.title,
        group: config.group,
        introduction: `Learn how ${config.title.toLowerCase()} CSS translates into practical Tailwind utility classes.`,
        explanation: `Tailwind provides focused utilities for ${config.title.toLowerCase()}, helping you compose clear, responsive interfaces without writing one-off CSS.`,
        example: {
            id: `${config.slug}-example`,
            title: `${config.title} utility`,
            description: `A common ${config.title.toLowerCase()} pattern shown in CSS and Tailwind side by side.`,
            css: config.css,
            tailwind: config.tailwind,
            preview: createPreview(config.tailwind, config.previewLabel),
            difficulty: "Beginner",
            tags: [config.slug, "utility", "tailwind"],
            browserSupport,
            related: config.options.map((option) => option.tailwind),
        },
        interactive: {
            title: `Try ${config.title}`,
            description: "Choose an option to update the Tailwind utility and preview instantly.",
            options: config.options,
            preview: (tailwind) => createPreview(tailwind, config.previewLabel),
        },
        bestPractices: [
            `Use ${config.title.toLowerCase()} utilities consistently across related components.`,
            "Prefer responsive and state variants instead of duplicating markup.",
        ],
        commonMistakes: [
            "Combining conflicting utilities without checking the final cascade.",
            "Using arbitrary values when a named utility communicates intent better.",
        ],
        tips: [
            "Use the interactive example to compare equivalent CSS and Tailwind utilities.",
            "Pair utilities with responsive prefixes when layouts need to adapt.",
        ],
        relatedUtilities: config.options.map((option) => option.tailwind),
    });
}
