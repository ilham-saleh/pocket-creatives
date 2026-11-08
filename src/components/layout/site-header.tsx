import { Brand } from "./brand";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { mainNavigation, serviceNavigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Brand />
        <SiteNavigation />
      </div>
      <noscript>
        <nav
          aria-label="Main navigation"
          className="site-container no-script-navigation"
        >
          {[...mainNavigation, ...serviceNavigation].map((item) => (
            <a key={item.path} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
