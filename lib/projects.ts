import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export const projectSlugs = ["ai-powered-notetaker", "agent-onboarding", "biotech-lab-digitization", "fintech-platform"];

type ProjectFrontMatter = {
  title: string;
  category: string;
  description: string;
};

export async function getProject(slug: string) {
  const source = fs.readFileSync(path.join(process.cwd(), "content", "projects", `${slug}.mdx`), "utf8");
  const { content, data } = matter(source);
  const metadata = data as ProjectFrontMatter;
  const compiled = await compileMDX<ProjectFrontMatter>({ source: content, options: { parseFrontmatter: true } });
  return { ...metadata, content: compiled.content };
}
