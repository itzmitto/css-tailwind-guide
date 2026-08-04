import CopyButton from "../ui/CopyButton";
import type { Challenge } from "../../data/challenges";

type ChallengeResultProps = { challenge: Challenge; status: "idle" | "incorrect" | "solved" | "revealed" };

export default function ChallengeResult({ challenge, status }: ChallengeResultProps) {
    if (status === "idle") return null;
    if (status === "incorrect") return <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4"><h3 className="font-semibold text-red-400">Not quite yet</h3><p className="mt-2 text-sm text-muted">Review the goal and try a different combination of utilities.</p></div>;

    const solved = status === "solved";
    return <section className={`mt-6 rounded-xl border p-5 ${solved ? "border-green-500/40 bg-green-500/10" : "border-amber-500/40 bg-amber-500/10"}`}><h3 className={`text-xl font-bold ${solved ? "text-green-400" : "text-amber-400"}`}>{solved ? "Challenge complete" : "Solution revealed"}</h3><p className="mt-3 text-muted">{challenge.explanation}</p><div className="mt-5 grid gap-4 lg:grid-cols-2"><CodeBlock title="Tailwind solution" code={challenge.solution} /><CodeBlock title="CSS equivalent" code={challenge.cssEquivalent} /></div></section>;
}

function CodeBlock({ title, code }: { title: string; code: string }) { return <div className="rounded-xl border border-border bg-background p-4"><div className="flex items-center justify-between gap-3"><h4 className="font-semibold text-foreground">{title}</h4><CopyButton text={code} /></div><pre className="mt-4 overflow-auto rounded-lg bg-surface p-3 text-sm text-foreground"><code>{code}</code></pre></div>; }
