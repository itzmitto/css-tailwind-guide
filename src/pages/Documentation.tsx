import { Navigate, useParams } from "react-router-dom";
import DocsPage from "../components/docs/DocsPage";
import { getDocumentationPage } from "../data/docs/registry";

export default function Documentation() {
    const { slug } = useParams();
    const page = slug ? getDocumentationPage(slug) : undefined;

    if (!page) {
        return <Navigate to="/" replace />;
    }

    return <DocsPage page={page} />;
}
