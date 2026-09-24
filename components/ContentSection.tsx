import type { HTMLAttributes, ReactNode } from "react";

type ContentSectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function ContentSection({ children, className = "", ...props }: ContentSectionProps) {
  return (
    <section className={`content-section ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
