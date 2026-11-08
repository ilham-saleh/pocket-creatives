# Pocket Creatives media manifest — Phase 1

Audit date: 4 November 2026. Status: **discovered candidates, not a cleared production asset library**.

## Inventory and provenance

[media-inventory.csv](media-inventory.csv) contains 1,338 deduplicated source references from the inspected Pocket Creatives pages: **1,257 image URLs and 81 Vimeo video IDs**. This count includes thumbnail/crop exports and is not a count of unique original works. Each row records discovery pages, original alt/title metadata, observed selected source, available browser dimensions, intended-use status, rights status and optimisation status.

Evidence comes from [primary page captures](../output/playwright/phase-1/pocket-pages.json) and [portfolio/testimonial/article captures](../output/playwright/phase-1/pocket-secondary.json). The CSV is generated from public DOM image and embed attributes. It is not a CMS export, download entitlement or proof of ownership.

Many images are lazy-loaded. Their `src`/`currentSrc` was a 1×1 GIF while `data-src` held the real candidate URL. Those 1×1 dimensions are **excluded** from the manifest's size field. Browser `naturalWidth` can also be density-corrected by `srcset`; therefore recorded natural dimensions apply to the observed browser resource, not automatically the file named in `data-src` or the agency's master original. Filename suffixes such as `2000x1335` are not treated as verified image dimensions.

No production originals were downloaded, converted, republished or added to `public/`. The browser screenshots are audit evidence only and include reference-site content; do not ship them as website assets.

## Rights and approval policy

| Status | Meaning | Permitted next step |
| --- | --- | --- |
| Public source verified | The agency site displayed an image reference, title, caption or embed | Use to identify and discuss a candidate |
| Rights pending | Owner licence, client clearance, model/location releases, music or usage scope not provided | Request/record approval before production use |
| Approved original pending | A web derivative exists, but agency master/export is unavailable | Obtain original or approved derivative; verify resolution and crop |
| Approved for production | **No assets have been assigned this status in Phase 1** | Assign only with recorded owner approval or appropriate licence evidence |

The user has authorised research and a redesign, but the requirements explicitly prohibit assuming every discovered asset is licensed for reuse. The public site is evidence of prior display, not evidence that third-party permissions extend to new crops, downloads, edited video loops, new placement or self-hosting. Reusing an existing Vimeo embed is a candidate delivery route; confirm rights and domain restrictions. Do not extract Vimeo streams or copy Lumifya demo media.

## Priority image shortlist

The following are exact discovered URLs. “Pending” means the actual source file dimensions and content have not been independently decoded/visually approved in this inventory. Draft alt suggestions based on site labels are identification aids; confirm against the selected image before publishing.

| Candidate / source URL | Type and dimensions | Proposed use | Alt/identity handling | Rights / optimisation |
| --- | --- | --- | --- | --- |
| [Current Pocket Creatives logo](https://www.pocketcreatives.co.uk/wp-content/uploads/2017/11/pocket-creatives-logo-2026.png) | PNG; observed 300×150, 2:1, exact selected source | Header/footer identity | `Pocket Creatives`; request approved vector or larger master; retain genuine logo | Owner confirmation; no conversion yet |
| [2024 client logo grid](https://www.pocketcreatives.co.uk/wp-content/uploads/2024/08/Logo-Grid-2024.jpg) | JPEG; source dimensions pending | Evidence for client-logo curation | Composite board only; identify and approve individual client logos separately | Client/trademark approval pending; do not crop into presumed licensed standalone logos |
| [Co-owner group photograph](https://www.pocketcreatives.co.uk/wp-content/uploads/2020/01/Capture0312-1024x684.jpg) | JPEG; observed selected resource 313×209; source master dimensions pending | About/history | Source label identifies Steven, Haider and Lauren; verify current preferred portrait | Historical image; original and approval pending |
| [About-page image](https://www.pocketcreatives.co.uk/wp-content/uploads/2022/11/about-us-at-pocket-creatives.png) | PNG; observed selected resource 655×330; master pending | About introduction | Source alt describes a woman holding a camera; do not infer identity | Rights and appropriate crop pending |
| [Team image, 2022](https://www.pocketcreatives.co.uk/wp-content/uploads/2022/12/pocket-creatives-team-1.jpg) | JPEG; dimensions pending | About/process | Source label identifies agency team; verify people and current applicability | Current team approval and original pending |
| [Team image, January 2020](https://www.pocketcreatives.co.uk/wp-content/uploads/2020/01/810_0284s.jpg) | JPEG; dimensions pending | History/BTS only if approved | Label as historical if used; not evidence of current team roster | Current relevance and rights pending |
| [Steven portrait](https://www.pocketcreatives.co.uk/wp-content/uploads/2022/11/steven-300x300.jpg) | JPEG; dimensions pending; filename suggests a thumbnail only | Founder quote/About | Source label identifies Steven; obtain larger original before large-format use | Original/approval pending |
| [Food photograph candidate](https://www.pocketcreatives.co.uk/wp-content/uploads/2025/01/food-photography-at-pocket-creatives-2000x1335.jpg) | JPEG; dimensions pending | Featured photography/service image | Client/project identity unverified; final alt after visual selection | Rights, original and crop pending |
| [Food photograph candidate 2](https://www.pocketcreatives.co.uk/wp-content/uploads/2025/03/what-is-food-photography-2000x1335.jpg) | JPEG; dimensions pending | Food gallery | Existing alt is SEO-oriented; write a visual description after inspection | Rights, original and crop pending |
| [Beauty/product candidate](https://www.pocketcreatives.co.uk/wp-content/uploads/2025/05/cosmetic-product-photography-3-2000x1335.jpg) | JPEG; dimensions pending | Featured photography or service panel | Do not derive client identity from the service filename | Rights, original and crop pending |
| [Beauty candidate 2](https://www.pocketcreatives.co.uk/wp-content/uploads/2022/11/beauty-product-photography-3-2000x1335.jpg) | JPEG; dimensions pending | Beauty gallery | Source category established; project identity pending | Rights, original and crop pending |
| [Watch photography candidate](https://www.pocketcreatives.co.uk/wp-content/uploads/2025/01/watch-photography-2000x1335.jpg) | JPEG; dimensions pending | Product/jewellery gallery | Brand and campaign unverified | Rights, original and crop pending |
| [Food/process candidate](https://www.pocketcreatives.co.uk/wp-content/uploads/2024/09/Food-and-Drink-Photography-6.webp) | WebP; dimensions pending | Process or photography | Found on process page; precise scene/identity must be inspected | Existing WebP does not prove optimal export; review after approval |
| [Boulder Shack candidate frame](https://www.pocketcreatives.co.uk/wp-content/uploads/2024/03/Screenshot-80-2000x1250.png) | PNG; dimensions pending | Optional campaign/gallery frame | Source alt names Boulder Shack; verify project/credit and obtain approved frame | Rights and high-quality source pending |

Use the full CSV to inspect the wider eight-sector gallery inventory. The homepage should not become video-only merely because named video titles are easier to verify. Select two coherent photographic projects with approved attribution before Phase 3 content lock.

## Priority video shortlist

The titles below are verified from Pocket Creatives' public iframe labels. Intrinsic video dimensions, aspect ratio, available resolutions, duration, captions, poster rights and allowed embed domains have **not** been verified. A landscape player presentation does not establish the original video's aspect ratio.

| Verified title | Existing embed reference | Proposed use | Player label / rights / optimisation |
| --- | --- | --- | --- |
| Pocket Creatives in 73 Seconds - This Is Us | [1101645222](https://player.vimeo.com/video/1101645222?dnt=1&app_id=122963) | Agency reel; possible hero adaptation subject to visual approval | Use title for player label; confirm approved poster/loop; lazy-load full player except explicit play |
| Behind the scenes with Ayumi | [349685555](https://player.vimeo.com/video/349685555?h=ef87420329&dnt=1&app_id=122963) | About/process | Preserve hash; do not silently drop access parameters; approved poster and captions pending |
| California Walnuts Christmas TV Ad | [648958635](https://player.vimeo.com/video/648958635?dnt=1&app_id=122963) | Featured commercial | Title verified; campaign/music rights and final player configuration pending |
| Samsung SparkBox | [1051508574](https://player.vimeo.com/video/1051508574?dnt=1&app_id=122963) | Featured brand/product film | Title verified; credits, rights and poster pending |
| Samsung Dizziak | [1051508539](https://player.vimeo.com/video/1051508539?dnt=1&app_id=122963) | Alternative Samsung film | Same; avoid two near-duplicate brand slots without editorial reason |
| Rightmove Believe It Campaign | [1051507629](https://player.vimeo.com/video/1051507629?dnt=1&app_id=122963) | Featured campaign | Title verified; do not invent results or production budget |
| The Telegraph STEM Awards | [343486991](https://player.vimeo.com/video/343486991?dnt=1&app_id=122963) | Event/corporate work | Title verified on homepage and event sector page; poster and rights pending |
| ASM Connect - Event Highlights | [724445697](https://player.vimeo.com/video/724445697?dnt=1&app_id=122963) | Additional event portfolio | Title verified; rights and poster pending |
| The Sustainable Kitchen | [448829352](https://player.vimeo.com/video/448829352?dnt=1&app_id=122963) | Food moving-image candidate | Title verified; client identity beyond title pending |

The source homepage embeds many players. Do not reproduce that loading pattern. Later implementation should use approved posters and load a player on request/visibility as appropriate; reserve one bounded muted loop only if a hero-video adaptation is approved. Do not autoplay sound, preload all 81 videos, or treat iframe presence as a successful playback test.

## Optimisation specification for approved assets

1. Obtain an approved original or explicit permission to reuse the selected web derivative; record approval, owner, scope and attribution requirements.
2. Decode actual pixel dimensions and inspect each image. Record master aspect ratio and focal point; approve desktop/mobile crops before building galleries.
3. Export responsive widths suited to measured Lumifya slots, using AVIF/WebP where appropriate. Keep a suitable fallback and do not upscale 150/300px thumbnails for large panels.
4. Give images intrinsic dimensions/aspect ratio to reserve layout space. Eagerly load only the selected hero/poster; lazy-load below-the-fold galleries.
5. Use meaningful descriptive alt text for project images. Empty alt is appropriate for purely decorative duplicates; do not repeat keyword-stuffed source metadata throughout the site.
6. For videos, confirm embed access, poster, transcript/captions, mute/autoplay policy and reduced-motion alternative. Preserve required Vimeo hashes and avoid extracting source streams.
7. Keep generated variants, source provenance and approvals associated with a stable content/media ID. Project pages may share assets without duplicating download/encode work.

## Missing-assets and approval checklist

- Approved current logo master, favicon and permitted dark-background variant.
- Approved homepage hero still; showreel loop only if requested/approved as a departure from Lumifya's still-image hero.
- Four-to-six featured projects with a balanced video/photo selection and confirmed client attribution.
- High-resolution photography sets with usage permissions and final descriptive alt text.
- Approved reel/campaign posters and accessible video material.
- Current team images, biographies, job titles and preferred names.
- Individual approved client logos and quote-use confirmation.
- Explicit clearance for crop/animation treatment where needed; no assumption that a public image can be downloaded, altered or self-hosted.

The gate is a content dependency, not a reason to invent substitute stock media. Phase 1 can be reviewed with these limitations visible. Later development placeholders must be clearly identified and cannot pass the final acceptance criteria.


## Phase 3 selection — 5 November 2026

The private homepage now uses fourteen selected source candidates and a separately generated original decorative hero. See [homepage media provenance](homepage-media.md), [exact source URLs and hashes](../scripts/home-media-sources.json), and [dimensions/byte sizes](../output/playwright/phase-3/media-metadata.json). Source candidates remain **pending publication clearance**; no entries in the original inventory were promoted to approved merely because they were used in local preview. The app does not contain the Lumifya hero image. The user’s latest instruction favoured a similar original image because the template asset’s licence was uncertain.

Actual card links lead to verified existing portfolios or Vimeo films; two photography cards are collections, not fabricated client projects. Team portraits remain omitted until a current roster is confirmed. The homepage is opt-in in production and remains noindex; this does not secure or clear its build assets for publication.
