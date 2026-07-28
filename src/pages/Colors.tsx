import DocsPage from "../components/docs/DocsPage";
import { colorExamples } from "../data/examples/colors";

export default function Colors() {
  return (
    <DocsPage
      title="Colors"
      description="Learn how CSS colors translate into Tailwind CSS utility classes."
      examples={colorExamples}
    />
  );
}