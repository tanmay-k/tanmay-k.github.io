# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm ci          # install (Node 22+ required)
npm run dev     # local dev server
npm run build   # static export -> out/ (also type-checks and generates static params)
npm run lint    # eslint (eslint-config-next)
```

There is no test suite. `npm run build` is the closest thing to a correctness check — it fails
on type errors and on any route incompatible with static export.

## Architecture

This is a personal portfolio site: Next.js App Router, statically exported (`output: "export"`
in [next.config.ts](next.config.ts)) and deployed to GitHub Pages via
[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml), which builds `out/`
and deploys it on pushes to `main` (the workflow also builds, but does not deploy, from
`nextjs-static-migration` while that branch is under review).

**Because this is a static export, GitHub Pages cannot run any Next.js server-side feature.**
Do not add API routes, Server Actions, database access, middleware, or other server-only runtime
behavior — anything added must be resolvable entirely at build time.

### Two page types

- **Home** ([app/page.tsx](app/page.tsx)): renders [content/home.mdx](content/home.mdx) through
  `getHomeContent()` in [lib/content.ts](lib/content.ts), which compiles the MDX at request/build
  time via `next-mdx-remote/rsc`. The only custom MDX component wired in is `ProjectList`
  ([components/ProjectList.tsx](components/ProjectList.tsx)), which reads from
  `lib/projects.ts` to render the project cards.
- **Case studies** ([app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)): statically
  generated per slug (`dynamicParams = false`, `generateStaticParams` from `projectSlugs`). Each
  page renders `hero` + `sections` pulled from `getCaseStudy(slug)`.

### Case study content model

Case studies are **not MDX** — they're structured TypeScript data objects, not prose files. Each
file in `content/projects/*.ts` exports a `CaseStudyData` object (typed in
[components/case-study/types.ts](components/case-study/types.ts)):

```
CaseStudyData = { hero: HeroData, sections: CaseStudySectionData[] }
```

`CaseStudySectionData` is a discriminated union on `kind`: `intro`, `cardGrid`, `workflow`,
`tech`, `roleOutcomes`, `reflection`, `outcomeReflection`. Each variant has a matching renderer
component in `components/case-study/` (e.g. `kind: "tech"` → `TechSection.tsx`), dispatched by
[components/case-study/CaseStudySections.tsx](components/case-study/CaseStudySections.tsx).

**To add a new case study:**
1. Create `content/projects/<slug>.ts` exporting a `CaseStudyData` object built from the section
   `kind`s above.
2. Register it in [lib/projects.ts](lib/projects.ts): add the import to the `caseStudies` map
   (keyed by slug) *and* add a `ProjectSummary` entry to the `projects` array (this drives the
   home page card, metadata, and `projectSlugs` used for static generation — both are required,
   the page will 404 without the `projects` entry and throw without the `caseStudies` entry).

**To add a new section kind:** add the variant to `CaseStudySectionData` in
`components/case-study/types.ts`, add a renderer component, and wire it into the `kind` switch in
`CaseStudySections.tsx`.

### Styling

Class names throughout (`container`, `btn btn-brand`, `soft-section`, grid `colClass` props, etc.)
imply a Bootstrap-like utility CSS layer defined in [app/globals.css](app/globals.css) — check
there before inventing new utility classes.
