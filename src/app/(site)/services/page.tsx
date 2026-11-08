import Link from "next/link";
import {
  PageFrame,
  PageHero,
  PageSection,
  PhotoFrame,
  ContactCTA,
  PageFAQ,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/content/services";
export const metadata = pageMetadata(
  "Video Production & Photography Services",
  "Creative planning, video production and commercial photography in London. Explore the Pocket Creatives services.",
  "/services",
);
export default function ServicesPage() {
  return (
    <PageFrame>
      <PageHero title="Services" photo={photos.filming} />
      <section
        className="site-container service-index"
        aria-label="Our services"
      >
        {services.map((service, i) => (
          <article className="service-row" key={service.slug}>
            <span className="service-number">
              <b>/</b>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 data-page-reveal>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </h2>
              <p>{service.summary}</p>
              <div className="service-row-body">
                <PhotoFrame photo={service.photo} />
                <div>
                  <ol className="capability-list">
                    {service.capabilities.map((text, j) => (
                      <li key={text}>
                        <span>({String(j + 1).padStart(2, "0")})</span> {text}
                      </li>
                    ))}
                  </ol>
                  <PrimaryButton href={`/services/${service.slug}`}>
                    Explore{" "}
                    {service.title === "Photography" ? "Photography" : "Video"}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
      <PageSection label="Learn with us" number="03">
        <div className="page-columns">
          <h2 data-page-reveal>
            Build your
            <br />
            creative confidence.
          </h2>
          <div className="page-prose">
            <p>
              Bespoke, in-person, one-to-one training in photography, filming
              and editing. A day shaped around what you want to learn.
            </p>
            <PrimaryButton href="/creative-training">
              Creative Training
            </PrimaryButton>
          </div>
        </div>
      </PageSection>
      <PageFAQ />
      <ContactCTA />
    </PageFrame>
  );
}
