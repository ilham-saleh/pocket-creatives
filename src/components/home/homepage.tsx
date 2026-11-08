import Image from "next/image";
import Link from "next/link";
import {
  photos,
  clients,
  homeServices,
  featuredWork,
  processSteps,
  testimonials,
  homeFAQs,
  journalArticles,
} from "@/content/home";
import { destinations } from "@/content/site";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionHeading, SectionLabel } from "@/components/ui/section-heading";
import { StarIcon, ArrowIcon } from "@/components/ui/icons";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { HomePhoto } from "./home-photo";
import { Showreel } from "./showreel";
import { HomeMotion } from "./home-motion";

function Hero() {
  return (
    <section
      className="home-hero"
      aria-labelledby="hero-heading"
      data-section="hero"
    >
      <HomePhoto
        photo={photos.hero}
        eager
        decorative
        className="hero-background"
      />
      <div className="hero-tint" />
      <div className="hero-content site-container">
        <div className="hero-intro">
          <p className="hero-eyebrow">We are,</p>
          <h1 id="hero-heading" aria-label="Big ideas. Beautifully captured.">
            <span>
              Big ideas.
              <br />
              Beautifully
            </span>
            <br />
            <span className="hero-phrases" aria-hidden="true">
              <span>captured.</span>
              <span>filmed.</span>
              <span>photographed.</span>
            </span>
          </h1>
          <div className="hero-actions">
            <PrimaryButton href="#work">Explore Our Work</PrimaryButton>
            <a className="hero-contact" href={destinations.contact.href}>
              Start a Project <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="hero-services">
          <p>Video production & photography</p>
          <div className="hero-service-window">
            <ul>
              {[
                "Brand films",
                "Photography",
                "Commercials",
                "Events",
                "Creative training",
              ].map((name, i) => (
                <li key={name}>
                  <span>({String(i + 1).padStart(2, "0")})</span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-wordmark" aria-label="Pocket Creatives">
            <span>POCKET</span>
            <span className="hero-wordmark-caption">CREATIVES · LONDON</span>
          </div>
          <div className="hero-thumbnails" aria-label="A glimpse of our work">
            <div className="hero-thumbnail-track">
              {[photos.beautyProduct, photos.food, photos.watch].map(
                (photo, i) => (
                  <a
                    key={photo.alt}
                    href={
                      i === 2
                        ? "#work"
                        : `#project-${featuredWork[i === 0 ? 1 : 3].id}`
                    }
                    aria-label={
                      i === 0
                        ? "Explore beauty photography"
                        : i === 1
                          ? "Explore food photography"
                          : "Explore selected work"
                    }
                  >
                    <HomePhoto photo={photo} sizes="170px" decorative eager />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientStrip() {
  return (
    <section
      className="client-strip site-container"
      aria-label="Selected client collaborations"
      data-section="clients"
    >
      <p>Good company. Great collaborations.</p>
      <ul>
        {clients.map((client) => (
          <li key={client}>{client}</li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <div className="about-pin-space">
      <section
        className="home-about"
        id="about"
        tabIndex={-1}
        aria-labelledby="about-heading"
        data-section="about"
      >
        <HomePhoto photo={photos.filming} decorative />
        <div className="about-shade" />
        <div className="site-container about-content">
          <SectionLabel label="About us" number="01" />
          <h2 id="about-heading">
            Small team.
            <br />
            Big production thinking.
            <br />
            <span>
              Films and photography, made with care from first idea to final
              frame.
            </span>
          </h2>
          <a className="about-circle" href={destinations.about.href}>
            About us <ArrowIcon />
          </a>
          <div className="about-floating about-floating--one">
            <HomePhoto
              photo={photos.about}
              sizes="(max-width: 767px) 40vw, 320px"
            />
          </div>
          <div className="about-floating about-floating--two">
            <HomePhoto
              photo={photos.studio}
              sizes="(max-width: 767px) 40vw, 320px"
            />
          </div>
          <div
            className="about-floating about-floating--three"
            aria-hidden="true"
          >
            <HomePhoto
              photo={photos.beautyProduct}
              sizes="(max-width: 767px) 42vw, 300px"
              decorative
            />
          </div>
          <p className="about-summary">
            We’re a London-based creative production team making films and
            photography for brands, people and stories. A personal approach,
            with the production thinking to bring it all together.
          </p>
        </div>
      </section>
    </div>
  );
}

function Benefits() {
  const items = [
    {
      title: "A dedicated team",
      copy: "People who get to know your brief and care about the details.",
      photo: photos.planning,
    },
    {
      title: "Clear communication",
      copy: "A collaborative process, from the first conversation to final delivery.",
      photo: photos.studio,
    },
    {
      title: "Room to be flexible",
      copy: "Creative production shaped around what your project needs.",
      photo: photos.boulder,
    },
  ];
  return (
    <section
      className="home-section site-container"
      aria-labelledby="benefits-heading"
      data-section="benefits"
    >
      <SectionLabel label="Why Pocket?" number="02" />
      <div className="section-title-row">
        <SectionHeading id="benefits-heading">
          Big on the little things.
        </SectionHeading>
      </div>
      <div className="benefit-grid">
        {items.map((item, i) => (
          <article className="benefit-card" key={item.title}>
            <HomePhoto
              photo={item.photo}
              sizes="(max-width: 767px) 100vw, 33vw"
              decorative
            />
            <div className="benefit-shade" />
            <div className="benefit-copy">
              <h3>
                <StarIcon />
                {item.title}
                <StarIcon />
              </h3>
              <p>{item.copy}</p>
            </div>
            <div className="benefit-bottom">
              <span>/0{i + 1}</span>
              <span>Pocket Creatives</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      className="home-services home-section"
      id="services"
      tabIndex={-1}
      aria-labelledby="services-heading"
      data-section="services"
    >
      <div className="site-container">
        <SectionLabel label="Our services" number="03" />
        <h2 className="sr-only" id="services-heading">
          Video production and photography
        </h2>
      </div>
      <div className="services-pin-space">
        <div className="services-scene">
          {homeServices.map((service) => (
            <article
              className="service-stage"
              key={service.id}
              id={`service-${service.id}`}
            >
              <div className="service-marquee" aria-hidden="true">
                <span>{service.title}</span>
                <StarIcon />
                <span>{service.title}</span>
                <StarIcon />
                <span>{service.title}</span>
              </div>
              <div className="service-center">
                <a
                  href={
                    service.id === "video"
                      ? destinations.video.href
                      : destinations.photography.href
                  }
                  className="service-image"
                  aria-label={`Explore ${service.title}`}
                >
                  <HomePhoto
                    photo={service.photo}
                    sizes="(max-width: 767px) 80vw, 448px"
                  />
                  <span className="service-image-link">
                    <ArrowIcon />
                  </span>
                </a>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>
                      <StarIcon />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="service-training site-container">
        <p>Want to develop your own creative skills?</p>
        <PrimaryButton href={destinations.training.href}>
          Explore Creative Training
        </PrimaryButton>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      className="home-section site-container"
      id="work"
      tabIndex={-1}
      aria-labelledby="work-heading"
      data-section="work"
    >
      <SectionLabel label="Selected work" number="04" />
      <div className="section-title-row">
        <SectionHeading id="work-heading">
          The work speaks
          <br />
          for itself.
        </SectionHeading>
        <p className="paragraph-large">
          Films with a story.
          <br />
          Photography with a point of view.
        </p>
      </div>
      <div className="work-stages">
        {featuredWork.map((project) => (
          <div
            className="work-step"
            key={project.id}
            id={`project-${project.id}`}
            tabIndex={-1}
          >
            <div className="work-pin-space">
              <div className="work-pin">
                <article
                  className={`work-stage ${project.portrait ? "work-stage--portrait" : ""}`}
                  aria-labelledby={`title-${project.id}`}
                >
                  <HomePhoto photo={project.photo} className="work-image" />
                  <div className="work-shade" />
                  <div className="work-content">
                    <p className="work-category">{project.category}</p>
                    <nav
                      className="work-numbers"
                      aria-label={`Selected work navigation — ${project.title}`}
                    >
                      {featuredWork.map((item) => (
                        <a
                          key={item.id}
                          href={`#project-${item.id}`}
                          aria-current={
                            project.id === item.id ? "location" : undefined
                          }
                          aria-label={`${item.number} — View ${item.title}`}
                        >
                          {item.number}
                        </a>
                      ))}
                    </nav>
                    <div className="work-description">
                      <div>
                        <h3 id={`title-${project.id}`}>{project.title}</h3>
                        <p>{project.subtitle}</p>
                      </div>
                      <div className="work-note">
                        <p>{project.description}</p>
                        <PrimaryButton href={`/work/${project.id}`}>
                          View Project
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="work-more">
        <p>More stories. More perspectives.</p>
        <PrimaryButton href={destinations.photography.href}>
          View Photography
        </PrimaryButton>
        <PrimaryButton href={destinations.video.href}>View Films</PrimaryButton>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      className="home-section site-container"
      id="process"
      tabIndex={-1}
      aria-labelledby="process-heading"
      data-section="process"
    >
      <SectionLabel label="The process" number="05" />
      <div className="section-title-row section-title-row--right">
        <SectionHeading id="process-heading">
          From first idea
          <br />
          to final frame.
        </SectionHeading>
      </div>
      <div className="process-grid">
        {processSteps.map((step, i) => (
          <details
            key={step.title}
            name="production-process"
            className="process-panel"
            open={i === 0}
          >
            <summary>
              <span className="process-step-name">
                <StarIcon />
                {step.title}
              </span>
              <span className="process-step-number">/0{i + 1}</span>
              <span className="process-toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="process-detail">
              <Image
                src={step.photo.image}
                alt=""
                sizes="(max-width: 767px) 100vw, 40vw"
                className="process-photo"
                loading="lazy"
              />
              <div className="process-shade" />
              <p>{step.description}</p>
            </div>
          </details>
        ))}
      </div>
      <div className="process-more">
        <Link href={destinations.process.href}>
          More about how we work <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

function Reel() {
  return (
    <section
      className="home-section site-container"
      id="reel"
      aria-labelledby="reel-heading"
      data-section="reel"
    >
      <SectionLabel label="In motion" number="06" />
      <h2 id="reel-heading" className="sr-only">
        Meet Pocket Creatives in 73 seconds
      </h2>
      <div className="reel-pin-space">
        <div className="reel-stage">
          <Showreel photo={photos.reel} />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const lead = testimonials[0];
  return (
    <section
      className="home-section site-container"
      aria-labelledby="testimonials-heading"
      data-section="testimonials"
    >
      <SectionLabel label="Kind words" number="07" />
      <div className="section-title-row">
        <SectionHeading id="testimonials-heading">
          Real collaborations.
          <br />
          Good company.
        </SectionHeading>
        <PrimaryButton href={destinations.contact.href}>
          Let’s Talk
        </PrimaryButton>
      </div>
      <div className="testimonial-feature">
        <figure className="featured-quote">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>…{lead.quote}</blockquote>
          <figcaption>
            <strong>{lead.name}</strong>
            <span>{lead.company}</span>
          </figcaption>
        </figure>
        <div className="testimonial-image">
          <HomePhoto
            photo={photos.planning}
            sizes="(max-width: 767px) 100vw, 55vw"
          />
        </div>
      </div>
      <div className="testimonial-grid">
        {testimonials.slice(1).map((quote) => (
          <figure className="testimonial-card" key={quote.name}>
            <StarIcon />
            <blockquote>“{quote.quote}…”</blockquote>
            <figcaption>
              <strong>{quote.name}</strong>
              <span>{quote.company}</span>
            </figcaption>
          </figure>
        ))}
        <div className="testimonial-card testimonial-more">
          <p>
            There’s more
            <br />
            where that came from.
          </p>
          <a href="https://www.pocketcreatives.co.uk/testimonials/">
            Read client testimonials <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section
      className="home-section site-container"
      aria-labelledby="faq-heading"
      data-section="faq"
    >
      <SectionLabel label="FAQs" number="08" />
      <div className="home-faq">
        <div>
          <SectionHeading id="faq-heading">
            A few things
            <br />
            you might ask.
          </SectionHeading>
          <p className="paragraph-large">
            Every brief starts with a conversation.
            <br />
            Here are a few useful places to begin.
          </p>
          <PrimaryButton href={destinations.contact.href}>
            Get in Touch
          </PrimaryButton>
        </div>
        <FAQAccordion items={homeFAQs} />
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section
      className="home-section site-container"
      aria-labelledby="journal-heading"
      data-section="journal"
    >
      <SectionLabel label="Journal" number="09" />
      <div className="section-title-row">
        <SectionHeading id="journal-heading">
          Notes from the studio.
        </SectionHeading>
        <PrimaryButton href={destinations.journal.href}>
          Explore the Journal
        </PrimaryButton>
      </div>
      <div className="journal-grid">
        {journalArticles.map((article) => (
          <article className="journal-card" key={article.href}>
            <a
              href={
                article.href.includes("photography-and-video-agency-london")
                  ? "/journal/photography-and-video-agency-london"
                  : article.href
              }
            >
              <div className="journal-image">
                <HomePhoto
                  photo={article.photo}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  decorative
                />
                <span>
                  <ArrowIcon />
                </span>
              </div>
              <h3>{article.title}</h3>
            </a>
            <p>{article.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <div className="cta-pin-space">
      <section
        className="home-cta home-section"
        aria-labelledby="cta-heading"
        data-section="cta"
      >
        <div className="site-container">
          <SectionLabel label="Your next project" number="10" />
          <div className="cta-copy">
            <SectionHeading id="cta-heading" align="center">
              Let’s make something
              <br />
              worth watching.
            </SectionHeading>
            <p>
              Have a project in mind? Tell us what you’re working on,
              <br className="desktop-break" /> and we’ll help bring it to life.
            </p>
            <PrimaryButton href={destinations.contact.href}>
              Start a Project
            </PrimaryButton>
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
    </div>
  );
}

export function Homepage() {
  return (
    <HomeMotion>
      <Hero />
      <ClientStrip />
      <About />
      <Benefits />
      <Services />
      <Work />
      <Process />
      <Reel />
      <Testimonials />
      <Questions />
      <Journal />
      <ClosingCTA />
    </HomeMotion>
  );
}
