import CopyButton from "../ui/CopyButton";
import type { ResponsiveBreakpoint } from "../../data/responsive/breakpoints";

type BreakpointPreviewProps = { breakpoint: ResponsiveBreakpoint };

export default function BreakpointPreview({ breakpoint }: BreakpointPreviewProps) {
    return (
        <section className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Current breakpoint</p>
                    <h2 className="mt-2 text-3xl font-black text-foreground">{breakpoint.device} · {breakpoint.label}</h2>
                </div>
                <span className="rounded-full border border-border bg-background px-4 py-2 font-mono text-sm text-muted">{breakpoint.viewport}px</span>
            </div>
            <p className="mt-4 max-w-3xl text-muted">{breakpoint.guidance}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <CodeDetail title="CSS media query" code={breakpoint.mediaQuery} />
                <CodeDetail title="Tailwind prefix" code={breakpoint.prefix} />
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-background p-4">
                <p className="mb-3 text-sm font-semibold text-muted">Viewport preview</p>
                <div className="mx-auto overflow-hidden rounded-lg border border-blue-500/40 bg-zinc-950 transition-all duration-300" style={{ width: `${breakpoint.viewport}px`, maxWidth: "100%" }}>
                    <div className="p-5 text-center text-sm text-zinc-300">{breakpoint.device} viewport · {breakpoint.viewport}px</div>
                </div>
            </div>
        </section>
    );
}

function CodeDetail({ title, code }: { title: string; code: string }) {
    return <div className="rounded-xl border border-border bg-background p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-foreground">{title}</h3><CopyButton text={code} /></div><code className="mt-4 block overflow-auto rounded-lg bg-surface p-3 text-sm text-blue-400">{code}</code></div>;
}
