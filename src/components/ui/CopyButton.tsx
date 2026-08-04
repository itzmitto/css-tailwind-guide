import { useState } from "react";
import { Copy, Check } from "lucide-react";

type CopyButtonProps = {
    text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(text);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <button
            onClick={handleCopy}
            aria-label={copied ? "Code copied" : "Copy code"}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-blue-500 hover:bg-card"
        >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span aria-live="polite">
                {copied ? "Copied!" : "Copy"}
            </span>
        </button>
    );
}
