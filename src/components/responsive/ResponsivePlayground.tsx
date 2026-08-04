import { useMemo, useState } from "react";
import { breakpoints } from "../../data/responsive/breakpoints";
import { responsiveExamples } from "../../data/responsive/examples";
import BreakpointPreview from "./BreakpointPreview";
import BreakpointSelector from "./BreakpointSelector";
import BreakpointVisualizer from "./BreakpointVisualizer";
import ResponsiveExample from "./ResponsiveExample";

export default function ResponsivePlayground() {
    const [selectedId, setSelectedId] = useState("default");
    const currentBreakpoint = useMemo(() => breakpoints.find((item) => item.id === selectedId) ?? breakpoints[0], [selectedId]);

    return <section className="mx-auto max-w-7xl"><header className="max-w-3xl"><span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">Responsive design</span><h1 className="mt-8 text-5xl font-black text-foreground sm:text-6xl">Responsive Playground</h1><p className="mt-5 text-lg leading-8 text-muted">Explore Tailwind’s mobile-first breakpoints, compare them to CSS media queries, and see responsive patterns in action.</p></header><div className="mt-10"><BreakpointSelector breakpoints={breakpoints} value={selectedId} onChange={setSelectedId} /></div><div className="mt-8"><BreakpointPreview breakpoint={currentBreakpoint} /></div><div className="mt-8"><BreakpointVisualizer breakpoints={breakpoints} activeId={selectedId} onSelect={setSelectedId} /></div><section className="mt-12"><div><h2 className="text-3xl font-black text-foreground">Common responsive patterns</h2><p className="mt-3 text-muted">Each example updates its CSS, Tailwind utility, and live preview for the active breakpoint.</p></div><div className="mt-8 grid gap-6 lg:grid-cols-2">{responsiveExamples.map((example) => <ResponsiveExample key={example.id} example={example} breakpoint={currentBreakpoint.id} />)}</div></section></section>;
}
