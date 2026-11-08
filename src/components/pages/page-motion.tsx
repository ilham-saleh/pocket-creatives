"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MotionScope } from "@/components/animation/motion-scope";
const loadSetup = async () =>
  (await import("@/lib/page-motion")).setupPageMotion;
export function PageMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <MotionScope key={pathname} loadSetup={loadSetup}>
      {children}
    </MotionScope>
  );
}
