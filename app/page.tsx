import { getLegacyContent } from "../lib/legacy-content";

export default function HomePage() {
  return <main dangerouslySetInnerHTML={{ __html: getLegacyContent("index.html") }} />;
}
