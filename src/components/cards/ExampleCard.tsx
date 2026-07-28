type ExampleCardProps = {
    title: string;
    css: string;
    tailwind: string;
};

export default function ExampleCard({
    title,
    css,
    tailwind,
}: ExampleCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
            <h2 className="text-2xl font-bold text-white">
                {title}
            </h2>

            <div className="mt-6">
                <p className="mb-2 text-sm uppercase tracking-wider text-zinc-500">
                    CSS
                </p>

                <pre className="rounded-lg bg-zinc-950 p-4 text-blue-400 overflow-x-auto">
                    <code>{css}</code>
                </pre>
            </div>

            <div className="mt-6">
                <p className="mb-2 text-sm uppercase tracking-wider text-zinc-500">
                    Tailwind
                </p>

                <pre className="rounded-lg bg-zinc-950 p-4 text-green-400 overflow-x-auto">
                    <code>{tailwind}</code>
                </pre>
            </div>

            <div className="mt-6">
                <p className="mb-2 text-sm uppercase tracking-wider text-zinc-500">
                    Preview
                </p>

                <div className="rounded-lg border border-zinc-700 bg-zinc-950 p-6">
                    <div className="flex justify-center rounded bg-blue-500 p-4 text-white">
                        Example
                    </div>
                </div>
            </div>
        </div>
    );
}