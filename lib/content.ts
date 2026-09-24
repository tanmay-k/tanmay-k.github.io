import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getHomeContent() {
  const source = fs.readFileSync(path.join(process.cwd(), "content", "home.mdx"), "utf8");
  const compiled = await compileMDX({ source, options: { parseFrontmatter: true } });
  return compiled.content;
}
