import type { ResponsiveBreakpoint } from "../../data/responsive/breakpoints";

type BreakpointSelectorProps = {
    breakpoints: ResponsiveBreakpoint[];
    value: string;
    onChange(value: string): void;
};

export default function BreakpointSelector({ breakpoints, value, onChange }: BreakpointSelectorProps) {
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {breakpoints.map((breakpoint) => (
                <button key={breakpoint.id} type="button" onClick={() => onChange(breakpoint.id)} aria-pressed={value === breakpoint.id} className={`rounded-2xl border p-4 text-left transition ${value === breakpoint.id ? "border-blue-500 bg-blue-500 text-white" : "border-border bg-background hover:bg-surface"}`}>
                    <span className="block text-sm opacity-80">{breakpoint.device}</span>
                    <span className="mt-1 block text-xl font-bold">{breakpoint.label}</span>
                    <span className="mt-1 block text-sm opacity-80">{breakpoint.viewport}px</span>
                </button>
            ))}
        </div>
    );
}
