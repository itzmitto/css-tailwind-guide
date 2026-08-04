import CopyButton from "../ui/CopyButton";
import { getIconSnippet } from "../../data/icons/catalog";
import type { IconDefinition } from "../../data/icons/catalog";

type IconCardProps = {
    icon: IconDefinition;
};

export default function IconCard({ icon }: IconCardProps) {
    const Icon = icon.icon;

    return (
        <article className="group rounded-2xl border border-border bg-background p-5 transition hover:border-primary hover:bg-surface">
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-blue-400">
                    <Icon size={24} aria-hidden="true" />
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                    {icon.category}
                </span>
            </div>

            <h2 className="mt-5 font-mono text-sm font-semibold text-foreground">
                {icon.name}
            </h2>

            <div className="mt-4">
                <CopyButton text={getIconSnippet(icon.name)} />
            </div>
        </article>
    );
}
