# Tanmay Kulkarni Portfolio

This portfolio is a Next.js App Router site exported as static HTML for GitHub Pages.

## Local development

Install Node.js 22 or newer, then run:

```bash
npm ci
npm run dev
```

The portfolio content lives in `content/projects/*.mdx`. Add a new MDX file and its slug to
`lib/projects.ts` to create a new static case-study route.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the `out/` directory.
In repository Settings → Pages, set the source to **GitHub Actions**. The workflow supports
both `main` and `nextjs-static-migration` while the migration is being reviewed.

GitHub Pages cannot run Next.js server-side features. Keep this site compatible with
`output: "export"`: do not add API routes, Server Actions, database access, or server-only
runtime behavior.