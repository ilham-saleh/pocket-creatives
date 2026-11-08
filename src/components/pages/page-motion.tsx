"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionScope } from "@/components/animation/motion-scope";
gsap.registerPlugin(SplitText, ScrollTrigger);
function setup(scope: HTMLDivElement) {
  const splits: SplitText[] = [];
  const cleanup: (() => void)[] = [];
  scope.querySelectorAll<HTMLElement>("[data-page-reveal]").forEach((el) => {
    const target = el.querySelector("a") ?? el;
    const split = SplitText.create(target, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 105,
          duration: 0.75,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        });
      },
    });
    splits.push(split);
  });
  scope.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((item) => {
    const summary = item.querySelector("summary")!;
    const answer = item.querySelector<HTMLElement>(".faq-answer")!;
    let desired = item.open;
    let animation: Animation | undefined;
    const toggle = (event: Event) => {
      event.preventDefault();
      desired = !desired;
      const current = answer.getBoundingClientRect().height;
      animation?.cancel();
      item.open = true;
      animation = answer.animate(
        [
          { height: `${current}px`, opacity: current ? 1 : 0 },
          {
            height: `${desired ? answer.scrollHeight : 0}px`,
            opacity: desired ? 1 : 0,
          },
        ],
        { duration: 260, easing: "cubic-bezier(0.23,1,0.32,1)" },
      );
      animation.onfinish = () => {
        item.open = desired;
        animation = undefined;
        ScrollTrigger.refresh();
      };
    };
    summary.addEventListener("click", toggle);
    cleanup.push(() => {
      summary.removeEventListener("click", toggle);
      animation?.cancel();
      item.open = desired;
    });
  });
  const media = gsap.matchMedia();
  media.add("(min-height: 600px)", () => {
    const stage = scope.querySelector<HTMLElement>(".cta-media-stage");
    if (!stage) return;
    const cta = stage.closest<HTMLElement>(".internal-cta")!;
    const spacer = stage.parentElement!;
    const cls = spacer.className,
      style = spacer.getAttribute("style");
    cta.dataset.pinned = "true";
    ScrollTrigger.create({
      id: "page-cta",
      trigger: stage,
      pinSpacer: spacer,
      pin: true,
      start: "top top",
      end: () => `+=${innerHeight * 2}`,
      invalidateOnRefresh: true,
    });
    gsap
      .timeline({
        scrollTrigger: {
          id: "page-cta-scale",
          trigger: stage,
          start: "top bottom",
          end: () => `+=${innerHeight * 2}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        stage.querySelector(".cta-perspective"),
        { scale: 2 },
        { scale: 1, ease: "none" },
        0,
      )
      .fromTo(
        stage.querySelectorAll(".cta-slice img"),
        { scale: 0.5 },
        { scale: 1, ease: "none" },
        0,
      );
    return () => {
      delete cta.dataset.pinned;
      spacer.className = cls;
      if (style === null) spacer.removeAttribute("style");
      else spacer.setAttribute("style", style);
    };
  });
  return () => {
    media.revert();
    cleanup.forEach((fn) => fn());
    splits.forEach((split) => split.revert());
  };
}
export function PageMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <MotionScope key={pathname} setup={setup}>
      {children}
    </MotionScope>
  );
}
