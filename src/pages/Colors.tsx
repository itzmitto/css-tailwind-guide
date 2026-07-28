import Layout from "../components/layout/Layout";
import ExampleCard from "../components/cards/ExampleCard";

export default function Colors() {
    return (
        <Layout>
            <h1 className="mb-12 text-5xl font-black">
                Colors
            </h1>

            <div className="space-y-10">
                <ExampleCard
                    title="Background Color"
                    css={`background-color: #3b82f6;`}
                    tailwind={`bg-blue-500`}
                >
                    <div className="h-24 w-24 rounded-xl bg-blue-500"></div>
                </ExampleCard>

                <ExampleCard
                    title="Text Color"
                    css={`color: white;`}
                    tailwind={`text-white`}
                >
                    <p className="text-3xl font-bold text-white">
                        Hello Tailwind
                    </p>
                </ExampleCard>

                <ExampleCard
                    title="Border Color"
                    css={`border: 4px solid #27272a;`}
                    tailwind={`border-4 border-zinc-800`}
                >
                    <div className="rounded-xl border-4 border-zinc-800 p-8">
                        Border Example
                    </div>
                </ExampleCard>
            </div>
        </Layout>
    );
}