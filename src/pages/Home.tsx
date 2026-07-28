import Layout from "../components/layout/Layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-5xl font-black">
                CSS → Tailwind Guide
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
                Learn CSS and Tailwind CSS side by side with examples, previews and copyable code snippets.
            </p>
        </Layout>
    );
}