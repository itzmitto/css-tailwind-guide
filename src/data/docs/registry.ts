import type { DocumentationPage } from "../../types/docs";

const pageModules = import.meta.glob<{
    default: DocumentationPage;
}>("../examples/*.tsx", { eager: true });

export const documentationPages = Object.values(pageModules)
    .map((module) => module.default)
    .filter((page): page is DocumentationPage => Boolean(page?.slug))
    .sort((first, second) => first.title.localeCompare(second.title));

export function getDocumentationPage(slug: string) {
    return documentationPages.find((page) => page.slug === slug);
}
