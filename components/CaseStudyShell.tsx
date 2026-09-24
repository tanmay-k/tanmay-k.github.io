import type { ReactNode } from "react";

type CaseStudyShellProps = {
  children: ReactNode;
};

export function CaseStudyShell({ children }: CaseStudyShellProps) {
  return <article className="case-study">{children}</article>;
}
