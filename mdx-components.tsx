import type { MDXComponents } from "mdx/types";
import { ContentSection } from "./components/ContentSection";
import { ProjectList } from "./components/ProjectList";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    section: ContentSection,
    ProjectList,
    ...components,
  };
}
