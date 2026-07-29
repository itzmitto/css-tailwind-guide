const sizeScale: Record<number, string> = {
    0: "0",
    4: "1",
    8: "2",
    12: "3",
    16: "4",
    20: "5",
    24: "6",
    28: "7",
    32: "8",
    36: "9",
    40: "10",
    44: "11",
    48: "12",
    56: "14",
    64: "16",
    80: "20",
    96: "24",
    112: "28",
    128: "32",
    144: "36",
    160: "40",
    192: "48",
    224: "56",
    256: "64",
    288: "72",
    320: "80",
    384: "96",
};

function nearestSize(px: number) {
    const values = Object.keys(sizeScale).map(Number);

    return values.reduce((previous, current) =>
        Math.abs(current - px) < Math.abs(previous - px)
            ? current
            : previous
    );
}

export function convertSize(line: string): string | null {
    const match = line.match(
        /^(width|height|min-width|max-width|min-height|max-height):\s*([0-9]+)px$/i
    );

    if (!match) {
        return null;
    }

    const property = match[1].toLowerCase();
    const px = Number(match[2]);

    const nearest = nearestSize(px);

    const prefixes: Record<string, string> = {
        width: "w",
        height: "h",
        "min-width": "min-w",
        "max-width": "max-w",
        "min-height": "min-h",
        "max-height": "max-h",
    };

    return `${prefixes[property]}-${sizeScale[nearest]}`;
}