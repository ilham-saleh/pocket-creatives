# Pocket Creatives content inventory — Phase 1

Audit date: 4 November 2026 (Europe/London). Status: research only; publication and implementation remain subject to the Phase 1 approval gate.

## Evidence and coverage

The rendered homepage, About, Video, Photography, Training, Process, Pricing, Contact, Blog index, Privacy Policy, Testimonials, eight portfolio sector pages and one article were inspected. The advertised case-study hub was also inspected but is not a verified working case-study archive.

Saved evidence: [primary pages](../output/playwright/phase-1/pocket-pages.json), [portfolio sectors, testimonials and article](../output/playwright/phase-1/pocket-secondary.json), [public robots/sitemap checks](../output/playwright/phase-1/pocket-sitemaps.json), and [advertised sitemap checks](../output/playwright/phase-1/pocket-discovered-sitemaps.json). These files contain capture-time DOM text, headings, metadata, links, image attributes and video embed references. They establish what the public site displayed, not independently verified current business facts or asset licences.

The [route map](seo-route-map.csv) records 123 discovered same-origin paths, including link-only discoveries. The [media inventory](media-inventory.csv) records 1,338 distinct asset references: 1,257 image URLs and 81 distinct Vimeo IDs. Image URL counts include thumbnails and alternate exports; they are **not** counts of unique projects or original photographs. This is bounded by the inspected pages and does not represent a complete WordPress export.

## Page content and intended destinations

| Inspected source | Verified content available | Intended destination / action |
| --- | --- | --- |
| [Homepage](https://www.pocketcreatives.co.uk/) | Agency positioning, client quotes, named video embeds, photo gallery, advantages, FAQs, contact details | `/`; rewrite concise copy around the same facts, with Lumifya composition |
| [About](https://www.pocketcreatives.co.uk/about-us/) | Company history, three named co-owners, service philosophy, values, archive imagery | `/about`; update time-sensitive biography claims and approve current team roster |
| [Video](https://www.pocketcreatives.co.uk/video-production-company-london/) | Production stages, sectors, showreel, costs, FAQs | `/services/video-production`; retain London search intent and full service depth |
| [Photography](https://www.pocketcreatives.co.uk/photography-services-london/) | Eight linked sector galleries, photography proposition, FAQs | `/services/photography`; preserve separate sector search intent |
| [How We Work](https://www.pocketcreatives.co.uk/how-we-work/) | Consultation, scope/budget discussion, planning, attendance at shoots, feedback, delivery formats | `/process`; factual basis for four-stage homepage summary |
| [Pricing](https://www.pocketcreatives.co.uk/pricing/) | Flexible quoting, production cost factors, public ranges and day-rate examples | `/pricing`; amounts held pending reconciliation |
| [Creative Training](https://www.pocketcreatives.co.uk/creative-training-courses/) | Bespoke, in-person 1:1 training day; introductory call and bespoke plan; public course fee | `/creative-training`; preserve genuine offering without inventing dates or qualifications |
| [Contact](https://www.pocketcreatives.co.uk/contact-project-enquiry/) | Existing enquiry fields, studio location, telephone, recruitment/partner emails | `/contact`; required-field specification comes from `plan.md`, not the legacy form |
| [Testimonials](https://www.pocketcreatives.co.uk/testimonials/) | Named client feedback across multiple sectors | Homepage selection plus retain archive or approve an equivalent replacement |
| [Blog](https://www.pocketcreatives.co.uk/blog-photography-video/) | Real article list, categories and pagination | `/journal`; content exists, so no fabricated filler is required |
| [Sample article](https://www.pocketcreatives.co.uk/photography-and-video-agency-london/) | Photography/video agency article with existing title and canonical | Proposed `/journal/photography-and-video-agency-london`; complete migration only after content/media review |
| [Privacy Policy](https://www.pocketcreatives.co.uk/privacy-policy/) | Privacy and cookie-related sections; old WordPress-oriented material | `/privacy-policy` and a separately approved `/cookie-policy`; update to actual future processing |
| [Case-study hub](https://www.pocketcreatives.co.uk/case-studies-hub/) | Homepage-like body, but document title is “Page not found - Pocket Creatives” and no canonical in capture | Broken/ambiguous destination; propose `/work` after confirming current HTTP status and historical content |

## Confirmed service scope

Video and photography are equally central. The [About page](https://www.pocketcreatives.co.uk/about-us/) supports commercial, corporate and promotional production, TV adverts, brand films, crowdfunding and social content, plus product, people and lifestyle photography. The [video page](https://www.pocketcreatives.co.uk/video-production-company-london/) further covers event, training, HR, interview, financial-sector, fashion, food/drink, beauty/cosmetics, product/unboxing and technology videos. Describe these as documented capabilities; do not imply that every category has a separate approved case study.

The [photography page](https://www.pocketcreatives.co.uk/photography-services-london/) links to eight substantial sector pages. All eight were inspected:

| Sector | Existing route | Migration recommendation |
| --- | --- | --- |
| Food & Drink | [/portfolio/food-and-drink-photography-video/](https://www.pocketcreatives.co.uk/portfolio/food-and-drink-photography-video/) | Preserve the landing page until SEO review; use approved photos and films in `/work` |
| Beauty | [/portfolio/beauty-photography-video/](https://www.pocketcreatives.co.uk/portfolio/beauty-photography-video/) | Same; includes named beauty campaign videos |
| Events | [/portfolio/event-photography-video/](https://www.pocketcreatives.co.uk/portfolio/event-photography-video/) | Same; includes ASM Connect and Telegraph STEM Awards |
| Products | [/portfolio/product-video-production-photography-london/](https://www.pocketcreatives.co.uk/portfolio/product-video-production-photography-london/) | Preserve London/product intent and unique content |
| Fashion | [/portfolio/fashion-photography-video/](https://www.pocketcreatives.co.uk/portfolio/fashion-photography-video/) | Retain until a content-equivalent destination is approved |
| People & Portraits | [/portfolio/people-portrait-photography/](https://www.pocketcreatives.co.uk/portfolio/people-portrait-photography/) | Retain portrait intent; distinguish client portraits from agency staff |
| Crowdfunding | [/portfolio/crowdfunding-photography-video/](https://www.pocketcreatives.co.uk/portfolio/crowdfunding-photography-video/) | Retain campaign-specific intent; do not invent fundraising outcomes |
| Jewellery | [/portfolio/jewellery-photography-london/](https://www.pocketcreatives.co.uk/portfolio/jewellery-photography-london/) | Retain specialist London jewellery intent |

These pages should not all be redirected to a generic client-side filter. Their copy, inbound links and organic traffic need assessment before consolidation. The requested top-level sitemap is the primary navigation structure, not proof that every legacy sector URL can be discarded.

## Featured work candidates

The following labels and Vimeo IDs are present on Pocket Creatives' homepage. These are reliable identities for a shortlist; campaign briefs, production credits, dates, budgets, results and commercial clearance remain unverified unless separately supplied.

| Verified embed title | Vimeo ID | Proposed role |
| --- | --- | --- |
| California Walnuts Christmas TV Ad | [648958635](https://player.vimeo.com/video/648958635) | Commercial/campaign feature |
| Samsung SparkBox | [1051508574](https://player.vimeo.com/video/1051508574) | Brand/product feature |
| Samsung Dizziak | [1051508539](https://player.vimeo.com/video/1051508539) | Alternative Samsung feature; choose one for homepage variety |
| Rightmove Believe It Campaign | [1051507629](https://player.vimeo.com/video/1051507629) | Campaign feature |
| The Telegraph STEM Awards | [343486991](https://player.vimeo.com/video/343486991) | Event/corporate feature |
| ASM Connect - Event Highlights | [724445697](https://player.vimeo.com/video/724445697) | Alternative event selection |
| The Sustainable Kitchen | [448829352](https://player.vimeo.com/video/448829352) | Food-related moving-image candidate |
| Pocket Creatives in 73 Seconds - This Is Us | [1101645222](https://player.vimeo.com/video/1101645222) | Agency showreel, not a client case study |
| Behind the scenes with Ayumi | [349685555](https://player.vimeo.com/video/349685555?h=ef87420329) | Process/About; retain required Vimeo hash |

Homepage selection should reserve at least two of four-to-six work slots for approved **photography** sets. A generic gallery image must not become a named client case study merely because its filename contains a brand or service keyword. Food, beauty and product photographs are abundant in the inspected portfolio, but the owner must confirm grouping, client attribution and preferred hero crops. Where there is no documented brief, publish an honest project gallery with verified title/category and media rather than a fabricated case-study narrative.

## Testimonials and client identity

The homepage attributes feedback to **Alice Morgan, The Telegraph; Giang Cao, realme; Joppe Coelingh, Yop and Tom; Dominique Mallion, Philips**. The testimonial archive and training page provide longer material and additional named clients. Preserve attribution exactly; selected excerpts must not change meaning or imply new numerical outcomes. The audit stores source text, but the paragraphs below are summaries, not publishable quotations.

| Attribution | Meaning supported by the source | Source |
| --- | --- | --- |
| Alice Morgan, The Telegraph | Knowledgeable, supportive production team; flexible delivery | [Homepage](https://www.pocketcreatives.co.uk/), [Training](https://www.pocketcreatives.co.uk/creative-training-courses/) |
| Giang Cao, realme | Repeat video/photo work, polished content and organised collaboration | [Testimonials](https://www.pocketcreatives.co.uk/testimonials/) |
| Joppe Coelingh, Yop and Tom | Repeat brand photoshoots; positive feedback naming Bryony and Kelly | [Homepage](https://www.pocketcreatives.co.uk/) |
| Dominique Mallion, Philips | Strong people-centred photography and visual storytelling | [Testimonials](https://www.pocketcreatives.co.uk/testimonials/) |

The relationship with Samsung and Rightmove is evidenced by named portfolio embeds; Telegraph, realme and Philips are also supported by attributed feedback. This is evidence of public portfolio claims, not permission to use every client trademark in a new logo strip. Request approved individual logos; do not crop a composite logo board into assumed licensed brand files. Do not migrate Lumifya's demo star ratings, retention percentages or client counts.

## Agency, team and process

The [About page](https://www.pocketcreatives.co.uk/about-us/) names **Steven Mayatt, Haider Romero Perez and Lauren Hodge** in the company's history, and describes Steven, Haider and Lauren as co-owners. The homepage identifies Steven as MD & Creative Director. The About text includes both a 2017 launch and a statement about entering the sixth year; that tenure wording is stale relative to this audit date. It also references a past Kickstart scheme and “over 16 years” of experience. Do not carry these time-dependent statements forward without confirmation.

Published image labels identify a co-owner group photograph and several historical team photographs. They do not establish a current full staff roster or current job titles. Bryony, Kelly, Charlie and Connor appear in testimonial wording or asset filenames; do not infer biographies, roles or employment status from those references.

The requested four-stage homepage process is an editorial grouping of the real source:

1. **Discover:** conversation, goals, brief and scope/budget alignment.
2. **Plan:** creative planning and pre-production; agree logistics and intended output formats.
3. **Produce:** photography/filming with client participation where appropriate.
4. **Deliver:** editing, review/refinement and final assets for their intended channels.

The dedicated [video page](https://www.pocketcreatives.co.uk/video-production-company-london/) explicitly presents six stages, including legal clearances. Retain that detail on the full process/service page where relevant. Four homepage labels are a proposed summary, not a quotation or a claim that the current site uses exactly four stages.

## Training, pricing and contact facts

The [training page](https://www.pocketcreatives.co.uk/creative-training-courses/) offers a bespoke **one-day, in-person, 1:1** course in London, covering photography, filming, editing or a combination. Booking begins with an exploratory call, then a tailored plan and agreed date. Published fee: **£795 + VAT**. No fixed dates, qualification or online self-serve booking schedule was verified. Preserve the published format and confirm the fee before launch.

| Item | Public evidence | Decision needed |
| --- | --- | --- |
| Typical project range | Homepage: £1,500–£5,000. Pricing page: £2,000–£6,000, smaller projects below £1,000 and larger productions above £15,000 | One approved range and qualifiers for every page; do not choose silently |
| Filming day | Pricing page: starts from £1,050 + VAT | Confirm current scope/inclusions and whether to publish |
| Photography day | Pricing page: starts from £850 + VAT | Confirm current scope/inclusions and whether to publish |
| Training day | Training page: £795 + VAT | Confirm currency of published offer |
| General email | `team@pocketcreatives.co.uk` | Consistently shown; verify delivery destination during form setup |
| Telephone | `020 3633 8494` | Consistently shown; display UK form, use `tel:+442036338494` |
| Legal entity | Pocket Creatives Limited; company number `11041856` | Source-site claim; legal approval at launch, not an external registry check |
| Contact-page studio | Wow Workspaces Battersea, Unit 3, 7–9 Ingate Place, Battersea, London SW8 3NS | Conflicts with shared footer; obtain current approved address |
| Shared footer office | Room 5 Magnolia Studios, 53a Clapham High Street, SW4 7TG | Confirm current status |
| Shared footer studio | Studio 4a, Peacock Yard, London SE17 3LH | Confirm current status |
| Response commitment | Contact page says a 60-minute response aim during normal working hours | Confirm before repeating as a service promise |

The legacy contact form asks for website as a required field. The redesign requirement makes website optional; follow `plan.md`. No forms were submitted during this audit, so delivery, spam controls and notification routing are not verified.

Published agency social destinations found in the site's links:

- [Instagram](https://instagram.com/pocketcreatives)
- [Facebook](https://www.facebook.com/pocketcreativesuk/)
- [LinkedIn company](https://www.linkedin.com/company/pocketcreatives/)
- [YouTube channel](https://www.youtube.com/channel/UCfaeAQXU6XfJbLTlWj-FcdQ)

These are verified **link destinations on the agency site**, not proof of present account ownership or successful authentication. A personal Steven Mayatt LinkedIn URL was also found; do not substitute it for the company profile. WhatsApp is mentioned, but no approved destination is established in this inventory.

## SEO findings and migration limits

The main inspected marketing pages have explicit titles and canonical URLs; these are preserved in the route CSV. `/photography/`, `/video-production-agency/` and `/contact-us/` are still linked by the current site alongside newer canonical service/contact routes. Their live redirect chains have not been audited; inspect before configuring new redirects.

`robots.txt` advertised `sitemap_1.xml`, `sitemap_2.xml` and `sitemap_3.xml`. All three returned **404** in the request audit. `sitemap_index.xml` and `wp-sitemap.xml` also returned 404. This prevents treating sitemap-based URL discovery as complete. Link discovery found real blog/category/sector pages; a WordPress URL export and Search Console/backlink data are still needed for a release-complete migration map. No traffic or ranking claims are made.

The current cookie link points to the Privacy Policy, which includes cookie-related text. A separate current cookie-policy page was not verified. The policy includes WordPress-specific material and must be adapted to the actual future form provider, embeds, analytics, retention and consent configuration. Do not migrate empty headings or old boilerplate as if it described the new stack.

## Approval and missing-content ledger

- Approve the canonical pricing figures and current location(s).
- Approve selected photography sets, current staff roster/roles, biographies and team photographs.
- Confirm ownership/reuse rights, client permissions and any music, model, location or third-party media restrictions; see [media manifest](media-manifest.md).
- Supply approved project briefs/credits/results where a full case study is desired; otherwise use factual galleries.
- Confirm logo master and permissible monochrome/dark-background variants.
- Confirm training fee, response-time commitment and social destinations for launch.
- Obtain URL/traffic exports and approve category preservation/consolidation decisions.
- Approve updated privacy/cookie content and configure/test the enquiry provider in later phases.

Phase 1 does not create application routes, publish prices, submit enquiries or establish asset clearance.
