export type Tip = {
    required: string[];
    title: string;
    description: string;
};

export const tips: Tip[] = [
    {
        required: [
            "flex",
            "justify-center",
            "items-center",
        ],
        title: "Perfect Center",
        description:
            "Consider adding min-h-screen to vertically center your layout.",
    },
    {
        required: [
            "grid",
        ],
        title: "Responsive Grid",
        description:
            "Try adding md:grid-cols-2 or lg:grid-cols-3 for responsive layouts.",
    },
    {
        required: [
            "p-4",
            "m-4",
        ],
        title: "Spacing",
        description:
            "For spacing between children consider using gap-* or space-y-* utilities.",
    },
];