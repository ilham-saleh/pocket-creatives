# Release follow-ups

Phase 8 tests the local implementation and prepares release configuration. It does not authorise deployment or establish that the website is ready to replace the existing Pocket Creatives site.

| Item | Current state | Required before public release |
| --- | --- | --- |
| Media and placement | Original Phase 4 assignments preserved; 14 Pocket/Vimeo candidate files remain private and rights-pending | Agency's approved files, usage permissions, credits and final content-to-section choices |
| Business facts | Quote-based pricing and verified general details used | Confirm any additional studio address, team roster or pricing before adding it |
| Contact delivery | Server integration and offline/browser mocks tested; no credentials supplied | Verified sender, provider key, exact origin, form secret, shared abuse protection and authorised inbox/Reply-To test |
| Policies | Privacy/cookie drafts describe the current preview and planned contact flow | Agency review against actual hosting, provider, retention and any analytics/cookie configuration |
| Existing URLs | Six core mappings implemented; [123-route inventory](seo-route-map.csv) retained | Resolve sector pages, source articles and archive routes using content parity and traffic/backlinks; preserve unresolved destinations |
| Indexing/domain | Preview remains noindex; explicit release mode tested on localhost | Confirm production canonical host and enable indexing at build/runtime only on approved production |
| Hardware/accessibility | Automated Chromium and keyboard checks | Physical iOS Safari and Android, software keyboard/browser chrome, VoiceOver or equivalent screen reader review |
| Performance | Lab reports in [QA report](phase-8-qa.md); no field data | Recheck the deployed host and real devices; establish field LCP/CLS/INP after launch |

## Legacy paths

The following existing configuration is tested, not a substitute for the full inventory:

| Old route (with or without `/`) | Destination |
| --- | --- |
| `/about-us` | `/about` |
| `/video-production-company-london` | `/services/video-production` |
| `/photography-services-london` | `/services/photography` |
| `/how-we-work` | `/process` |
| `/creative-training-courses` | `/creative-training` |
| `/contact-project-enquiry` | `/contact` |

With `ENABLE_LEGACY_REDIRECTS=true`, these use a single permanent 308, retaining query parameters. Remaining trailing slashes normalize after mapped routes. Preserve existing sector/archive URLs: redirecting them indiscriminately to `/work` or `/` would discard distinct content. No live search-console, hosting, domain, mailbox or DNS changes were performed.
