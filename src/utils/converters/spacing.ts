const spacingScale: Record<number, string> = {
    0: "0",
    2: "0.5",
    4: "1",
    6: "1.5",
    8: "2",
    10: "2.5",
    12: "3",
    14: "3.5",
    16: "4",
    20: "5",
    24: "6",
    28: "7",
    32: "8",
    36: "9",
    40: "10",
    48: "12",
    56: "14",
    64: "16",
    80: "20",
    96: "24",
};

function nearestSpacing(px: number) {
    const values = Object.keys(spacingScale).map(Number);

    return values.reduce((previous, current) =>
        Math.abs(current - px) < Math.abs(previous - px)
            ? current
            : previous
    );
}

export function convertSpacing(line: string): string | null {
    const match = line.match(
        /^(margin|padding):\s*([0-9]+)px$/i
    );

    if (!match) {
        return null;
    }

    const property = match[1].toLowerCase();
    const px = Number(match[2]);

    const nearest = nearestSpacing(px);

    const prefix =
        property === "margin"
            ? "m"
            : "p";

    return `${prefix}-${spacingScale[nearest]}`;
}