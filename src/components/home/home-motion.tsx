"use client";

import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { setupHomepageMotion } from "@/lib/homepage-motion";

gsap.registerPlugin(useGSAP);

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  useGSAP(
    () => {
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
    },
    { scope: root, dependencies: [children], revertOnUpdate: true },
  );
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
