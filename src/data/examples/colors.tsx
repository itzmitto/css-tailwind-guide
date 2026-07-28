export const colorExamples = [
    {
        title: "Background Color",
        css: "background-color: #3b82f6;",
        tailwind: "bg-blue-500",
        preview: (
            <div className="h-24 w-24 rounded-xl bg-blue-500"></div>
        ),
    },
    {
        title: "Text Color",
        css: "color: white;",
        tailwind: "text-white",
        preview: (
            <p className="text-3xl font-bold text-white">
                Hello Tailwind
            </p>
        ),
    },
    {
        title: "Border Color",
        css: "border: 4px solid #27272a;",
        tailwind: "border-4 border-zinc-800",
        preview: (
            <div className="rounded-xl border-4 border-zinc-800 p-8">
                Border Example
            </div>
        ),
    },
];