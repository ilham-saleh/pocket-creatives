import type { ReactNode } from "react";
import { StarIcon } from "./icons";

export function SectionLabel({
  label,
  number,
  year = "2026",
}: {
  label: string;
  number: string;
  year?: string;
}) {
  return (
    <div className="section-label">
      <span>
        <StarIcon />({label})
      </span>
      <span aria-hidden="true">/{number}</span>
      <span>©{year}</span>
    </div>
  );
}

export function SectionHeading({
  children,
  id,
  align = "left",
}: {
  children: ReactNode;
  id?: string;
  align?: "left" | "right" | "center";
}) {
  return (
    <h2 id={id} className={`heading-section heading-section--${align}`}>
      {children}
    </h2>
  );
}
