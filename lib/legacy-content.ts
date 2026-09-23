import fs from "node:fs";
import path from "node:path";

const legacyDirectory = path.join(process.cwd(), "content", "legacy");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const routeRewrites: Array<[RegExp, string]> = [
  [/projects\/agent-onboarding\.html/g, `${basePath}/projects/agent-onboarding/`],
  [/projects\/ai-powered-notetaker\.html/g, `${basePath}/projects/ai-powered-notetaker/`],
  [/projects\/biotech-lab-digitization\.html/g, `${basePath}/projects/biotech-lab-digitization/`],
  [/projects\/fintech-platform\.html/g, `${basePath}/projects/fintech-platform/`],
  [/personal-projects\/agile-leadership-in-home-interior\.html/g, `${basePath}/projects/agile-leadership-in-home-interior/`],
  [/\.\.\/index\.html/g, `${basePath}/`],
  [/index\.html/g, `${basePath}/`],
  [/assets\/tanmay-kulkarni-resume\.pdf/g, `${basePath}/assets/tanmay-kulkarni-resume.docx`],
  [/certificates\/GooglePMCertificate_TanmayKulkarni\.pdf/g, `${basePath}/assets/GooglePMCertificate_TanmayKulkarni.pdf`],
];

export function getLegacyContent(fileName: string) {
  const source = fs.readFileSync(path.join(legacyDirectory, fileName), "utf8");
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const styles = source.match(/<style[^>]*>([\s\S]*?)<\/style>/gi)?.join("") ?? "";
  const content = body
    .replace(/<nav[\s\S]*?<\/nav>/i, "")
    .replace(/<footer[\s\S]*?<\/footer>/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  return routeRewrites.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    `${styles}${content}`,
  );
}
