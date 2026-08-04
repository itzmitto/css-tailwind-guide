import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "filters", title: "Filters", group: "Effects", css: "filter: blur(4px);", tailwind: "blur-sm", previewLabel: "Filters preview", options: [{ label: "Blur", tailwind: "blur-sm", css: "filter: blur(4px)" }, { label: "Grayscale", tailwind: "grayscale", css: "filter: grayscale(100%)" }, { label: "Brightness", tailwind: "brightness-125", css: "filter: brightness(1.25)" }] });
