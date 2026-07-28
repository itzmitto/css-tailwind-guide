export function convertBorderRadius(
    line: string
): string | null {
    const match = line.match(
        /^border-radius:\s*([0-9]+)px$/i
    );

    if (!match) {
        return null;
    }

    const px = Number(match[1]);

    if (px <= 4) return "rounded";
    if (px <= 8) return "rounded-lg";
    if (px <= 12) return "rounded-xl";
    if (px <= 16) return "rounded-2xl";
    if (px <= 24) return "rounded-3xl";

    return "rounded-full";
}