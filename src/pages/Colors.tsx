import DocsPage from "../components/docs/DocsPage";
import { colors } from "../data/examples/colors";

export default function Colors() {
  return (
    <DocsPage
      title={colors.title}
      description={colors.description}
      examples={colors.examples}
    />
  );
}