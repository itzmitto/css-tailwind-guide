import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "transforms", title: "Transforms", group: "Effects", css: "transform: scale(1.05);", tailwind: "scale-105", previewLabel: "Transform preview", options: [{ label: "Scale", tailwind: "scale-105", css: "transform: scale(1.05)" }, { label: "Rotate", tailwind: "rotate-6", css: "transform: rotate(6deg)" }, { label: "Translate", tailwind: "translate-x-2", css: "transform: translateX(0.5rem)" }] });
