import { components } from "../../data/components/components";

type Props = {
    value: string;
    onChange(value: string): void;
};

export default function ComponentSelector({
    value,
    onChange,
}: Props) {
    return (
        <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="mb-6 text-xl font-bold">
                Components
            </h2>

            <div className="space-y-3">
                {components.map((component) => (
                    <button
                        key={component.id}
                        onClick={() =>
                            onChange(component.id)
                        }
                        className={`block w-full rounded-xl border p-3 text-left transition ${
                            value === component.id
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-border hover:bg-surface"
                        }`}
                    >
                        {component.name}
                    </button>
                ))}
            </div>
        </div>
    );
}