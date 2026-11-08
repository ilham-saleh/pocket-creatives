"use client";

import { useRef, useState, type CSSProperties } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/layout/brand";
import {
  mainNavigation,
  serviceNavigation,
  site,
  socials,
} from "@/content/site";

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const anchorDestination = useRef<string | null>(null);
  const close = () => setOpen(false);
  const followLink = (href: string) => {
    anchorDestination.current = href.startsWith(`${pathname}#`)
      ? href.split("#")[1]
      : null;
    close();
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="menu-trigger" aria-label="Open navigation">
          <span />
          <span />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="navigation-overlay" />
        <Dialog.Content
          className="navigation-drawer"
          aria-describedby={undefined}
          onCloseAutoFocus={(event) => {
            const id = anchorDestination.current;
            anchorDestination.current = null;
            if (!id) return;
            const target = document.getElementById(id);
            if (target) {
              event.preventDefault();
              target.scrollIntoView({ block: "start", behavior: "instant" });
              target.focus({ preventScroll: true });
            }
          }}
        >
          <Dialog.Title className="sr-only">
            Pocket Creatives navigation
          </Dialog.Title>
          <div className="navigation-top">
            <div onClick={close}>
              <Brand />
            </div>
            <Dialog.Close asChild>
              <button className="menu-close" aria-label="Close navigation">
                <span />
                <span />
              </button>
            </Dialog.Close>
          </div>
          <nav aria-label="Main navigation" className="navigation-main">
            <ol>
              {mainNavigation.map((item, index) => (
                <li
                  key={item.path}
                  className="navigation-item"
                  style={{ "--item-index": index } as CSSProperties}
                >
                  <div className="navigation-row">
                    <span className="navigation-number" aria-hidden="true">
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                    <Link
                      href={item.href}
                      onClick={() => followLink(item.href)}
                      aria-current={pathname === item.path ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </div>
                  {item.path === "/services" && (
                    <details className="navigation-services">
                      <summary>
                        Explore services<span aria-hidden="true">+</span>
                      </summary>
                      <ul>
                        {serviceNavigation.map((service) => (
                          <li key={service.path}>
                            <Link href={service.href} onClick={close}>
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="navigation-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <div className="navigation-socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
