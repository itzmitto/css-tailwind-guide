import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "spacing", title: "Spacing", group: "Layout", css: "padding: 1rem;", tailwind: "p-4", previewLabel: "Spacing preview", options: [{ label: "Small", tailwind: "p-2", css: "padding: 0.5rem" }, { label: "Medium", tailwind: "p-4", css: "padding: 1rem" }, { label: "Large", tailwind: "p-8", css: "padding: 2rem" }] });
