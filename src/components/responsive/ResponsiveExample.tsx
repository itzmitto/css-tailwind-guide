import CodeTabs from "../ui/CodeTabs";
import type { BreakpointId } from "../../data/responsive/breakpoints";
import type { responsiveExamples } from "../../data/responsive/examples";

type ResponsiveExampleProps = { example: (typeof responsiveExamples)[number]; breakpoint: BreakpointId };

export default function ResponsiveExample({ example, breakpoint }: ResponsiveExampleProps) {
    return <article className="rounded-2xl border border-border bg-surface p-6"><h2 className="text-2xl font-bold text-foreground">{example.title}</h2><p className="mt-3 text-muted">{example.description}</p><div className="mt-6"><CodeTabs css={example.css[breakpoint]} tailwind={example.tailwind[breakpoint]} /></div><div className="mt-6"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Live preview</h3>{example.preview(breakpoint)}</div></article>;
}
