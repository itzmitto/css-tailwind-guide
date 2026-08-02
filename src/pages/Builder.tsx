import Layout from "../components/layout/Layout";
import ButtonBuilder from "../components/builder/ButtonBuilder";

export default function Builder() {
    return (
        <Layout>
            <section className="mx-auto max-w-7xl">
                <ButtonBuilder />
            </section>
        </Layout>
    );
}