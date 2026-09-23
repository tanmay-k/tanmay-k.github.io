import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegacyContent } from "../../../lib/legacy-content";

export const dynamicParams = false;

const projectFiles = {
  "ai-powered-notetaker": "ai-powered-notetaker.html",
  "agent-onboarding": "agent-onboarding.html",
  "biotech-lab-digitization": "biotech-lab-digitization.html",
  "fintech-platform": "fintech-platform.html",
  "agile-leadership-in-home-interior": "agile-leadership-in-home-interior.html",
} as const;

const projectSlugs = Object.keys(projectFiles);

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) return {};
  return { title: "Tanmay Kulkarni | Project case study" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) notFound();
  const fileName = projectFiles[slug as keyof typeof projectFiles];
  return <main><div dangerouslySetInnerHTML={{ __html: getLegacyContent(fileName) }} /><p className="container"><Link href="/#projects">← Back to projects</Link></p></main>;
}
