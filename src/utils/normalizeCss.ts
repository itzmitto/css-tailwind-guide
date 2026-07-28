export function normalizeCss(css: string): string {
    return css
        .trim()
        .toLowerCase()
        .replace(/\s*:\s*/g, ":")
        .replace(/\s+/g, " ")
        .replace(/\s*;\s*/g, ";");
}