import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "sizing", title: "Sizing", group: "Layout", css: "width: 16rem;", tailwind: "w-64", previewLabel: "Sizing preview", options: [{ label: "Small", tailwind: "w-32", css: "width: 8rem" }, { label: "Medium", tailwind: "w-64", css: "width: 16rem" }, { label: "Full", tailwind: "w-full", css: "width: 100%" }] });
