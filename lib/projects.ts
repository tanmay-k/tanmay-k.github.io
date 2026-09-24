import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";

export const projectSlugs = [
  "ai-powered-notetaker",
  "agent-onboarding",
  "biotech-lab-digitization",
  "fintech-platform",
  "agile-leadership-in-home-interior",
];

type ProjectFrontMatter = {
  title: string;
  category: string;
  description: string;
};

export async function getProject(slug: string) {
  const source = fs.readFileSync(path.join(process.cwd(), "content", "projects", `${slug}.mdx`), "utf8");
  const compiled = await compileMDX<ProjectFrontMatter>({ source, options: { parseFrontmatter: true } });
  return { ...(compiled.frontmatter as ProjectFrontMatter), content: compiled.content };
}
