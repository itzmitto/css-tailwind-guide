import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "tables", title: "Tables", group: "Design", css: "table-layout: fixed; border-collapse: collapse;", tailwind: "table-fixed border-collapse", previewLabel: "Table preview", options: [{ label: "Auto", tailwind: "table-auto", css: "table-layout: auto" }, { label: "Fixed", tailwind: "table-fixed", css: "table-layout: fixed" }, { label: "Collapse", tailwind: "border-collapse", css: "border-collapse: collapse" }] });
