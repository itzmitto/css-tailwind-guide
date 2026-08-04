import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

const colors = createCategoryDocumentation({
    slug: "colors",
    title: "Colors",
    group: "Design",
    css: "background-color: #3b82f6;",
    tailwind: "bg-blue-500",
    previewLabel: "Color preview",
    options: [
        { label: "Blue", tailwind: "bg-blue-500", css: "background-color: #3b82f6" },
        { label: "Emerald", tailwind: "bg-emerald-500", css: "background-color: #10b981" },
        { label: "Rose", tailwind: "bg-rose-500", css: "background-color: #f43f5e" },
    ],
});

export { colors };
export default colors;
