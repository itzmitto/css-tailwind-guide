export type BreakpointId = "default" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveBreakpoint = {
    id: BreakpointId;
    device: string;
    viewport: number;
    label: string;
    mediaQuery: string;
    prefix: string;
    guidance: string;
};

export const breakpoints: ResponsiveBreakpoint[] = [
    {
        id: "default",
        device: "Mobile",
        viewport: 375,
        label: "default",
        mediaQuery: "No media query (mobile-first base styles)",
        prefix: "No prefix",
        guidance: "Start with the smallest layout, then enhance it as more space becomes available.",
    },
    {
        id: "sm",
        device: "Tablet",
        viewport: 640,
        label: "sm",
        mediaQuery: "@media (min-width: 640px)",
        prefix: "sm:",
        guidance: "Use for compact tablets and wider mobile layouts that need a little more breathing room.",
    },
    {
        id: "md",
        device: "Laptop",
        viewport: 768,
        label: "md",
        mediaQuery: "@media (min-width: 768px)",
        prefix: "md:",
        guidance: "Use for tablet landscape and compact laptop layouts such as multi-column content.",
    },
    {
        id: "lg",
        device: "Desktop",
        viewport: 1024,
        label: "lg",
        mediaQuery: "@media (min-width: 1024px)",
        prefix: "lg:",
        guidance: "Use for desktop navigation, sidebars, and denser workspace layouts.",
    },
    {
        id: "xl",
        device: "Wide Screen",
        viewport: 1280,
        label: "xl",
        mediaQuery: "@media (min-width: 1280px)",
        prefix: "xl:",
        guidance: "Use for wider desktop canvases where content can gain more columns or larger spacing.",
    },
    {
        id: "2xl",
        device: "Wide Screen",
        viewport: 1536,
        label: "2xl",
        mediaQuery: "@media (min-width: 1536px)",
        prefix: "2xl:",
        guidance: "Reserve for very large displays and avoid relying on it for essential content.",
    },
];
