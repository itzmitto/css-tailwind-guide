import type { DocumentationPage } from "../../types/docs";

export const browserSupport = [
    "Chrome",
    "Firefox",
    "Safari",
    "Edge",
];

export function createDocumentation(
    page: DocumentationPage
): DocumentationPage {
    return page;
}

export function createPreview(
    classes: string,
    label = "Tailwind preview"
) {
    return (
        <div className={`rounded-xl bg-blue-500 px-5 py-3 text-white ${classes}`}>
            {label}
        </div>
    );
}
