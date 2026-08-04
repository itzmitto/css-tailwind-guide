import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

const flexbox = createCategoryDocumentation({
    slug: "flexbox",
    title: "Flexbox",
    group: "Layout",
    css: "display: flex; justify-content: center;",
    tailwind: "flex justify-center",
    previewLabel: "Flex preview",
    options: [
        { label: "Row", tailwind: "flex flex-row", css: "display: flex; flex-direction: row" },
        { label: "Column", tailwind: "flex flex-col", css: "display: flex; flex-direction: column" },
        { label: "Center", tailwind: "flex justify-center", css: "display: flex; justify-content: center" },
    ],
});

export { flexbox };
export default flexbox;
