import { useState } from "react";
import Layout from "../components/layout/Layout";
import ComponentSelector from "../components/builder/ComponentSelector";
import ButtonBuilder from "../components/builder/ButtonBuilder";
import CardBuilder from "../components/builder/CardBuilder";

export default function Builder() {
    const [component, setComponent] =
        useState("button");

    return (
        <Layout>
            <section className="mx-auto max-w-7xl">
                <h1 className="mb-10 text-5xl font-black">
                    Component Builder
                </h1>

                <div className="grid gap-8 lg:grid-cols-4">
                    <ComponentSelector
                        value={component}
                        onChange={setComponent}
                    />

                    <div className="lg:col-span-3">
                        {component === "button" && (
                            <ButtonBuilder />
                        )}
                        {component === "card" && <CardBuilder />}

                        {component === "badge" && (
                            <div className="rounded-2xl border border-border p-10">
                                Badge Builder Coming Soon
                            </div>
                        )}

                        {component === "alert" && (
                            <div className="rounded-2xl border border-border p-10">
                                Alert Builder Coming Soon
                            </div>
                        )}

                        {component === "input" && (
                            <div className="rounded-2xl border border-border p-10">
                                Input Builder Coming Soon
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}