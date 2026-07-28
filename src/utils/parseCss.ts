import { normalizeCss } from "./normalizeCss";

export function parseCss(css: string): string[] {
    const withoutBlocks = css.replace(/[^{}]*\{/g, "").replace(/\}/g, "");

    return withoutBlocks
        .split(";")
        .map((line) => normalizeCss(line))
        .filter(Boolean);
}