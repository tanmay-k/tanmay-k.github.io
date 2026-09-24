import type { MDXComponents } from "mdx/types";
import { ContentSection } from "./components/ContentSection";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    section: ContentSection,
    ...components,
  };
}
