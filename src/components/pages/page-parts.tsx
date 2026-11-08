import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { HomePhoto } from "@/components/home/home-photo";
import { photos, homeFAQs, type HomePhoto as Photo } from "@/content/home";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionLabel } from "@/components/ui/section-heading";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PageMotion } from "./page-motion";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="inner-page">
      <PageMotion>{children}</PageMotion>
    </main>
  );
}
export function PageHero({ title, photo }: { title: string; photo: Photo }) {
  return (
    <header className="page-banner">
      <HomePhoto photo={photo} decorative eager />
      <div className="page-banner-shade" />
      <div className="site-container">
        <h1 data-page-reveal>{title}</h1>
      </div>
    </header>
  );
}
export function PageSection({
  label,
  number = "01",
  title,
  children,
  className = "",
}: {
  label: string;
  number?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`page-section site-container ${className}`}>
      <SectionLabel label={label} number={number} />
      {title && (
        <h2 className="heading-section" data-page-reveal>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
export function PhotoFrame({
  photo,
  className = "",
  eager = false,
}: {
  photo: Photo;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`page-photo ${className}`} data-page-parallax>
      <HomePhoto photo={photo} eager={eager} />
    </div>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function ContactCTA() {
  return (
    <section className="internal-cta">
      <div className="site-container">
        <SectionLabel label="Your next project" number="↗" />
        <div className="cta-copy">
          <h2 data-page-reveal>
            Let’s make something
            <br />
            worth watching.
          </h2>
          <p>
            Have a project in mind? Tell us what you’re working on,
            <br className="desktop-break" /> and we’ll help bring it to life.
          </p>
          <PrimaryButton href="/contact">Start a Project</PrimaryButton>
        </div>
      </div>
      <div className="cta-media-pin-space">
        <div className="cta-media-stage">
          <div className="cta-perspective" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <div className={`cta-slice cta-slice--${i}`} key={i}>
                <Image
                  src={photos.beautyProduct.image}
                  alt=""
                  sizes="100vw"
                  style={{ left: `${-i * 100}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function PageFAQ() {
  return (
    <PageSection label="Questions & answers" number="↗">
      <div className="page-columns page-faq">
        <div>
          <h2 data-page-reveal>
            A little more
            <br />
            clarity.
          </h2>
          <p>
            Start with the essentials. We’re here to talk through the details.
          </p>
        </div>
        <FAQAccordion items={homeFAQs} />
      </div>
    </PageSection>
  );
}
