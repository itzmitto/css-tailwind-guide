import type { ResponsiveBreakpoint } from "../../data/responsive/breakpoints";

type BreakpointVisualizerProps = { breakpoints: ResponsiveBreakpoint[]; activeId: string; onSelect(id: string): void };

export default function BreakpointVisualizer({ breakpoints, activeId, onSelect }: BreakpointVisualizerProps) {
    return <section className="rounded-2xl border border-border bg-background p-6"><h2 className="text-2xl font-bold text-foreground">Breakpoint timeline</h2><p className="mt-2 text-muted">Select a range to update the playground viewport.</p><div className="mt-8 flex overflow-x-auto pb-2">{breakpoints.map((breakpoint) => <button key={breakpoint.id} type="button" onClick={() => onSelect(breakpoint.id)} aria-pressed={activeId === breakpoint.id} className={`min-w-32 flex-1 border-b-4 px-4 py-4 text-left transition ${activeId === breakpoint.id ? "border-blue-500 bg-blue-500/10 text-foreground" : "border-border text-muted hover:bg-surface"}`}><span className="block font-bold">{breakpoint.label}</span><span className="mt-1 block text-sm">{breakpoint.viewport}px</span></button>)}</div></section>;
}
