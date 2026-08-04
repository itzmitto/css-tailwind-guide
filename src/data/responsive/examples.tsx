import type { ReactNode } from "react";
import type { BreakpointId } from "./breakpoints";

type ResponsiveExample = {
    id: string;
    title: string;
    description: string;
    css: Record<BreakpointId, string>;
    tailwind: Record<BreakpointId, string>;
    preview: (breakpoint: BreakpointId) => ReactNode;
};

function withPrefix(breakpoint: BreakpointId, utility: string) {
    return breakpoint === "default" ? utility : `${breakpoint}:${utility}`;
}

function mediaCss(breakpoint: BreakpointId, declaration: string) {
    if (breakpoint === "default") {
        return declaration;
    }

    const sizes: Record<Exclude<BreakpointId, "default">, string> = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    };

    return `@media (min-width: ${sizes[breakpoint]}) {\n  ${declaration}\n}`;
}

const allBreakpoints: BreakpointId[] = ["default", "sm", "md", "lg", "xl", "2xl"];

function createCodes(base: string, responsive: string) {
    return Object.fromEntries(
        allBreakpoints.map((breakpoint) => [
            breakpoint,
            breakpoint === "default" ? base : mediaCss(breakpoint, responsive),
        ])
    ) as Record<BreakpointId, string>;
}

function createUtilities(base: string, responsive: string) {
    return Object.fromEntries(
        allBreakpoints.map((breakpoint) => [
            breakpoint,
            breakpoint === "default"
                ? base
                : `${base} ${withPrefix(breakpoint, responsive)}`,
        ])
    ) as Record<BreakpointId, string>;
}

function PreviewFrame({ children }: { children: ReactNode }) {
    return <div className="w-full rounded-xl border border-border bg-surface p-4">{children}</div>;
}

export const responsiveExamples: ResponsiveExample[] = [
    {
        id: "width",
        title: "Responsive Width",
        description: "Keep content full width on mobile, then constrain it as the viewport grows.",
        css: createCodes("width: 100%;", "width: 50%;"),
        tailwind: createUtilities("w-full", "w-1/2"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className={`rounded-lg bg-blue-500 p-3 text-center text-sm font-semibold text-white ${breakpoint === "default" ? "w-full" : "w-1/2"}`}>
                    Content width
                </div>
            </PreviewFrame>
        ),
    },
    {
        id: "display",
        title: "Responsive Display",
        description: "Hide supporting content on small screens and reveal it when room is available.",
        css: createCodes("display: none;", "display: block;"),
        tailwind: createUtilities("hidden", "block"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className="rounded-lg bg-zinc-700 p-3 text-center text-sm text-white">Always visible</div>
                {breakpoint !== "default" && (
                    <div className="mt-3 rounded-lg bg-emerald-500 p-3 text-center text-sm font-semibold text-white">Visible from {breakpoint}</div>
                )}
            </PreviewFrame>
        ),
    },
    {
        id: "grid",
        title: "Responsive Grid",
        description: "Increase columns at wider breakpoints while preserving readable card widths.",
        css: createCodes("grid-template-columns: repeat(1, minmax(0, 1fr));", "grid-template-columns: repeat(3, minmax(0, 1fr));"),
        tailwind: createUtilities("grid grid-cols-1 gap-2", "grid-cols-3"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className={`grid gap-2 ${breakpoint === "default" ? "grid-cols-1" : "grid-cols-3"}`}>
                    {[1, 2, 3].map((item) => <div key={item} className="rounded-lg bg-violet-500 p-3 text-center text-sm font-semibold text-white">{item}</div>)}
                </div>
            </PreviewFrame>
        ),
    },
    {
        id: "flex",
        title: "Responsive Flex Direction",
        description: "Stack controls on mobile and align them horizontally on larger screens.",
        css: createCodes("flex-direction: column;", "flex-direction: row;"),
        tailwind: createUtilities("flex flex-col gap-2", "flex-row"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className={`flex gap-2 ${breakpoint === "default" ? "flex-col" : "flex-row"}`}>
                    <div className="flex-1 rounded-lg bg-cyan-500 p-3 text-center text-sm font-semibold text-white">Primary</div>
                    <div className="flex-1 rounded-lg bg-zinc-700 p-3 text-center text-sm font-semibold text-white">Secondary</div>
                </div>
            </PreviewFrame>
        ),
    },
    {
        id: "spacing",
        title: "Responsive Spacing",
        description: "Increase padding at larger breakpoints without creating separate component variants.",
        css: createCodes("padding: 1rem;", "padding: 2rem;"),
        tailwind: createUtilities("p-4", "p-8"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className={`rounded-lg bg-amber-500 text-center text-sm font-semibold text-white ${breakpoint === "default" ? "p-4" : "p-8"}`}>Adaptive padding</div>
            </PreviewFrame>
        ),
    },
    {
        id: "typography",
        title: "Responsive Typography",
        description: "Scale important headings gradually instead of using one oversized mobile heading.",
        css: createCodes("font-size: 1.5rem;", "font-size: 3rem;"),
        tailwind: createUtilities("text-2xl", "text-5xl"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <p className={`font-black text-foreground ${breakpoint === "default" ? "text-2xl" : "text-5xl"}`}>Build with confidence</p>
            </PreviewFrame>
        ),
    },
    {
        id: "images",
        title: "Responsive Images",
        description: "Use aspect ratios and sizing utilities to keep imagery balanced across screens.",
        css: createCodes("width: 100%; height: 10rem;", "width: 50%; height: 16rem;"),
        tailwind: createUtilities("h-40 w-full", "h-64 w-1/2"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className={`rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 ${breakpoint === "default" ? "h-40 w-full" : "h-64 w-1/2"}`} />
            </PreviewFrame>
        ),
    },
    {
        id: "visibility",
        title: "Responsive Visibility",
        description: "Prioritize essential information at smaller widths and reveal enhancements later.",
        css: createCodes("visibility: visible;", "visibility: hidden;"),
        tailwind: createUtilities("visible", "invisible"),
        preview: (breakpoint) => (
            <PreviewFrame>
                <div className="flex items-center justify-between rounded-lg bg-rose-500 p-3 text-sm font-semibold text-white">
                    <span>Essential content</span>
                    {breakpoint === "default" ? <span>Visible</span> : <span className="opacity-50">Supporting detail hidden</span>}
                </div>
            </PreviewFrame>
        ),
    },
];
