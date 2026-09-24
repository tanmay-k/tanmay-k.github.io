import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyShell } from "../../../components/CaseStudyShell";
import { getProject, projectSlugs } from "../../../lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) return {};
  const project = await getProject(slug);
  return { title: `${project.title} | Tanmay Kulkarni`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) notFound();
  const project = await getProject(slug);
  return (
    <>
      <CaseStudyShell>{project.content}</CaseStudyShell>
      <p className="container"><Link href="/#projects">← Back to projects</Link></p>
    </>
  );
}
