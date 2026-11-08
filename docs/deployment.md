# Deployment and configuration

**8 November update:** the user has authorised GitHub publication and a separate Cloudflare Workers review deployment. [Current Cloudflare setup and status](cloudflare-deployment.md) supersedes the earlier local-only deployment status below; production-domain replacement and live email remain separate.

The Phase 8 build is a local review candidate. It has not been deployed. Run this checklist only after the agency has cleared the assets/content, policies, migration plan and live contact configuration. Preview flags and `noindex` are not access controls; protect staging, including static assets, behind hosting authentication.

## Runtime and reproducible setup

Use Node 22.13+ and npm (QA used Node 24). This is a Next.js server application with image optimization and a server-side enquiry endpoint; a static export is insufficient.

```sh
npm ci
npm run fonts:setup
npm run media:setup
npm run lint
npm run typecheck
npm run build -- --webpack
```

The original Inter files, their OFL licence and the generated Latin WOFF2/TTF derivatives are included in source. Ordinary installation does not need Python. To regenerate the derivatives after an approved font change, install `fonttools[woff]==4.60.2` in an isolated Python environment and run `python scripts/subset-display-fonts.py`. Do not modify or subset Switzer. Its unchanged files are downloaded directly from Fontshare by `fonts:setup`. Media setup verifies candidate hashes; it does not grant publication rights.

## Environment modes

Copy `.env.example` locally; set production secrets in the hosting provider's encrypted environment store. Never use `NEXT_PUBLIC_` for delivery credentials. Set indexing/migration variables consistently during **build and runtime**, because Next generates headers and metadata routes at build time.

| Variable | Protected preview | Approved production release |
| --- | --- | --- |
| `ENABLE_HOMEPAGE_PREVIEW` | `true` | `true` (existing route-rendering flag) |
| `ENABLE_SITE_PREVIEW` | `true` | `true` (existing route-rendering flag) |
| `ENABLE_FOUNDATION_PREVIEW` | Optional | `false` |
| `SITE_URL` | `https://www.pocketcreatives.co.uk` | Approved HTTPS canonical origin |
| `SITE_INDEXABLE` | `false` | `true` only after release approval |
| `ENABLE_LEGACY_REDIRECTS` | `false` | `true` only alongside the complete migration plan |
| `CONTACT_ENABLED` | `false` or a sandbox provider | `true` after delivery verification |

`SITE_URL` must be an HTTPS origin without credentials, path, query or fragment. The default is the existing `https://www.pocketcreatives.co.uk`. A different domain requires an explicit domain/canonical migration decision. With indexing disabled, every response carries `X-Robots-Tag: noindex, nofollow`, page metadata excludes indexing, robots blocks crawling and the sitemap is empty. Indexing requires **both** page-rendering flags as well as `SITE_INDEXABLE=true`. Foundation and API responses remain excluded even in release mode; unknown pages return 404 with noindex.

The release sitemap is derived from the implemented routes: 19 pages. It excludes foundation/API/unknown paths and avoids fabricated modification dates. Homepage and internal pages have canonical, description and social metadata. A generated social image uses the real logo and Inter type; Organization JSON-LD contains only the verified name, URL, email, phone and social profiles, with no invented address, ratings or staff.

Run under the hosting platform's Node service with TLS and a reverse proxy. For example, on a platform that provides a port and network isolation:

```sh
npx next start --hostname 0.0.0.0 --port "$PORT"
```

The repository's `npm run start` deliberately binds to localhost for review. On this workstation the review URL is `http://127.0.0.1:3005`. Stop the running preview before rebuilding `.next`, then restart it after success. Never serve an old process against replaced build files.

## Enquiry delivery

The approved receiving mailbox is `team@pocketcreatives.co.uk`. The form can send notifications to it through Resend once configured; the mailbox's own hosting provider does not need to be Resend.

Configure `RESEND_API_KEY`, a verified-domain `CONTACT_FROM`, `CONTACT_TO`, a strong random `CONTACT_FORM_SECRET`, and exact `CONTACT_ALLOWED_ORIGIN`. Use an origin such as `https://www.pocketcreatives.co.uk`, with no trailing slash. Only then enable `CONTACT_ENABLED=true`. Missing settings leave the form unavailable and retain direct email/phone alternatives. Sender verification/DNS changes are not performed by this phase.

The server validates the body, origin, honeypot and signed form token, bounds request/field sizes, requires provider acceptance, and sends the visitor's email as Reply-To. Timeout/rejection keeps the visitor's input. Retries use an idempotency key. Current request limiting is a process-local per-email backstop: configure shared/edge abuse protection for public multi-instance hosting; do not trust arbitrary forwarded-IP headers without a documented proxy boundary.

Run `node scripts/check-enquiry.mjs output/playwright/phase-8/enquiry-checks.json` for offline provider mocks. These tests never send email. Before launch, authorise a controlled real submission, verify the receiving inbox and Reply-To, test a delivery failure, and reconcile retention/privacy text with the actual provider and hosting configuration. No live delivery has been verified in this project yet.

## Migration and cutover

Use [the legacy route inventory](seo-route-map.csv) and [release follow-ups](release-readiness.md). Six core redirects are implemented and tested with/without trailing slashes and query strings. They use permanent HTTP 308 and go directly to the mapped page; other trailing slashes normalize afterward. No catch-all redirect sends unmigrated content to the homepage.

The remaining sector pages and journal archive are **not** migrated. Some links intentionally still point to the existing Pocket domain; replacing that domain without retaining those destinations would break them. Decide route-by-route whether to retain, migrate or retire, using current traffic/backlink data. Keep the legacy site serving the unresolved paths or complete their migration before replacing it. Recheck all external/source links at cutover.

After deployment approval: verify the canonical hostname/TLS, redirects and image responses; confirm production robots/meta/header consistency; fetch all sitemap URLs; test the real mailbox; run Lighthouse on the deployed host; verify iOS Safari/Android and keyboard/assistive technology; and submit the sitemap through the agency's search-console account. None of these external publication/account actions has been performed.

## Rollback

Keep the previous deployment artifact and environment configuration. If a release fails checks, roll the hosting deployment back to that artifact and preserve the legacy site's routing. Disable enquiry delivery if its provider fails. Keep failed/unapproved previews protected and excluded from indexing. Rebuild when changing the indexing or redirect flags; changing runtime variables alone does not replace build-generated headers/robots/sitemap.
