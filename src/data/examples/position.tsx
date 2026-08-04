import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "position", title: "Position", group: "Layout", css: "position: relative;", tailwind: "relative", previewLabel: "Position preview", options: [{ label: "Relative", tailwind: "relative", css: "position: relative" }, { label: "Stacking", tailwind: "relative z-10", css: "position: relative; z-index: 10" }, { label: "Offset", tailwind: "relative left-2", css: "position: relative; left: 0.5rem" }] });
