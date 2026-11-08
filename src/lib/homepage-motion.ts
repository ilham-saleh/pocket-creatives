import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
type Conditions = { desktop: boolean; tall: boolean; fine: boolean };

// Timings are implementation estimates; measured endpoints are mapped in the Phase 4 report.
export function setupHomepageMotion(
  root: HTMLElement,
  { desktop, tall, fine }: Conditions,
) {
  const q = <T extends HTMLElement = HTMLElement>(selector: string) =>
    Array.from(root.querySelectorAll<T>(selector));
  const one = (selector: string) => q(selector)[0];
  let active = true;
  const disposers: (() => void)[] = [];
  const spacerStates = q(
    ".about-pin-space,.services-pin-space,.work-pin-space,.reel-pin-space,.cta-media-pin-space",
  ).map((el) => ({
    el,
    className: el.className,
    style: el.getAttribute("style"),
  }));
  const listen = (el: EventTarget, name: string, fn: EventListener) => {
    el.addEventListener(name, fn);
    disposers.push(() => el.removeEventListener(name, fn));
  };
  root.dataset.motion = "on";
  const lateContext = gsap.context(() => {}, root);
  const splits: SplitText[] = [];
  const loops: { animation: gsap.core.Animation; area: HTMLElement }[] = [];
  const trackLoop = (animation: gsap.core.Animation, area: HTMLElement) =>
    loops.push({ animation, area });
  const refreshLoops = () => {
    if (!active) return;
    const paused = root.dataset.loopsPaused === "true" || document.hidden;
    for (const { animation, area } of loops) {
      const box = area.getBoundingClientRect();
      animation.paused(
        paused ||
          box.bottom <= 0 ||
          box.top >= innerHeight ||
          area.contains(document.activeElement) ||
          (area.classList.contains("hero-thumbnails") &&
            area.matches(":hover")),
      );
    }
  };
  listen(root, "motionpause", refreshLoops);
  listen(document, "visibilitychange", refreshLoops);
  listen(root, "focusin", refreshLoops);
  listen(root, "focusout", () => requestAnimationFrame(refreshLoops));
  const observer = new IntersectionObserver(refreshLoops);

  // A02: one accessible stable heading; visual glyphs rotate in a reserved line.
  const phrases = q(".hero-phrases > span");
  const phraseSplits = phrases.map((el) =>
    SplitText.create(el, { type: "chars", mask: "chars", aria: "none" }),
  );
  splits.push(...phraseSplits);
  gsap.set(phrases.slice(1), { autoAlpha: 0 });
  const phraseLoop = gsap.timeline({ repeat: -1, delay: 2.5 });
  phrases.forEach((phrase, i) => {
    const next = (i + 1) % phrases.length;
    phraseLoop
      .to(
        phraseSplits[i].chars,
        {
          yPercent: -110,
          stagger: 0.025,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "+=2.6",
      )
      .set(phrase, { autoAlpha: 0 })
      .set(phrases[next], { autoAlpha: 1 })
      .fromTo(
        phraseSplits[next].chars,
        { yPercent: 110 },
        {
          yPercent: 0,
          immediateRender: false,
          duration: 0.6,
          stagger: 0.025,
          ease: "power3.out",
        },
      );
  });
  trackLoop(phraseLoop, one(".home-hero"));
  listen(root, "motionpause", () => {
    if (root.dataset.loopsPaused === "true") phraseLoop.progress(0).pause();
  });

  // A03: duplicate presentation only; clones cannot create duplicate keyboard stops.
  const list = one(".hero-services ul");
  const listRows = Array.from(list.children);
  for (const row of listRows) {
    const clone = row.cloneNode(true) as HTMLElement;
    clone.setAttribute("aria-hidden", "true");
    list.append(clone);
    disposers.push(() => clone.remove());
  }
  trackLoop(
    gsap.to(list, {
      y: () => -(list.scrollHeight / 2),
      duration: 15,
      repeat: -1,
      ease: "none",
    }),
    one(".home-hero"),
  );
  const thumbTrack = one(".hero-thumbnail-track");
  const originalThumbs = Array.from(thumbTrack.children);
  for (let repeat = 0; repeat < 2; repeat++)
    for (const child of originalThumbs) {
      const clone = child.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("tabindex", "-1");
      clone.dataset.loopClone = "true";
      thumbTrack.append(clone);
      disposers.push(() => clone.remove());
    }
  trackLoop(
    gsap.to(thumbTrack, {
      x: () => -(thumbTrack.scrollWidth + 8) / 3,
      duration: 18,
      repeat: -1,
      ease: "none",
    }),
    one(".hero-thumbnails"),
  );

  listen(one(".hero-thumbnails"), "focusin", () => {
    loops
      .find((item) => item.area === one(".hero-thumbnails"))
      ?.animation.progress(0)
      .pause();
  });
  listen(thumbTrack, "mousedown", (event) => {
    if ((event.target as Element).closest("[data-loop-clone]"))
      event.preventDefault();
  });

  // A05: true line masks and glyph stagger. Reflow is delegated to SplitText.
  const prepareHeading = (heading: HTMLElement) => {
    let revealed = heading.dataset.revealed === "true";
    const split = SplitText.create(heading, {
      type: "lines,words,chars",
      mask: "lines",
      autoSplit: true,
      aria: "auto",
      onSplit(self) {
        if (revealed) return;
        return gsap.from(self.chars, {
          yPercent: 110,
          duration: 0.75,
          stagger: 0.018,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            once: true,
            onEnter: () => {
              revealed = true;
              heading.dataset.revealed = "true";
            },
          },
        });
      },
    });
    splits.push(split);
  };
  // Split offscreen headings shortly before arrival, not in the loading task.
  // The late context owns their timelines across resize/preference/route cleanup.
  const headingObserver = new IntersectionObserver(
    (entries) => {
      if (!active) return;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        headingObserver.unobserve(entry.target);
        lateContext.add(() => prepareHeading(entry.target as HTMLElement));
      }
    },
    { rootMargin: "0px 0px 1000px 0px" },
  );
  q(".heading-section").forEach((heading) => headingObserver.observe(heading));
  disposers.push(() => headingObserver.disconnect());

  // The reference brightens the About statement from left to right as it enters.
  const aboutHeading = one(".home-about h2");
  const aboutSplit = SplitText.create(aboutHeading, {
    type: "words,chars",
    aria: "auto",
  });
  splits.push(aboutSplit);
  gsap.fromTo(
    aboutSplit.chars,
    { opacity: 0.2 },
    {
      opacity: 1,
      stagger: { amount: 1 },
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        id: "home-about-text",
        trigger: aboutHeading,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    },
  );

  // Pinned compositions only when the viewport can show their controls completely.
  if (tall) {
    root.dataset.pinned = "true";
    const about = one(".home-about");
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        id: "home-about",
        trigger: about,
        pinSpacer: about.parentElement!,
        start: "top top",
        end: () => `+=${innerHeight * (desktop ? 3 : 2.2)}`,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
    q(".about-floating").forEach((photo, i) => {
      const origin = desktop ? [1.1, 1, 2.278][i] : [1.05, 1, 1.65][i];
      aboutTimeline.fromTo(
        photo,
        { y: () => innerHeight * origin - photo.offsetTop, rotation: 0 },
        {
          y: () =>
            innerHeight * (origin - (desktop ? 3 : 2.2)) - photo.offsetTop,
          duration: 1,
          ease: "none",
        },
        0,
      );
    });
    aboutTimeline.fromTo(
      one(".about-circle"),
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.25, ease: "none" },
      0.1,
    );

    // A07: two real services share a stage, with independently looping lettering.
    const scene = one(".services-scene");
    const services = q(".service-stage");
    const navigation = document.createElement("nav");
    navigation.className = "service-scene-navigation";
    navigation.setAttribute("aria-label", "Select a service");
    services.forEach((service) => {
      const link = document.createElement("a");
      link.href = `#${service.id}`;
      link.textContent = service.querySelector("h3")!.textContent;
      navigation.append(link);
    });
    scene.prepend(navigation);
    disposers.push(() => navigation.remove());
    gsap.set(services.slice(1), { autoAlpha: 0 });
    let selected = -1;
    const select = (index: number) => {
      if (index === selected) return;
      selected = index;
      services.forEach((service, i) => {
        service.inert = i !== index;
        service.setAttribute("aria-hidden", String(i !== index));
      });
      Array.from(navigation.children).forEach((link, i) => {
        if (i === index) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };
    const timeline = gsap.timeline({
      scrollTrigger: {
        id: "home-services",
        trigger: scene,
        pinSpacer: scene.parentElement!,
        start: "top 16px",
        end: () => `+=${innerHeight * (desktop ? 3.4 : 2.2)}`,
        pin: true,
        scrub: 0.45,
        invalidateOnRefresh: true,
      },
      onUpdate: () => select(timeline.progress() < 0.5 ? 0 : 1),
    });
    timeline
      .from(
        services[0].querySelector(".service-image"),
        { x: 80, opacity: 0, duration: 0.35, ease: "none" },
        0,
      )
      .from(
        services[0].querySelectorAll("h3,p,ul"),
        { x: -80, opacity: 0, duration: 0.35, ease: "none" },
        0.1,
      )
      .to(services[0], { autoAlpha: 0, duration: 0.3 }, 1.2)
      .fromTo(
        services[1],
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3 },
        1.4,
      )
      .from(
        services[1].querySelector(".service-image"),
        { x: 80, duration: 0.35, ease: "none" },
        1.4,
      )
      .from(
        services[1].querySelectorAll("h3,p,ul"),
        { x: -80, duration: 0.35, ease: "none" },
        1.4,
      )
      .to({}, { duration: 1.25 });
    select(0);
    services.forEach((service, i) => {
      const jump = (event: Event) => {
        event.preventDefault();
        const trigger = timeline.scrollTrigger!;
        const progress = i === 0 ? 0.2 : 0.8;
        window.scrollTo({
          top: trigger.start + (trigger.end - trigger.start) * progress,
          behavior: "instant",
        });
        timeline.progress(progress);
        select(i);
      };
      listen(navigation.children[i], "click", jump);
    });
    disposers.push(() =>
      services.forEach((s) => {
        s.inert = false;
        s.removeAttribute("aria-hidden");
      }),
    );

    // A08: pin the outer holders, transform the nested panels; anchor wrappers stay stable.
    const steps = q(".work-step");
    const pins = q(".work-pin");
    const cards = q(".work-stage");
    steps.forEach((step, i) => {
      ScrollTrigger.create({
        id: `home-work-${i}`,
        trigger: step,
        pin: pins[i],
        pinSpacer: pins[i].parentElement!,
        pinSpacing: false,
        start: "top 32px",
        endTrigger: steps.at(-1),
        end: "bottom bottom",
        invalidateOnRefresh: true,
      });
      if (i < cards.length - 1)
        gsap.to(cards[i], {
          scale: 0.01,
          rotation: 16,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            id: `home-work-transform-${i}`,
            trigger: steps[i + 1],
            start: "top bottom",
            end: "top 32px",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
    });
    const revealWork = (step: HTMLElement) => {
      const t = ScrollTrigger.getById(`home-work-${steps.indexOf(step)}`);
      if (t) {
        window.scrollTo({ top: t.start + 1, behavior: "instant" });
        ScrollTrigger.update();
      }
    };
    listen(root, "click", ((event: MouseEvent) => {
      const a = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#project-"]',
      );
      if (
        !a ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = document.getElementById(a.hash.slice(1));
      if (!target) return;
      event.preventDefault();
      revealWork(target);
      history.pushState(null, "", a.hash);
      target.focus({ preventScroll: true });
    }) as EventListener);
    steps.forEach((step) =>
      listen(step, "focusin", () => {
        const r = step.querySelector(".work-stage")!.getBoundingClientRect();
        if (
          r.width < step.clientWidth * 0.8 ||
          r.top < 0 ||
          r.bottom > innerHeight + 20
        )
          revealWork(step);
      }),
    );

    // A10: desktop held growth; touch remains compact as measured in the reference.
    const reel = one(".reel-stage");
    const reelTimeline = gsap.timeline({
      scrollTrigger: {
        id: "home-reel",
        trigger: reel,
        pinSpacer: reel.parentElement!,
        start: desktop ? "top top" : "top 85%",
        end: desktop ? () => `+=${innerHeight * 2}` : "center center",
        pin: desktop,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
    if (desktop)
      gsap.set(one(".reel-frame"), { transformOrigin: "center top" });
    reelTimeline
      .from(one(".reel-frame"), { scale: 0.5, duration: 1, ease: "none" }, 0)
      .from(
        one(".reel-trigger > span:first-child"),
        { x: 60, duration: 0.6, ease: "none" },
        0.3,
      )
      .from(
        one(".reel-trigger > span:last-child"),
        { x: -60, duration: 0.6, ease: "none" },
        0.3,
      )
      .from(
        one(".reel-play"),
        { y: 166, opacity: 0, duration: 0.6, ease: "none" },
        0.4,
      );
    if (desktop)
      reelTimeline.from(
        one(".reel-frame"),
        { y: () => innerHeight * 0.3, duration: 1, ease: "power1.out" },
        0,
      );

    // A13: opposing outer/inner scales preserve the segmented image illusion.
    const cta = one(".cta-media-stage");
    ScrollTrigger.create({
      id: "home-cta",
      trigger: cta,
      pinSpacer: cta.parentElement!,
      start: "top top",
      end: () => `+=${innerHeight * 2}`,
      pin: true,
      invalidateOnRefresh: true,
    });
    const ctaTimeline = gsap.timeline({
      scrollTrigger: {
        id: "home-cta-scale",
        trigger: cta,
        start: "top bottom",
        end: () => `+=${innerHeight * 2}`,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
    ctaTimeline
      .fromTo(
        one(".cta-perspective"),
        { scale: 2 },
        { scale: 1, duration: 1, ease: "none" },
        0,
      )
      .fromTo(
        q(".cta-slice img"),
        { scale: 0.5 },
        { scale: 1, duration: 1, ease: "none" },
        0,
      );
  }

  // Independent looping service lettering; a complete repeating group prevents jumps.
  q(".service-marquee").forEach((marquee) => {
    const group = document.createElement("div");
    group.className = "service-marquee-group";
    while (marquee.firstChild) group.append(marquee.firstChild);
    marquee.append(group);
    const clone = group.cloneNode(true) as HTMLElement;
    clone.setAttribute("aria-hidden", "true");
    marquee.append(clone);
    trackLoop(
      gsap.to(marquee, {
        x: () => -group.offsetWidth,
        duration: 22,
        repeat: -1,
        ease: "none",
      }),
      marquee.closest<HTMLElement>(".services-scene")!,
    );
    disposers.push(() => {
      clone.remove();
      while (group.firstChild) marquee.append(group.firstChild);
      group.remove();
    });
  });

  // A14: sampled, small pointer displacement; never a touch/keyboard prerequisite.
  if (fine) {
    q(".testimonial-image, .service-image").forEach((area) => {
      const img = area.querySelector("img")!;
      const x = gsap.quickTo(img, "x", { duration: 0.5, ease: "power3.out" });
      const y = gsap.quickTo(img, "y", { duration: 0.5, ease: "power3.out" });
      const zoom = gsap.to(img, {
        scale: 1.05,
        duration: 0.5,
        ease: "power3.out",
        paused: true,
      });
      listen(area, "pointermove", ((e: PointerEvent) => {
        const r = area.getBoundingClientRect();
        x(((e.clientX - r.left) / r.width) * 8 - 4);
        y(((e.clientY - r.top) / r.height) * 8 - 4);
        zoom.play();
      }) as EventListener);
      listen(area, "pointerleave", () => {
        x(0);
        y(0);
        zoom.reverse();
      });
    });
    const about = one(".home-about");
    const circle = one(".about-circle");
    const x = gsap.quickTo(circle, "x", { duration: 0.5, ease: "power3.out" });
    const y = gsap.quickTo(circle, "y", { duration: 0.5, ease: "power3.out" });
    listen(about, "pointermove", ((event: PointerEvent) => {
      if (circle.matches(":focus")) return;
      const r = about.getBoundingClientRect();
      x(event.clientX - r.left - circle.offsetLeft - circle.offsetWidth / 2);
      y(event.clientY - r.top - circle.offsetTop - circle.offsetHeight / 2);
    }) as EventListener);
    listen(about, "pointerleave", () => {
      x(0);
      y(0);
    });
    listen(circle, "focus", () => {
      x(0);
      y(0);
    });
  }

  // A15: native details preserve semantics; desktop grid interpolation is the
  // intentional, bounded layout exception needed for the reference's expansion.
  if (fine && desktop)
    q<HTMLDetailsElement>(".process-panel").forEach((panel) => {
      listen(panel, "pointerenter", () => {
        if (!panel.parentElement?.contains(document.activeElement))
          panel.open = true;
      });
    });
  q<HTMLDetailsElement>(".process-panel").forEach((panel) =>
    listen(panel, "toggle", () => {
      if (panel.open)
        lateContext.add(() => {
          gsap.fromTo(
            panel.querySelector(".process-detail"),
            { opacity: 0.3 },
            { opacity: 1, duration: 0.45, overwrite: true },
          );
        });
    }),
  );

  // A16: interruptible native disclosure. Only its measured answer height animates.
  q<HTMLDetailsElement>(".faq-item").forEach((item) => {
    const summary = item.querySelector("summary")!;
    const answer = item.querySelector<HTMLElement>(".faq-answer")!;
    let desired = item.open;
    let animation: Animation | undefined;
    listen(summary, "click", (event) => {
      event.preventDefault();
      desired = !desired;
      const current = answer.getBoundingClientRect().height;
      animation?.cancel();
      item.open = true;
      const target = answer.scrollHeight;
      animation = answer.animate(
        [
          { height: `${current}px`, opacity: current ? 1 : 0 },
          { height: `${desired ? target : 0}px`, opacity: desired ? 1 : 0 },
        ],
        { duration: 260, easing: "cubic-bezier(0.23,1,0.32,1)" },
      );
      animation.onfinish = () => {
        item.open = desired;
        animation = undefined;
        ScrollTrigger.refresh();
      };
    });
    disposers.push(() => {
      animation?.cancel();
      item.open = desired;
    });
  });

  loops.forEach(({ area }) => {
    observer.observe(area);
    listen(area, "pointerenter", refreshLoops);
    listen(area, "pointerleave", refreshLoops);
  });
  refreshLoops();
  void document.fonts.ready.then(() => {
    if (active) ScrollTrigger.refresh();
  });
  const onLoad = () => ScrollTrigger.refresh();
  listen(window, "load", onLoad);
  ScrollTrigger.refresh();
  return () => {
    active = false;
    observer.disconnect();
    lateContext.revert();
    disposers.reverse().forEach((dispose) => dispose());
    splits.reverse().forEach((split) => split.revert());
    spacerStates.forEach(({ el, className, style }) => {
      el.className = className;
      if (style === null) el.removeAttribute("style");
      else el.setAttribute("style", style);
    });
    delete root.dataset.motion;
    delete root.dataset.pinned;
  };
}
