import DocsPage from "../components/docs/DocsPage";
import { flexbox } from "../data/examples/flexbox";

export default function Flexbox() {
    return (
        <DocsPage
            title={flexbox.title}
            description={flexbox.description}
            examples={flexbox.examples}
        />
    );
}