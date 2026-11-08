# GitHub and Cloudflare deployment

The user authorised a public GitHub repository and public deployment on 8 November 2026, then selected Cloudflare Workers and image optimization with no shared-cache service.

- Repository: https://github.com/ilham-saleh/pocket-creatives
- Worker: `pocket-creatives`
- Account: `963e4ac33ac96bff809dad903fd43c25`
- Workers subdomain: `ilham-saleh.workers.dev`
- Live URL: https://pocket-creatives.ilham-saleh.workers.dev
- Deployment status: **published and serving traffic**, verified 8 November 2026.

This is a public review deployment, excluded from search. It does not replace the existing Pocket Creatives domain. The original content and image assignments remain unchanged. Online enquiry delivery remains disabled until a verified sender, provider credentials, form secret and allowed origin are configured. The email/phone alternatives remain available.

Cloudflare version `60985649-6f5b-4026-b960-591ded76eb3d` serves 100% of traffic. The live site passed **25/25 HTTP smoke checks** and **60/60 browser metadata/rendering/image checks**. All eight font-width samples match the original Next.js baseline. [Machine-readable validation](deployment-validation.json) records the deployed source commit and results. Initial hostname requests briefly failed during propagation; the subsequent checks passed with system certificate trust.

## Repeatable setup

Use Node **24.22.0** (recorded in `.node-version`) and npm. The current Cloudflare CLI requires Node `^22.23.0`, `^24.22.0` or `^26.12.0`.

```sh
npm ci
npm run fonts:setup
npm run media:setup
node scripts/setup-social-card.mjs
npm run lint
npm run typecheck
npm run build:vinext
npm run typecheck:cloudflare
npm run start:vinext -- --host 127.0.0.1 --port 3006
```

`cloudflare.config.ts` is the source of truth for the Worker account, runtime date, asset/image bindings and non-secret environment variables. Keep secrets in Cloudflare, never in this file. `vite.config.ts` configures vinext and the Cloudflare Vite plugin. The original `next dev`, `next build` and `next start` remain supported alongside these commands.

Cloudflare runtime types have their own `tsconfig.cloudflare.json` so Workers' `Element` and `Response` types cannot overwrite browser DOM types. GSAP imports run only after browser mounting, avoiding Worker startup timers while retaining animation definitions and cleanup. The social card embeds the existing licensed font/logo data instead of reading files from the Worker filesystem.

The adapter's generated Vite version was updated to 8.3.6. The compatible `fflate` 0.7.5 override fixes the old version pinned by Satori. Production dependency audit: zero reported vulnerabilities after these corrections. No forced framework downgrade was used.

## Deploy

```sh
npx cf auth login --no-browser
npm run build:vinext
npx cf deploy --prebuilt --dry-run
npx cf deploy --prebuilt
node scripts/check-deployment.mjs https://pocket-creatives.ilham-saleh.workers.dev
```

The login uses an authorization code in your existing browser. Do not paste tokens into chat or source. For CI, use a scoped Cloudflare API token in the CI secret store. No automatic GitHub deployment workflow or token has been configured; pushing source does not deploy it automatically.

## Repository scope and checks

Source, requirements, documentation, licences, generated original hero and the original Inter fonts are committed. `.env` files, installed dependencies, build output, research screenshots/logs/backups, Switzer binaries and the original candidate media downloads are excluded. The setup scripts retrieve and verify fonts/media. Historical documentation links into `output/` refer to the local audit archive, which is not published to GitHub. Existing media-rights and policy follow-ups are retained; repository publication does not relicense third-party assets.

Before publication, local Workers checks passed: 139 metadata/link/image checks; 24 functional flows; 31 page-motion/no-JS checks; 33 homepage motion checks; and 15 keyboard checks. Both Next.js and Workers builds, lint, application types and isolated Cloudflare types passed. The dry run reports approximately 1.42 MiB compressed Worker code. No real form submission was sent.

Official setup: [Cloudflare Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/), [vinext migration skill](https://github.com/cloudflare/vinext/blob/main/.agents/skills/migrate-to-vinext/SKILL.md), [Cloudflare CLI](https://developers.cloudflare.com/cf/agents/).
