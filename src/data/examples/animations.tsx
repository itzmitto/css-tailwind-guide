import { createCategoryDocumentation } from "../docs/createCategoryDocumentation";

export default createCategoryDocumentation({ slug: "animations", title: "Animations", group: "Effects", css: "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;", tailwind: "animate-pulse", previewLabel: "Animation preview", options: [{ label: "Spin", tailwind: "animate-spin", css: "animation: spin 1s linear infinite" }, { label: "Pulse", tailwind: "animate-pulse", css: "animation: pulse 2s infinite" }, { label: "Bounce", tailwind: "animate-bounce", css: "animation: bounce 1s infinite" }] });
