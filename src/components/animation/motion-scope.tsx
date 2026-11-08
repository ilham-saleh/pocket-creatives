"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  setup: (scope: HTMLDivElement) => void | (() => void);
};

// Opt-in lifecycle for Phase 4. No global scroll smoothing or hidden content.
// matchMedia reverts scoped animations and ScrollTriggers on preference changes.
export function MotionScope({ children, className, setup }: Props) {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        if (scope.current) return setup(scope.current);
      });
      return () => media.revert();
    },
    { scope, dependencies: [setup], revertOnUpdate: true },
  );
  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
