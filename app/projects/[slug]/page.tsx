import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyShell } from "../../../components/CaseStudyShell";
import { CaseStudyHero } from "../../../components/case-study/CaseStudyHero";
import { CaseStudySections } from "../../../components/case-study/CaseStudySections";
import { getCaseStudy, getProjectSummary, projectSlugs } from "../../../lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) return {};
  const summary = getProjectSummary(slug);
  return { title: `${summary.metaTitle} | Tanmay Kulkarni`, description: summary.metaDescription };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) notFound();
  const { hero, sections } = getCaseStudy(slug);
  return (
    <>
      <CaseStudyShell>
        <CaseStudyHero {...hero} />
        <main>
          <CaseStudySections sections={sections} />
        </main>
        <div className="container text-center py-4">
          <Link className="btn btn-brand" href="/#projects">← Back to projects</Link>
        </div>
      </CaseStudyShell>
    </>
  );
}
