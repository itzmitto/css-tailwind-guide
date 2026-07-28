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
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-zinc-700"
        >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}