import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionLabel, SectionHeading } from "@/components/ui/section-heading";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { destinations } from "@/content/site";
import { faqSchema } from "@/content/schemas";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Foundation review",
  robots: { index: false, follow: false },
};

const reviewQuestions = faqSchema.array().parse([
  {
    id: "scope",
    question: "What is included in this review?",
    answer:
      "The shared foundation: typography, colours, spacing, navigation, buttons, disclosure controls and footer. The homepage composition is built in Phase 3.",
  },
  {
    id: "navigation",
    question: "Where do the navigation links lead?",
    answer:
      "Work and Services open the sections on this review page. Other business links open Pocket Creatives’ existing website until their new pages are built. No enquiry is sent from this preview.",
  },
  {
    id: "motion",
    question: "How does reduced motion work?",
    answer:
      "Your device preference removes the drawer and button movement. All links and disclosure content remain usable. Homepage scroll animations are reserved for Phase 4.",
  },
]);

export default function FoundationPage() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_FOUNDATION_PREVIEW !== "true"
  )
    notFound();
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="site-container foundation-main"
    >
      <p className="review-label">
        Pocket Creatives / Phase 02 / Component review
      </p>
      <h1 className="review-title">The foundation.</h1>
      <div className="review-intro">
        <p className="paragraph-large">
          The shared visual language, ready for real stories. This private
          review brings together the measured Lumifya typography, colour and
          controls with Pocket Creatives’ identity.
        </p>
        <PrimaryButton href="#typography">Explore the system</PrimaryButton>
      </div>
      <nav className="review-index" aria-label="Component review sections">
        <a href="#typography">Typography & colour</a>
        <a href="#controls">Controls</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#disclosure">Disclosure</a>
      </nav>

      <section
        tabIndex={-1}
        className="review-section"
        id="typography"
        aria-labelledby="typography-title"
      >
        <SectionLabel label="Typography & colour" number="01" />
        <SectionHeading id="typography-title">
          Big ideas.
          <br />
          Beautifully captured.
        </SectionHeading>
        <div className="review-type-grid">
          <h3 className="heading-title">
            Small team.
            <br />
            Big production thinking.
          </h3>
          <div>
            <p>Inter Display for headings. Switzer for the everyday details.</p>
            <p className="paragraph-large">
              The larger paragraph treatment uses Geist: calm, readable and
              restrained. This specimen checks line height, tracking and font
              loading before the homepage is composed.
            </p>
            <span className="service-tag">Video Production</span>{" "}
            <span className="service-tag">Photography</span>
          </div>
        </div>
        <div className="review-swatches">
          {[
            { name: "Canvas", value: "#09090B", key: "canvas" },
            { name: "Surface", value: "#18181B", key: "surface" },
            { name: "Accent", value: "#FB4930", key: "accent" },
            { name: "Heading", value: "#F0F0F0", key: "heading" },
          ].map((swatch) => (
            <div
              key={swatch.key}
              className={`review-swatch review-swatch--${swatch.key}`}
            >
              <span>{swatch.name}</span>
              <span>{swatch.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        tabIndex={-1}
        className="review-section"
        id="controls"
        aria-labelledby="controls-title"
      >
        <SectionLabel label="Controls" number="02" />
        <SectionHeading id="controls-title">A clear next step.</SectionHeading>
        <div className="review-actions">
          <PrimaryButton href={destinations.contact.href}>
            Start a Project
          </PrimaryButton>
          <PrimaryButton href="#work">Explore Our Work</PrimaryButton>
          <PrimaryButton disabled>Unavailable</PrimaryButton>
        </div>
        <p className="review-note">
          Hover or focus the split controls. The arrow and label remain
          separate; a white layer moves across the label. Keyboard focus stays
          visible and reduced motion removes the transition.
        </p>
      </section>

      <section
        tabIndex={-1}
        className="review-section"
        id="services"
        aria-labelledby="services-title"
      >
        <SectionLabel label="Services / component specimens" number="03" />
        <SectionHeading id="services-title">
          Two ways to tell your story.
        </SectionHeading>
        <div className="review-service-grid">
          <article className="review-service">
            <h3 className="heading-title">Video Production</h3>
            <p className="paragraph-large">
              Concept, planning, filming and editing.
            </p>
            <PrimaryButton href={destinations.video.href}>
              Explore Video
            </PrimaryButton>
          </article>
          <article className="review-service">
            <h3 className="heading-title">Photography</h3>
            <p className="paragraph-large">
              Commercial, product, food, people and events.
            </p>
            <PrimaryButton href={destinations.photography.href}>
              Explore Photography
            </PrimaryButton>
          </article>
        </div>
        <p className="review-note">
          Surface, spacing and button specimens only. The reference’s staged
          service composition and genuine production media follow in the
          homepage phases.
        </p>
      </section>

      <section
        tabIndex={-1}
        className="review-section"
        id="work"
        aria-labelledby="work-title"
      >
        <SectionLabel label="Work / content preparation" number="04" />
        <SectionHeading id="work-title">Room for the real work.</SectionHeading>
        <div className="review-work">
          <p className="paragraph-large">
            The project and media schemas preserve source, approval and rights
            status. Project imagery enters the homepage in Phase 3 once
            selections are cleared; no demo projects are presented here.
          </p>
          <PrimaryButton href={destinations.photography.href}>
            View Existing Photography
          </PrimaryButton>
        </div>
      </section>

      <section
        tabIndex={-1}
        className="review-section"
        id="disclosure"
        aria-labelledby="disclosure-title"
      >
        <SectionLabel label="Disclosure" number="05" />
        <div className="review-type-grid">
          <SectionHeading id="disclosure-title">
            A little more detail.
          </SectionHeading>
          <FAQAccordion items={reviewQuestions} />
        </div>
      </section>
    </main>
  );
}
