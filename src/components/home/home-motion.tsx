"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    let disposed = false;
    let revert: (() => void) | undefined;
    void Promise.all([import("gsap"), import("@/lib/homepage-motion")]).then(
      ([{ default: gsap }, { setupHomepageMotion }]) => {
        if (disposed || !root.current) return;
        const context = gsap.context(() => {
          const media = gsap.matchMedia();
          media.add(
            {
              motion: "(prefers-reduced-motion: no-preference)",
              desktop: "(min-width: 992px)",
              mobile: "(max-width: 767px)",
              tall: "(min-height: 700px)",
              fine: "(hover: hover) and (pointer: fine)",
            },
            (context) => {
              if (!root.current || !context.conditions?.motion) return;
              return setupHomepageMotion(root.current, {
                desktop: !!context.conditions.desktop,
                tall: !!context.conditions.tall,
                fine: !!context.conditions.fine,
              });
            },
          );
          return () => media.revert();
        }, root.current);
        revert = () => context.revert();
      },
    );
    return () => {
      disposed = true;
      revert?.();
    };
  }, [children]);
  return (
    <main
      ref={root}
      id="main-content"
      tabIndex={-1}
      className="homepage"
      data-loops-paused={paused}
    >
      <button
        className="motion-toggle"
        aria-pressed={paused}
        onClick={() => {
          const next = !paused;
          root.current?.setAttribute("data-loops-paused", String(next));
          root.current?.dispatchEvent(new Event("motionpause"));
          setPaused(next);
        }}
      >
        {paused ? "Resume looping animations" : "Pause looping animations"}
      </button>
      {children}
    </main>
  );
}
