import { convertSpacing } from "./converters/spacing";
import { convertBorderRadius } from "./converters/borderRadius";
import { convertSize } from "./converters/size";

export function convertCss(line: string): string | null {
    return (
        convertSpacing(line) ??
        convertBorderRadius(line) ??
        convertSize(line)
    );
}