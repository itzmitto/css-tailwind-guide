import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "interactivity", title: "Interactivity", group: "Interactivity", css: "cursor: pointer; user-select: none;", tailwind: "cursor-pointer select-none", previewLabel: "Interactive preview", options: [{ label: "Pointer", tailwind: "cursor-pointer", css: "cursor: pointer" }, { label: "Not allowed", tailwind: "cursor-not-allowed", css: "cursor: not-allowed" }, { label: "No selection", tailwind: "select-none", css: "user-select: none" }] });
