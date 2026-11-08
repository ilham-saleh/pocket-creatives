"use client";
import { useEffect, useRef, type ReactNode } from "react";
type Setup = (scope: HTMLDivElement) => void | (() => void);
type Props = {
  children: ReactNode;
  className?: string;
  loadSetup: () => Promise<Setup>;
};
// Import browser animation libraries only after mounting; Workers SSR cannot start timers.
export function MotionScope({ children, className, loadSetup }: Props) {
  const scope = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let revert: (() => void) | undefined;
    void Promise.all([import("gsap"), loadSetup()]).then(
      ([{ default: gsap }, setup]) => {
        if (disposed || !scope.current) return;
        const context = gsap.context(() => {
          const media = gsap.matchMedia();
          media.add("(prefers-reduced-motion: no-preference)", () => {
            if (scope.current) return setup(scope.current);
          });
          return () => media.revert();
        }, scope.current);
        revert = () => context.revert();
      },
    );
    return () => {
      disposed = true;
      revert?.();
    };
  }, [loadSetup]);
  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
