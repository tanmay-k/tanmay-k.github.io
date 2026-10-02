import type { CaseStudySectionData } from "./types";
import { IntroSection } from "./IntroSection";
import { CardGridSection } from "./CardGridSection";
import { WorkflowSection } from "./WorkflowSection";
import { TechSection } from "./TechSection";
import { RoleOutcomesSection } from "./RoleOutcomesSection";
import { ReflectionSection } from "./ReflectionSection";
import { OutcomeReflectionSection } from "./OutcomeReflectionSection";
import { SummarySection } from "./SummarySection";
import { SequenceSection } from "./SequenceSection";
import { RetrospectiveSection } from "./RetrospectiveSection";

export function CaseStudySections({ sections }: { sections: CaseStudySectionData[] }) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.kind) {
          case "intro":
            return <IntroSection key={i} {...section} />;
          case "cardGrid":
            return <CardGridSection key={i} {...section} />;
          case "workflow":
            return <WorkflowSection key={i} {...section} />;
          case "tech":
            return <TechSection key={i} {...section} />;
          case "roleOutcomes":
            return <RoleOutcomesSection key={i} {...section} />;
          case "reflection":
            return <ReflectionSection key={i} {...section} />;
          case "outcomeReflection":
            return <OutcomeReflectionSection key={i} {...section} />;
          case "summary":
            return <SummarySection key={i} {...section} />;
          case "sequence":
            return <SequenceSection key={i} {...section} />;
          case "retrospective":
            return <RetrospectiveSection key={i} {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
