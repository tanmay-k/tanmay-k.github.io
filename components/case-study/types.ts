export type MetaItem = { label: string; value: string };

export type HeroData = {
  eyebrow: string;
  title: string;
  summary: string;
  meta: MetaItem[];
  metaColClass?: string;
};

export type Paragraph = { text: string; mb0?: boolean };
export type CardItem = { title: string; body: string };
export type RoleBullet = string | { bold: string; text: string };
export type StatItem = { value: string; label: string };

export type IntroSectionData = {
  kind: "intro";
  soft?: boolean;
  index: string;
  eyebrow: string;
  heading: string;
  lead: string;
  paragraphs: Paragraph[];
  sidebarTitle: string;
  sidebarItems: string[];
};

export type CardGridSectionData = {
  kind: "cardGrid";
  soft?: boolean;
  index: string;
  eyebrow: string;
  heading: string;
  colClass?: string;
  cards: CardItem[];
};

export type WorkflowSectionData = {
  kind: "workflow";
  soft?: boolean;
  index: string;
  eyebrow: string;
  heading: string;
  intro: string;
  steps: CardItem[];
};

export type TechSectionData = {
  kind: "tech";
  soft?: boolean;
  index: string;
  eyebrow: string;
  heading: string;
  cards: CardItem[];
  tags?: string[];
};

export type RoleOutcomesSectionData = {
  kind: "roleOutcomes";
  soft?: boolean;
  roleIndex: string;
  roleHeading: string;
  roleIntro: string;
  roleBullets: RoleBullet[];
  outcomesIndex: string;
  outcomesHeading: string;
  outcomesIntro: string;
  stats: StatItem[];
};

export type ReflectionSectionData = {
  kind: "reflection";
  soft?: boolean;
  index: string;
  paragraphs: string[];
};

export type OutcomeReflectionSectionData = {
  kind: "outcomeReflection";
  soft?: boolean;
  index: string;
  eyebrow: string;
  heading: string;
  paragraphs: Paragraph[];
  sideTitle: string;
  sideBody: string;
  disclaimer?: string;
};

export type CaseStudySectionData =
  | IntroSectionData
  | CardGridSectionData
  | WorkflowSectionData
  | TechSectionData
  | RoleOutcomesSectionData
  | ReflectionSectionData
  | OutcomeReflectionSectionData;

export type CaseStudyData = {
  hero: HeroData;
  sections: CaseStudySectionData[];
};

export function sectionClass(soft?: boolean) {
  return soft ? "soft-section py-5" : "py-5";
}
