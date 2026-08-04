type ChallengeEditorProps = {
    value: string;
    onChange(value: string): void;
    onSubmit(): void;
    onReset(): void;
};

export default function ChallengeEditor({ value, onChange, onSubmit, onReset }: ChallengeEditorProps) {
    return <div className="mt-6"><label className="text-sm font-semibold uppercase tracking-wider text-muted" htmlFor="challenge-answer">Your Tailwind classes</label><textarea id="challenge-answer" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Type Tailwind classes here..." className="mt-3 min-h-28 w-full rounded-xl border border-border bg-background p-4 font-mono text-sm text-foreground outline-none transition focus:border-blue-500" /><div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={onSubmit} className="rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600">Check answer</button><button type="button" onClick={onReset} className="rounded-xl border border-border px-5 py-3 font-semibold text-foreground transition hover:bg-surface">Reset</button></div></div>;
}
