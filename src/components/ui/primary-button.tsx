import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowIcon } from "./icons";

type Shared = { children: ReactNode; className?: string };
type Props = Shared &
  (
    | ({ href: string } & Omit<
        ComponentProps<typeof Link>,
        "children" | "className"
      >)
    | ({ href?: never } & Omit<
        ComponentProps<"button">,
        "children" | "className"
      >)
  );

export function PrimaryButton({ children, className = "", ...props }: Props) {
  const content = (
    <>
      <span className="split-button__arrow">
        <ArrowIcon />
      </span>
      <span className="split-button__label">
        <span>{children}</span>
      </span>
    </>
  );
  const classes = `split-button ${className}`;
  if ("href" in props && props.href !== undefined)
    return (
      <Link {...props} className={classes}>
        {content}
      </Link>
    );
  return (
    <button
      type="button"
      {...(props as ComponentProps<"button">)}
      className={classes}
    >
      {content}
    </button>
  );
}
