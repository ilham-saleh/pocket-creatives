# Pocket Creatives

Public source: [ilham-saleh/pocket-creatives](https://github.com/ilham-saleh/pocket-creatives). See [Cloudflare deployment](docs/cloudflare-deployment.md) for the Workers build, Node version, commands and current deployment status. Generated research archives and restricted font/media copies stay local; links into `output/` refer to that archive.

Lumifya-based Pocket Creatives redesign. Read [the requirements](plan.md), [phase sequence](phases.md) and [progress ledger](docs/progress.md). The homepage, motion and Phase 6 marketing pages are implemented. Gate B was approved on 6 November 2026. See the [Phase 6 report](docs/phase-6-pages.md) and [comparison](docs/phase-6-comparison.html). Phase 7 responsive refinements are implemented; see the [responsive report](docs/phase-7-responsive.md) and [six-width comparison board](docs/phase-7-comparison.html). Phase 8 local QA and release preparation are recorded in the [QA report](docs/phase-8-qa.md). Live email activation, physical-device checks, performance follow-ups and media/content release approval remain pending. See the [deployment guide](docs/deployment.md) and [release follow-ups](docs/release-readiness.md).

## Local development

Use Node 24.22.0 (see `.node-version`) and npm; this also satisfies the Cloudflare deployment CLI.

```sh
npm ci
npm run fonts:setup
npm run media:setup
npm run dev
```

Open http://127.0.0.1:3000/ for the homepage or `/foundation` for the shared component review.

Switzer must be obtained directly from Fontshare by each collaborator. `fonts:setup` obtains the exact official webfonts and checks their SHA-256 hashes. Read [font and asset provenance](docs/font-and-brand-provenance.md) and the included licence. Once setup is complete, no remote font request is needed at runtime or build time.

`media:setup` verifies/downloads the selected Pocket preview candidates. They are ignored by version control and **not approved for public release**. See [homepage media provenance](docs/homepage-media.md), including the original generated hero and its complete generation prompt. Do not publish the build or its static assets before clearing candidate rights. If source bytes change, setup stops for review rather than silently substituting a different asset.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

Browser inspection scripts, results and screenshots are under `output/playwright/phase-3/`; shared-component checks are under `phase-2/`. These scripts use the installed Playwright CLI, for example:

```sh
playwright-cli -s=pocket open http://127.0.0.1:3005
playwright-cli -s=pocket run-code --filename=output/playwright/phase-5/regression/check-motion.js
playwright-cli -s=pocket run-code --filename=output/playwright/phase-5/regression/check-accessibility.js
```

These are saved browser audit routines, not an application test framework. See [Phase 3 report](docs/phase-3-homepage.md) and [Phase 4 motion report](docs/phase-4-animations.md).

Phase 4 motion/heading/accessibility/touch audit routines and results are in `output/playwright/phase-4/`. These routines target the final production preview at port 3005. The user can pause continuous loops; reduced-motion and short-height viewports use the documented static fallbacks.

Phase 5 captures, measurement comparisons and final regression results are in `output/playwright/phase-5/`. Reuse one named browser session with tabs; routine checks can run headlessly. Close the task's tabs after checks while preserving any unrelated work in a shared browser.

## Production preview

Homepage, foundation and the remaining-page route group return 404 in production unless their respective preview flags are enabled. These flags are convenience guards, **not authentication**; keep previews on localhost or behind deployment access controls.

```sh
npm run build
ENABLE_HOMEPAGE_PREVIEW=true ENABLE_FOUNDATION_PREVIEW=true ENABLE_SITE_PREVIEW=true npm run start -- --port 3005
```

By default, responses carry `X-Robots-Tag: noindex, nofollow`; root metadata prevents indexing, robots blocks crawling and the sitemap is empty. An approved release can explicitly enable indexing at both build and runtime. See [environment modes](docs/deployment.md#environment-modes). No deployment was performed.

Stop a running production preview before rebuilding, then restart it after a successful build. A build replaces `.next` assets, so an older running server can otherwise reference files that no longer exist. In environments that block Turbopack's local worker, `npm run build -- --webpack` is the verified build alternative.

## Structure

- `src/app`: App Router shell, local fonts, homepage, foundation and not-found screen.
- `src/styles`: measured tokens and homepage composition styles.
- `src/components/layout`, `navigation`, `ui`: shared header, drawer, controls and footer.
- `src/components/home`: homepage sections, responsive media and click-loaded Vimeo dialog.
- `src/components/animation/motion-scope.tsx`: GSAP/ScrollTrigger lifecycle utility. The homepage uses its own responsive client boundary and scoped setup in `src/lib/homepage-motion.ts`.
- `src/content`: verified site details, structured homepage data, destination registry and content schemas.
- `scripts`: font/media setup and source manifests.
- `docs`: reference, provenance, validation and persistent handoff.

Navigation and featured work now lead to implemented local pages. Existing sector pages and the journal archive remain external until their migration is complete. The full legacy route inventory must be reconciled before production replacement; the six opt-in core redirects are not a complete migration.

## Enquiry configuration

Copy `.env.example` to `.env.local`. Set a Resend API key, verified `CONTACT_FROM`, recipient `CONTACT_TO=team@pocketcreatives.co.uk`, a strong random `CONTACT_FORM_SECRET`, and exact `CONTACT_ALLOWED_ORIGIN`. Keep these server-only. Enable `CONTACT_ENABLED=true` when ready. No provider credentials were supplied during Phase 6, so the preview currently offers direct email/phone and reports online delivery as unavailable.

The handler requires provider acceptance before reporting success; failures preserve the form values. See [delivery setup and release checks](docs/phase-6-pages.md#contact-delivery). Configure shared/edge abuse protection before a public multi-instance deployment. Approve the draft policies and test real inbox delivery with an authorised recipient before launch.

## Phase 6 checks

```sh
node scripts/check-enquiry.mjs
node scripts/check-phase6-artifacts.mjs
playwright-cli -s=pocket run-code --filename output/playwright/phase-6/check-interactions.js
playwright-cli -s=pocket run-code --filename output/playwright/phase-6/check-motion.js
playwright-cli -s=pocket run-code --filename output/playwright/phase-6/check-accessibility.js
```

The first check is offline and never sends email. Artifact/browser checks require the local preview. Browser success tests intercept the endpoint; they do not contact the agency. Reuse `pocket`, check existing tabs before opening links, and close only task-owned tabs.

New source lives in `src/app/(site)`, `src/components/pages`, `portfolio`, `forms`, `src/content/projects.ts`, `services.ts`, `journal.ts`, and `src/lib/enquiry-*`. Page styling is scoped to `src/styles/pages.css`. Policy drafts, article edits and media choices still need release review.

## Phase 7 responsive checks

With the local preview running, reuse the same `pocket` browser session:

```sh
playwright-cli -s=pocket run-code --filename output/playwright/phase-7/audit-layout.js
playwright-cli -s=pocket run-code --filename output/playwright/phase-7/check-responsive.js
playwright-cli -s=pocket run-code --filename output/playwright/phase-7/check-motion.js
```

The layout audit covers 162 route/viewport combinations. Touch emulation and reduced-height form checks do not certify physical iOS/Android devices. See the report for reference measurements, captured comparisons and remaining checks.

## Phase 8 final QA

[QA report](docs/phase-8-qa.md) includes performance measurements, accessibility/navigation/form/motion checks, responsive captures and remaining limitations. Saved scripts and results are in `output/playwright/phase-8/`. Reuse one headless `pocket` session and run browser checks sequentially; close it afterward.

```sh
node scripts/check-enquiry.mjs output/playwright/phase-8/enquiry-checks.json
playwright-cli -s=pocket run-code --filename output/playwright/phase-8/check-interactions.js
playwright-cli -s=pocket run-code --filename output/playwright/phase-8/check-accessibility.js
playwright-cli -s=pocket run-code --filename output/playwright/phase-8/check-keyboard.js
```

Lighthouse uses temporary tooling attached to the same browser via its local debugging port; it is not an application dependency. `check-site.js` expects the private preview, while `check-release.js` and `check-release-site.js` expect an explicitly configured local release build. Keep those modes separate and restore the private preview after testing.
