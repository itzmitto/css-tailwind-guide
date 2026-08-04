import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "display", title: "Display", group: "Layout", css: "display: grid;", tailwind: "grid", previewLabel: "Display preview", options: [{ label: "Block", tailwind: "block", css: "display: block" }, { label: "Flex", tailwind: "flex", css: "display: flex" }, { label: "Grid", tailwind: "grid", css: "display: grid" }] });
