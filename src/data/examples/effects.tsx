import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "effects", title: "Effects", group: "Effects", css: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);", tailwind: "shadow-lg", previewLabel: "Effects preview", options: [{ label: "Small shadow", tailwind: "shadow-sm", css: "box-shadow: small" }, { label: "Large shadow", tailwind: "shadow-lg", css: "box-shadow: large" }, { label: "Opacity", tailwind: "opacity-70", css: "opacity: 0.7" }] });
