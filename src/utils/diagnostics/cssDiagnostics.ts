export type CssDiagnostic = {
    line: string;
    message: string;
};

const knownRules: Record<string, string[]> = {
    display: [
        "block",
        "inline",
        "inline-block",
        "flex",
        "inline-flex",
        "grid",
        "none",
    ],

    "justify-content": [
        "start",
        "end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ],

    "align-items": [
        "start",
        "end",
        "center",
        "stretch",
    ],
};

export function getDiagnostics(
    lines: string[]
): CssDiagnostic[] {
    const diagnostics: CssDiagnostic[] = [];

    for (const line of lines) {
        const parts = line.split(":");

        if (parts.length !== 2) {
            continue;
        }

        const property = parts[0].trim();
        const value = parts[1].trim();

        const validValues = knownRules[property];

        if (!validValues) {
            continue;
        }

        if (!validValues.includes(value)) {
            diagnostics.push({
                line,
                message: `Unknown value "${value}"`,
            });
        }
    }

    return diagnostics;
}