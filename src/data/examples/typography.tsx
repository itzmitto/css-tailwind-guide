import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "typography", title: "Typography", group: "Design", css: "font-size: 1.5rem; font-weight: 700;", tailwind: "text-2xl font-bold", previewLabel: "Typography preview", options: [{ label: "Small", tailwind: "text-sm", css: "font-size: 0.875rem" }, { label: "Heading", tailwind: "text-2xl font-bold", css: "font-size: 1.5rem; font-weight: 700" }, { label: "Muted", tailwind: "text-muted", css: "color: muted" }] });
