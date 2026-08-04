import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "overflow", title: "Overflow", group: "Layout", css: "overflow: hidden;", tailwind: "overflow-hidden", previewLabel: "Overflow preview", options: [{ label: "Hidden", tailwind: "overflow-hidden", css: "overflow: hidden" }, { label: "Auto", tailwind: "overflow-auto", css: "overflow: auto" }, { label: "Scroll", tailwind: "overflow-scroll", css: "overflow: scroll" }] });
