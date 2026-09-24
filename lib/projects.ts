import type { CaseStudyData } from "../components/case-study/types";
import agentOnboarding from "../content/projects/agent-onboarding";
import aiPoweredNotetaker from "../content/projects/ai-powered-notetaker";
import biotechLabDigitization from "../content/projects/biotech-lab-digitization";
import fintechPlatform from "../content/projects/fintech-platform";
import agileLeadershipInHomeInterior from "../content/projects/agile-leadership-in-home-interior";

export type ProjectGroup = "professional" | "personal";

export type ProjectSummary = {
  slug: string;
  group: ProjectGroup;
  homeTitle: string;
  homeMeta: string;
  homeDescription: string;
  homeBadges: string[];
  metaTitle: string;
  metaDescription: string;
  linkLabel: string;
};

const caseStudies: Record<string, CaseStudyData> = {
  "agent-onboarding": agentOnboarding,
  "ai-powered-notetaker": aiPoweredNotetaker,
  "biotech-lab-digitization": biotechLabDigitization,
  "fintech-platform": fintechPlatform,
  "agile-leadership-in-home-interior": agileLeadershipInHomeInterior,
};

export const projects: ProjectSummary[] = [
  {
    slug: "agent-onboarding",
    group: "professional",
    homeTitle: "Third-Party Agent Onboarding Platform",
    homeMeta: "Financial services · Backend platform",
    homeDescription:
      "A digital onboarding experience that helps a financial services provider bring new third-party agents into its network with greater speed, visibility, and consistency.",
    homeBadges: [".NET", "REST APIs", "SQL Server"],
    metaTitle: "Third-Party Agent Onboarding Platform",
    metaDescription: "A digital onboarding product for third-party agents.",
    linkLabel: "View project",
  },
  {
    slug: "ai-powered-notetaker",
    group: "professional",
    homeTitle: "AI-Powered Note-Taker",
    homeMeta: "AI · Productivity tool",
    homeDescription: "A smart note-taking application that uses AI to summarize and organize your notes.",
    homeBadges: [".NET 8", "EF Core", "REST APIs"],
    metaTitle: "AI Meeting Notetaker & Talent Performance Platform",
    metaDescription: "A pilot collaboration platform for meeting intelligence and talent workflows.",
    linkLabel: "View project",
  },
  {
    slug: "biotech-lab-digitization",
    group: "professional",
    homeTitle: "Biotech Lab Digitization",
    homeMeta: "Biotechnology · Workflow modernization",
    homeDescription:
      "A workflow modernization initiative that digitized manual experiment recording, reduced operational friction, and made lab data easier to validate and reuse across research teams.",
    homeBadges: ["ASP.NET Core", "REST APIs", "SQL Server"],
    metaTitle: "Industrial Biotech Laboratory Digitization",
    metaDescription: "A development-stage laboratory workflow digitizing experiment recording.",
    linkLabel: "View project",
  },
  {
    slug: "fintech-platform",
    group: "professional",
    homeTitle: "Fintech Lending & Invoice Financing Platform",
    homeMeta: "FinTech · Lending workflows",
    homeDescription: "A platform that provides seamless lending and invoice financing solutions for businesses.",
    homeBadges: ["C#", ".NET", "MySQL"],
    metaTitle: "Digital Lending & Invoice Financing Platform",
    metaDescription: "A production financial-services platform supporting loan and invoice-financing workflows.",
    linkLabel: "View project",
  },
  {
    slug: "agile-leadership-in-home-interior",
    group: "personal",
    homeTitle: "Agile Leadership in a Home Interior Project",
    homeMeta: "Independent case study · Delivery leadership",
    homeDescription:
      "A case study on coordinating independent contractors through prioritization, sequencing, stakeholder alignment, and continuous feedback.",
    homeBadges: [],
    metaTitle: "Agile Leadership in a Home Interior Project",
    metaDescription: "Applying agile leadership principles to a multi-contractor home interior project.",
    linkLabel: "Read case study",
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export function getProjectSummary(slug: string): ProjectSummary {
  const summary = projects.find((project) => project.slug === slug);
  if (!summary) throw new Error(`Unknown project slug: ${slug}`);
  return summary;
}

export function getCaseStudy(slug: string): CaseStudyData {
  const data = caseStudies[slug];
  if (!data) throw new Error(`No case study content for slug: ${slug}`);
  return data;
}
