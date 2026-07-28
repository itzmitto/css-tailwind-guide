import Layout from "../components/layout/Layout";
import ExampleCard from "../components/cards/ExampleCard";

export default function Colors() {
    return (
        <Layout>
            <h1 className="mb-10 text-5xl font-black">
                Colors
            </h1>

            <div className="grid gap-8">
                <ExampleCard
                    title="Background Color"
                    css="background-color: #3b82f6;"
                    tailwind="bg-blue-500"
                />

                <ExampleCard
                    title="Text Color"
                    css="color: #ffffff;"
                    tailwind="text-white"
                />

                <ExampleCard
                    title="Border Color"
                    css="border-color: #27272a;"
                    tailwind="border-zinc-800"
                />
            </div>
        </Layout>
    );
}