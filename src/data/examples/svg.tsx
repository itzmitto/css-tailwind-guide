import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "svg", title: "SVG", group: "Design", css: "fill: currentColor; stroke-width: 2;", tailwind: "fill-current stroke-2", previewLabel: "SVG utility preview", options: [{ label: "Current fill", tailwind: "fill-current", css: "fill: currentColor" }, { label: "Blue fill", tailwind: "fill-blue-500", css: "fill: #3b82f6" }, { label: "Stroke", tailwind: "stroke-2", css: "stroke-width: 2" }] });
