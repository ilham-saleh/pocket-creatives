# PROJECT: Pocket Creatives Website Redesign

## Role

Act as a senior creative director, UI/UX designer and full-stack frontend engineer specialising in premium creative agency websites.

Your task is to build a complete, production-quality website redesign for **Pocket Creatives**, a London-based video production and photography agency.

The website must closely follow the visual style, layout principles, typography, colours, interactions and overall creative direction of the **Lumifya Webflow template**, while using the actual business information, services, imagery, projects and brand identity of Pocket Creatives.

This is a full redesign, not a minor facelift.

## 1. Reference websites

**Primary visual reference:**

https://webflow.com/templates/html/lumifya-website-template

**Business and content reference:**

https://www.pocketcreatives.co.uk/

### Reference priorities

- Lumifya determines the visual design, typography, layout language, component styling, colours, animation character and interaction patterns.
- Pocket Creatives determines the agency identity, copy, services, case studies, media, testimonials, contact details and business information.
- Adapt the visual reference to a specialist photography and film production agency rather than a general digital design studio.
- Do not reproduce Lumifya's branding or proprietary content.
- Avoid using unrelated stock media when genuine Pocket Creatives media exists.
- Preserve the agency's original brand identity unless a change is explicitly approved.

## 2. Mandatory initial research

Before writing application code:

1. Inspect Pocket Creatives' homepage and relevant internal pages.
2. Inspect the Lumifya template listing and open its live preview using the template's Preview feature.
3. Explore the Lumifya homepage, navigation, service pages, portfolio, project pages, about page, contact page and mobile presentation wherever accessible.
4. Capture desktop and mobile screenshots of the reference.
5. Identify the actual colours, font families, font weights, heading sizes, maximum content widths, grid structures, spacing scale, border radii, button styles, hover states and interactions.
6. Create a design-reference audit explaining which parts will be recreated, adapted or omitted.
7. Inventory Pocket Creatives' existing content, project media and SEO-relevant pages.
8. Identify existing asset URLs and their reuse permissions.
9. Record anything that cannot be verified.

Do not invent precise Lumifya design values when the preview is inaccessible. Use visually appropriate temporary tokens clearly marked for verification.

Do not confuse Lumifya with similarly named Lumify templates.

### Research deliverables

Create these documents:

- `docs/reference-audit.md`
- `docs/design-system.md`
- `docs/content-inventory.md`
- `docs/implementation-plan.md`
- `docs/media-manifest.md`

The design audit should include source screenshots where permitted and a side-by-side comparison of the intended Pocket Creatives implementation.

## 3. Overall creative direction

Create a striking, elegant, premium website that feels like a modern creative production studio.

The desired experience is:

- Visually bold without being chaotic.
- Editorial, cinematic and portfolio-driven.
- Sophisticated but approachable.
- Creative and interactive without feeling like a gimmick.
- Responsive and fast.
- Strong enough to function as the agency's most important sales portfolio.

Use Lumifya's aesthetic closely rather than inventing an unrelated design theme.

### Important visual principles

- Oversized editorial typography.
- Strong typographic hierarchy.
- Carefully controlled whitespace.
- Highly considered photography and video presentation.
- Asymmetric and modular project layouts where appropriate.
- Clear contrast between text and background.
- Distinctive buttons and hover states.
- Purposeful, smooth animations.
- Visually engaging section transitions.
- Consistency across all pages.

Do not turn everything into identical rounded cards.

Do not build a generic SaaS landing page.

Do not use excessive gradients, glassmorphism or random decorative icons unless they are genuinely part of the visual reference.

## 4. Technology

First inspect the current repository.

If an application already exists, respect the existing architecture and avoid unnecessary migrations.

For a new standalone implementation, use:

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- CSS variables for design tokens
- GSAP for advanced animations
- Next.js Image or appropriate responsive-image handling
- Accessible Radix-based primitives where helpful
- A lightweight content data layer that can later connect to a CMS

Use Motion only when it serves a distinct need. Avoid unnecessary duplicate animation libraries.

Use server-rendered or statically generated pages wherever possible for SEO.

Use client components selectively for interactive experiences.

Do not require a Webflow runtime.

The project should be independently deployable.

## 5. Sitemap and routes

Build the following page structure:

- `/` — Homepage
- `/work` — Portfolio overview
- `/work/[slug]` — Individual project detail
- `/services` — All services
- `/services/video-production` — Video production
- `/services/photography` — Photography
- `/about` — About the studio
- `/process` — How we work
- `/pricing` — Pricing information
- `/creative-training` — Creative training courses
- `/contact` — Contact and enquiry form
- `/journal` — Insights and articles, if content exists
- `/journal/[slug]` — Individual article
- `/privacy-policy`
- `/cookie-policy`
- `/404` or framework-equivalent not-found route

Preserve or redirect old URLs if replacing an existing production website.

Do not publish empty sections or fabricate articles just to populate a page.

## 6. Homepage specifications

### Section 1: Header and navigation

Create a polished, responsive navigation based on Lumifya.

Desktop:

- Pocket Creatives brand/logo on the left.
- Main navigation: Work, Services, About, Process.
- Contact/Start a Project CTA on the right.
- Services dropdown with Video Production and Photography.
- Subtle sticky or scroll-aware behaviour if appropriate to the reference.

Mobile:

- Clean menu trigger.
- Full navigation accessible by keyboard and touch.
- Smooth opening and closing transition.
- Clearly visible contact CTA.
- No body scroll leaking behind the open menu.

Use proper accessibility semantics.

### Section 2: Cinematic hero

The hero is the most important element.

Suggested headline:

**Big ideas. Beautifully captured.**

Suggested supporting copy:

We're a London-based creative production team making professional films and photography that bring brands, people and stories to life.

Primary CTA: **Explore Our Work**

Secondary CTA: **Start a Project**

Design requirements:

- Match Lumifya's hero typography and composition.
- Strong editorial layout.
- Make real Pocket Creatives media the visual focal point.
- Use the agency's showreel or a selection of project clips where available.
- Consider a cinematic video background or integrated showcase if it fits the reference.
- Implement an image poster fallback.
- Respect reduced-motion preferences.
- Do not autoplay unmuted audio.
- Keep text legible against moving footage.
- Avoid placing a large block of explanatory text above the work.

### Section 3: Client trust

Headline concept:

**Good company. Great collaborations.**

Display selected verified client names/logos from Pocket Creatives' existing site.

Potential existing portfolio references include:

- The Telegraph
- Samsung
- realme
- Philips
- Rightmove

Verify the permitted use of logos and the agency's actual relationship to each client.

Use the Lumifya visual style for the client-logo arrangement.

Avoid artificial trust numbers.

### Section 4: Featured work

Headline:

**The work speaks for itself.**

Display four to six standout projects.

Use verified Pocket Creatives examples, including projects such as:

- California Walnuts Christmas TV Ad
- Samsung-related production
- Rightmove Believe It campaign
- The Telegraph STEM Awards
- Relevant food, product, beauty or event photography work

Verify exact project titles, assets and descriptions.

Each project card should support:

- Large media preview.
- Project name.
- Content type or service category.
- Client name where verified.
- Hover animation.
- Clear link to project details.
- Responsive image/video presentation.

Use Lumifya-inspired layouts that allow some projects to feature larger than others.

Make the overall gallery visually engaging and well curated.

CTA: **View All Projects**

### Section 5: Services

Headline:

**Everything you need to make an impact.**

Create two dominant service panels:

**Video Production**

Concept, planning, filming and editing for brands, campaigns, products, events and businesses.

**Photography**

Commercial, product, food, beauty, fashion, event and people photography.

Each service panel must include:

- Strong original photography or video.
- A short introduction.
- Supporting service keywords.
- Clear learn-more action.
- Hover treatment based on Lumifya.

A smaller secondary treatment can introduce Creative Training or ongoing production support.

Do not present unverified services as established offerings.

### Section 6: About Pocket Creatives

Headline:

**Small team. Big production thinking.**

Explain the core agency proposition:

High-quality creative production with the attentiveness, flexibility and personal service of a smaller agency.

Use actual team or studio imagery.

Present a concise introduction rather than a long corporate biography.

Link to the full About page.

### Section 7: How we work

Headline:

**From first idea to final frame.**

Display four production stages:

1. Discover — Understand the brief, audience and goals.
2. Plan — Develop the concept, production plan and requirements.
3. Produce — Capture the footage and photography.
4. Deliver — Edit, refine and prepare final assets.

Use a distinctive visual timeline or interactive section inspired by Lumifya.

The process copy should be verified and expanded using Pocket Creatives' current process page.

### Section 8: Testimonials

Headline:

**Kind words. Real collaborations.**

Use genuine testimonials sourced from Pocket Creatives.

Potential verified sources include client testimonials attributed to The Telegraph, realme, Yop and Tom, and Philips.

Preserve the exact meaning and attribution.

Build an elegant testimonial presentation with optional manual slider controls.

Avoid autoplay that prevents users from reading.

### Section 9: Why Pocket Creatives

Introduce the agency's advantages through concise editorial blocks:

- A dedicated team behind every project.
- Clear communication.
- Consistent creative quality.
- Flexible production support.
- Personal client relationships.

The content should reflect the agency's real positioning, not unsupported marketing claims.

### Section 10: Final CTA

Create a visually memorable closing section.

Headline:

**Let's make something worth watching.**

Supporting copy:

Have a project in mind? Tell us what you're working on, and we'll help bring it to life.

CTA: **Start a Project**

Use a strong colour treatment, oversized typography and distinctive interaction based on Lumifya.

### Section 11: Footer

Include:

- Pocket Creatives logo.
- Short agency description.
- Services and navigation links.
- Verified business email.
- Verified phone number.
- London office/studio details.
- Verified social profiles.
- Privacy and cookies links.
- Company legal details where required.
- Copyright with the current year.

Avoid placeholder social URLs.

## 7. Portfolio page

This page must be a major part of the website.

It should allow potential clients to assess the quality and range of Pocket Creatives' work quickly.

### Design

- Large portfolio introduction.
- Responsive project grid with editorial variation.
- Photography and video represented equally.
- Consistent project title and category labels.
- Subtle image zoom or reveal on hover.
- Video previews where appropriate.
- Clear project detail links.

### Filters

Provide accessible filters:

- All Work
- Video
- Photography
- Commercials & Campaigns
- Products
- Food & Drink
- Events
- People & Portraits

Filters should only appear when meaningful content exists in the category.

Filters must work without reloading the page.

Support keyboard navigation and visible focus styles.

### Individual project pages

Each project should have:

- Project title.
- Client name, if verified.
- Category.
- Large hero image or video.
- Short project introduction.
- The brief, if documented.
- The creative approach, if documented.
- Deliverables.
- Gallery of final images/videos.
- Optional verified results.
- Related projects.
- CTA to enquire about similar work.

Do not fabricate commercial results, performance statistics, production budgets or client quotes.

Where detailed case-study information is unavailable, use a simpler but polished project gallery.

## 8. Services pages

### Video Production

Create a complete dedicated landing page.

Content areas:

- Hero with relevant showreel.
- Overview of the agency's video production offer.
- Brand and promotional videos.
- Commercials and campaign production.
- Product videos.
- Corporate and business videos.
- Event filming.
- Social media and digital video.
- Creative planning and pre-production.
- Filming.
- Editing and post-production.
- Relevant projects.
- Production process.
- FAQs.
- Enquiry CTA.

Only include services confirmed by the source website or agency.

Use sections that alternate text and visual media.

Avoid repetitive card grids.

### Photography

Create a dedicated landing page using real photographic work.

Cover supported categories including:

- Product and e-commerce photography.
- Food and drink.
- Beauty.
- Fashion.
- Events.
- People and corporate portraits.
- Jewellery.
- Other documented specialties.

Show genuine images for each category where possible.

Use a visually rich gallery, minimal copy and clear enquiry actions.

### Creative Training

Retain Pocket Creatives' existing training offering.

Research the actual available courses, training formats and booking process before implementation.

Do not invent course prices, dates or qualifications.

## 9. About page

Build an editorial, photography-rich About page.

Suggested sections:

- Large introductory headline.
- Agency story.
- What makes Pocket Creatives different.
- Real team photographs and verified biographies.
- Studio and behind-the-scenes imagery.
- Values and production philosophy.
- Working relationship with clients.
- Team or studio showreel.
- Final enquiry CTA.

Preserve the genuine identity of the agency.

The website should feel human, not like a faceless production company.

## 10. Process page

Create a more detailed explanation of the full production workflow.

Use the existing How We Work content as the factual foundation.

Potential stages:

- Initial conversation.
- Creative brief and scope.
- Concept and planning.
- Pre-production.
- Shoot or production.
- Editing and post-production.
- Review and delivery.

Present these through a visually interesting editorial timeline.

Add related behind-the-scenes content where it exists.

## 11. Pricing page

Pocket Creatives already provides public guidance about project pricing.

Preserve the transparency but do not invent fixed packages.

Present:

- An introduction to how pricing works.
- Typical project ranges, verified from the latest approved source.
- Factors affecting production costs.
- Photography versus video production considerations.
- What may be included.
- Options for smaller and larger productions.
- Enquiry CTA.

Important: the current website contains differing ranges across pages. Flag this inconsistency and request one approved set of figures before publishing.

Avoid displaying contradictory pricing across different pages.

## 12. Contact page

Create a premium but functional project enquiry experience.

### Main contact form

Required:

- Name.
- Email.
- Service required.
- Project description.

Optional:

- Company/brand name.
- Phone number.
- Approximate budget.
- Desired timeframe.
- Website URL.

Service choices:

- Video Production.
- Photography.
- Both.
- Creative Training.
- Other.

Budget options must be agreed with the agency.

### Form functionality

- Client-side and server-side validation.
- Accessible inline errors.
- Spam protection.
- Proper success and failure feedback.
- Secure server-side email delivery.
- No API secrets in the client bundle.
- Privacy information and appropriate consent handling.
- No false success messages.
- Reliable notification delivery to the agency.

Use an email provider such as Resend or another service appropriate to the deployment environment, after configuration.

Do not implement a form that only logs submissions to the browser console.

Provide clear configuration instructions for the required email service.

Also display the agency's verified phone, email and location information.

## 13. Animation and interactions

Use Lumifya as the animation reference.

Implement carefully selected interactions:

### Page entrances

- Subtle hero introduction.
- Controlled heading reveals.
- Image reveals where appropriate.
- Smooth section transitions.

### Portfolio interactions

- Media zoom on hover.
- Image-to-video preview where appropriate.
- Elegant category filtering.
- Responsive hover and tap behaviour.
- Media lightbox support when useful.

### Navigation

- Smooth but quick menu transitions.
- Clear active navigation states.
- Accessible dropdown interaction.
- Appropriate header behaviour on scroll.

### Scroll behaviour

- Use GSAP and ScrollTrigger when justified.
- Subtle parallax on selected media.
- Reveal animations for important editorial content.
- Avoid excessive pinned sections or scroll hijacking.

### Animation constraints

- Respect `prefers-reduced-motion`.
- Avoid animating large layout properties unnecessarily.
- Use transforms and opacity where practical.
- Clean up GSAP contexts and scroll triggers.
- Avoid cumulative layout shift.
- Make all content available even when animations cannot run.

Animation must never interfere with enquiry conversion, reading or accessibility.

## 14. Responsive design

Design explicitly for:

- 360px mobile.
- 390px mobile.
- 768px tablet.
- 1024px laptop/tablet.
- 1440px desktop.
- 1920px large desktop.

Test intermediate widths.

### Mobile priorities

- Strong hero headline without clipping.
- Readable typography.
- Good media crops.
- Touch-friendly interactions.
- Full-width project imagery where appropriate.
- Simple, effective navigation.
- Accessible forms.
- No horizontal overflow.
- No hover-only functionality.
- No unnecessarily heavy background video.

Match the mobile experience of the reference template as closely as practical.

## 15. Content and media strategy

The imagery is a critical part of this project.

Source visual assets from Pocket Creatives' existing publicly accessible portfolio and approved project files.

Create a structured media inventory with:

- Filename or source URL.
- Project name.
- Media type.
- Dimensions.
- Aspect ratio.
- Intended usage.
- Alt-text description.
- Rights/approval status.
- Optimisation status.

Do not assume every image or video discovered online is licensed for reuse.

Prefer approved original files rather than copying low-resolution thumbnails.

Use local optimised assets where rights permit.

### Photography

- Responsive image sizes.
- WebP or AVIF where appropriate.
- Sensible image quality.
- Proper aspect ratios.
- Lazy-load below-the-fold images.
- Avoid stretching or distortion.
- Descriptive alt text for meaningful images.

### Video

- Prefer approved source files or existing Vimeo embeds.
- Lazy-load third-party video embeds.
- Use poster images.
- Respect mute/autoplay restrictions.
- Do not load numerous full-resolution videos on initial page load.
- Use accessible controls where required.

If approved media is unavailable, use clearly labelled development placeholders and maintain a missing-assets checklist.

## 16. SEO preservation and improvements

The website must retain Pocket Creatives' search visibility.

### Technical SEO

- Unique page titles.
- Unique meta descriptions.
- Canonical tags.
- Proper H1/H2/H3 hierarchy.
- XML sitemap.
- Robots.txt.
- Open Graph and social metadata.
- Accessible semantic HTML.
- Clean URL structure.
- Structured data where factually appropriate.
- Correct redirects from old URLs.
- No accidental indexing of staging.
- Correct production domain configuration.

### Local SEO

Naturally target relevant search intent including:

- Video production company London.
- Photography agency London.
- Commercial photography London.
- Product photography London.
- Corporate video production London.
- Event video production London.

Do not keyword-stuff headings or duplicate sections simply for search engines.

### Migration

Create an old-to-new URL mapping before deployment.

All removed or changed URLs with meaningful traffic or backlinks should be redirected appropriately.

Preserve important existing service pages unless consolidation has a clear SEO justification.

## 17. Performance and accessibility

Target the following where realistically achievable:

- Lighthouse Performance: 90+ for representative pages.
- Lighthouse Accessibility: 95+.
- Lighthouse SEO: 95+.
- LCP: 2.5 seconds or less at the 75th percentile.
- CLS: 0.1 or less.
- INP: 200ms or less.

These are targets, not guaranteed scores.

Avoid sacrificing the media-rich creative presentation unnecessarily, but be deliberate about media loading.

Accessibility requirements:

- WCAG 2.2 AA target.
- Correct semantic landmarks.
- Visible keyboard focus.
- Keyboard-operable navigation.
- Adequate text contrast.
- Accessible form labels.
- Appropriate heading hierarchy.
- Reduced-motion support.
- Descriptive media controls.
- Proper alt text.

## 18. Data and component architecture

Build reusable components including:

- SiteHeader.
- MobileNavigation.
- SiteFooter.
- PageHero.
- VideoShowreel.
- SectionHeading.
- AnimatedHeading.
- PrimaryButton.
- ProjectCard.
- ProjectGrid.
- ProjectFilters.
- ProjectGallery.
- VideoLightbox.
- ServicePanel.
- ClientLogoStrip.
- TestimonialSection.
- ProcessTimeline.
- ContactCTA.
- ProjectEnquiryForm.
- FAQAccordion.
- Breadcrumbs.

Maintain data separately from presentation.

Suggested structured content collections:

- Projects.
- Services.
- Team Members.
- Testimonials.
- Clients.
- FAQs.
- Journal Articles.

Use TypeScript interfaces or schemas for content validation.

Initially a typed local content layer is acceptable. Design it so a CMS can be added later without rewriting all components.

Do not implement Webflow eCommerce unless a genuine commercial requirement is identified.

## 19. Suggested project structure

Adapt this to the actual repository:

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    work/
      page.tsx
      [slug]/page.tsx
    services/
      page.tsx
      video-production/page.tsx
      photography/page.tsx
    about/page.tsx
    process/page.tsx
    pricing/page.tsx
    creative-training/page.tsx
    contact/page.tsx
    journal/
      page.tsx
      [slug]/page.tsx
    privacy-policy/page.tsx
    cookie-policy/page.tsx
    not-found.tsx
  components/
    layout/
    navigation/
    ui/
    home/
    portfolio/
    services/
    forms/
    animation/
  content/
    projects.ts
    services.ts
    testimonials.ts
    team.ts
    faqs.ts
  lib/
    seo.ts
    media.ts
    utils.ts
    validation.ts
  styles/
    tokens.css
public/
  images/
  videos/
  logos/
docs/
```

## 20. Implementation phases

### Phase 1 — Research and audit

- Inspect both websites.
- Document Lumifya design details.
- Audit Pocket Creatives' content.
- Inventory approved media.
- Record SEO routes.
- Establish site architecture.

Deliverable: reference documentation and design-system specification.

### Phase 2 — Project foundation

- Set up or inspect application architecture.
- Configure typography and design tokens.
- Build global layout.
- Implement responsive navigation and footer.
- Establish UI and animation components.

Deliverable: functioning shared design foundation.

### Phase 3 — Homepage

- Build complete homepage.
- Use genuine Pocket Creatives media.
- Implement hero, portfolio, services, credibility and CTA sections.
- Refine animation and responsiveness.

Deliverable: complete polished homepage, not a wireframe.

### Phase 4 — Portfolio

- Build filterable portfolio.
- Implement project detail routes.
- Add galleries and video presentation.
- Connect all project cards to working pages.

Deliverable: functional portfolio experience.

### Phase 5 — Core business pages

- Services.
- Video Production.
- Photography.
- About.
- Process.
- Contact.

Deliverable: complete primary marketing website.

### Phase 6 — Supporting pages

- Pricing.
- Creative Training.
- Journal if real content is available.
- Privacy and cookie pages.
- Not-found page.

Deliverable: comprehensive supporting site.

### Phase 7 — QA and optimisation

- Test navigation.
- Test forms.
- Test responsive layouts.
- Test all portfolio links.
- Check animations.
- Check image loading.
- Validate SEO.
- Test accessibility.
- Run Lighthouse.
- Fix visual and functional defects.

Deliverable: release-ready build and QA report.

## 21. Testing requirements

Use available tooling such as Playwright and Lighthouse to verify the website.

Include:

- Homepage smoke tests.
- Navigation tests.
- Mobile menu tests.
- Portfolio filter tests.
- Project route tests.
- Contact form validation tests.
- Accessibility checks.
- Responsive visual tests.
- Link checking.
- Metadata verification.

Create screenshots at representative desktop and mobile sizes.

Compare screenshots against Lumifya's actual rendered design.

Correct discrepancies in:

- Colour.
- Typography.
- Spacing.
- Layout.
- Image composition.
- Component styling.
- Navigation.
- Interaction behaviour.

Do not claim a pixel-perfect match without an actual visual comparison.

## 22. Acceptance criteria

The redesign is complete only when:

1. The visual identity clearly follows Lumifya's verified design language.
2. Pocket Creatives' real services and brand are accurately represented.
3. The homepage is complete and visually compelling.
4. The portfolio contains authentic projects and functional detail pages.
5. Main services have dedicated landing pages.
6. All published navigation links work.
7. The contact form submits to a configured working endpoint.
8. Desktop and mobile designs are polished.
9. Animations work without harming accessibility or performance.
10. No unrelated demo branding or placeholder marketing claims remain.
11. SEO-critical information is preserved.
12. The build passes linting, type checks and relevant tests.
13. No credentials or secrets are committed.
14. A deployment and configuration guide is supplied.

## 23. Final deliverables

Provide:

- Complete implementation source code.
- Responsive design system.
- Finished website pages.
- Reusable component library.
- Content and media inventories.
- SEO migration mapping.
- Screenshots for mobile and desktop.
- Testing report.
- Environment variable example.
- README with local development instructions.
- Deployment instructions.
- List of unresolved assets or factual approvals.

## 24. Important working instructions

Do not stop after creating a basic homepage.

Do not generate an impressive-looking first screen while leaving the remaining pages unfinished.

Do not replace the Lumifya reference with a generic design interpretation.

Do not invent client case studies, reviews, statistics, team members or pricing.

Do not copy unlicensed template assets or protected content.

When verified source material is unavailable, record the limitation rather than pretending it was inspected.

Implement the work in logical phases, check and test each phase, and continue through the full scope.

Prioritise visual fidelity, authentic creative work, polished interaction and a production-ready result.

**The intended result is a premium, portfolio-led website that feels like Lumifya visually but unmistakably belongs to Pocket Creatives.**
