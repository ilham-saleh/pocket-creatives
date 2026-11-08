import Link from "next/link";
import { Brand } from "./brand";
import { destinations, serviceNavigation, site, socials } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <Brand />
            <p className="footer-description">
              Video production and photography.
              <br />
              Made with care, in London.
            </p>
          </div>
          <address className="footer-contact">
            <a href={`mailto:${site.email}`} className="footer-email">
              {site.email}
            </a>
            <a href={site.phoneHref}>{site.phone}</a>
            <span>{site.location}</span>
          </address>
        </div>
        <div className="footer-bottom-grid">
          <p className="footer-statement">
            Big ideas.
            <br />
            Beautifully captured.
          </p>
          <nav aria-label="Footer navigation" className="footer-links">
            <div>
              <p>Explore</p>
              {[
                destinations.work,
                destinations.about,
                destinations.process,
                destinations.journal,
                destinations.contact,
              ].map((item) => (
                <Link key={item.path} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <p>Services</p>
              {[
                ...serviceNavigation,
                destinations.training,
                destinations.pricing,
              ].map((item) => (
                <Link key={item.path} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <p>Follow</p>
              {socials.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="footer-legal">
          <p>
            © {new Date().getFullYear()} {site.name}. Company no.{" "}
            {site.companyNumber}.
          </p>
          <div>
            <Link href={destinations.privacy.href}>Privacy</Link>
            <Link href={destinations.cookies.href}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
