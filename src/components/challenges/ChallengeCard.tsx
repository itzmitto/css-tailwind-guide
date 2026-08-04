import { useState } from "react";
import CopyButton from "../ui/CopyButton";
import type { Challenge } from "../../data/challenges";
import { validateChallenge } from "../../utils/challenges/validateChallenge";
import ChallengeEditor from "./ChallengeEditor";
import ChallengeResult from "./ChallengeResult";

type ChallengeCardProps = { challenge: Challenge; completed: boolean; onComplete(id: string): void };

export default function ChallengeCard({ challenge, completed, onComplete }: ChallengeCardProps) {
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState<"idle" | "incorrect" | "solved" | "revealed">(completed ? "solved" : "idle");
    const [showHint, setShowHint] = useState(false);

    function submit() { const correct = validateChallenge(answer, [challenge.solution, ...(challenge.acceptedSolutions ?? [])]); setStatus(correct ? "solved" : "incorrect"); if (correct) onComplete(challenge.id); }
    function reset() { setAnswer(""); setStatus(completed ? "solved" : "idle"); setShowHint(false); }

    return <article className="rounded-2xl border border-border bg-surface p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">{challenge.difficulty}</span><h2 className="mt-4 text-2xl font-bold text-foreground">{challenge.title}</h2></div>{completed && <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">Completed +1 XP</span>}</div><p className="mt-4 text-muted">{challenge.goal}</p><div className="mt-6 rounded-xl border border-border bg-background p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-semibold text-foreground">CSS requirement</h3><CopyButton text={challenge.cssRequirement} /></div><pre className="mt-4 overflow-auto rounded-lg bg-surface p-3 text-sm text-foreground"><code>{challenge.cssRequirement}</code></pre></div><div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={() => setShowHint((value) => !value)} className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background">{showHint ? "Hide hint" : "Show hint"}</button><button type="button" onClick={() => { setAnswer(challenge.solution); setStatus("revealed"); }} className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background">Reveal answer</button></div>{showHint && <p className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-300">Hint: {challenge.hint}</p>}<ChallengeEditor value={answer} onChange={setAnswer} onSubmit={submit} onReset={reset} /><LivePreview challenge={challenge} /><ChallengeResult challenge={challenge} status={status} /></article>;
}

function LivePreview({ challenge }: { challenge: Challenge }) { return <div className="mt-6"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Live preview</h3><div className={`rounded-xl border border-border bg-background p-5 ${challenge.preview.containerClasses}`}>{challenge.preview.items.map((item) => <div key={item} className="rounded-lg bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600">{item}</div>)}</div></div>; }
