import { useState } from "react";
import { layoutSections } from "../../data/layouts/layoutSections";
import NavbarTemplate from "../templates/NavbarTemplate";
import HeroTemplate from "../templates/HeroTemplate";
import FooterTemplate from "../templates/FooterTemplate";

export default function LayoutBuilder() {
    const [selected, setSelected] = useState<string[]>([
        "navbar",
        "hero",
        "footer",
    ]);

    function toggle(id: string) {
        setSelected((previous) =>
            previous.includes(id)
                ? previous.filter((item) => item !== id)
                : [...previous, id]
        );
    }

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold">
                    Layout Builder
                </h2>

                <div className="mt-8 space-y-3">
                    {layoutSections.map((section) => (
                        <label
                            key={section.id}
                            className="flex items-center gap-3 rounded-xl border border-border p-4"
                        >
                            <input
                                type="checkbox"
                                checked={selected.includes(section.id)}
                                onChange={() => toggle(section.id)}
                            />

                            {section.name}
                        </label>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold">
                    Preview
                </h2>

                <div className="mt-8 space-y-4">
                    {selected.map((section) => {
                        switch (section) {
                            case "navbar":
                                return <NavbarTemplate key={section} />;

                            case "hero":
                                return <HeroTemplate key={section} />;

                            case "footer":
                                return <FooterTemplate key={section} />;

                            default:
                                return (
                                    <div
                                        key={section}
                                        className="rounded-xl border border-dashed border-border p-8 text-center"
                                    >
                                        {section}
                                    </div>
                                );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}