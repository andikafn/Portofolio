"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function glitchReveal(tl: gsap.core.Timeline, els: gsap.DOMTarget, at: number) {
  gsap.set(els, { visibility: "visible", opacity: 1, clipPath: "inset(0 100% 0 0)" });
  tl.fromTo(
    els,
    { clipPath: "inset(0 100% 0 0)", x: -3, skewX: 1.5 },
    {
      clipPath: "inset(0 0% 0 0)",
      x: 0,
      skewX: 0,
      duration: 0.58,
      ease: "steps(20)",
    },
    at
  ).to(els, { x: 3, duration: 0.03, ease: "none" }, at)
    .to(els, { x: -2, duration: 0.02, ease: "none" }, at + 0.03)
    .to(els, { x: 2, duration: 0.02, ease: "none" }, at + 0.05)
    .to(els, { x: 0, duration: 0.02, ease: "none" }, at + 0.07)
    .set(els, { clipPath: "none", clearProps: "clipPath,x,skewX" });
}

export function useGSAPAnimations() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timeout: number | undefined;
    const ctx = gsap.context(() => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const master = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Boot / power-on flash
      master.fromTo(hero, { opacity: 0.5, filter: "brightness(0.25)" }, { opacity: 1, filter: "brightness(1)", duration: 0.45, ease: "steps(4)" }, 0);

      // Background watermark reveal
      const bg = hero.querySelector<HTMLElement>("[data-anim='hero-bg-text']");
      if (bg)
        master.fromTo(bg, { opacity: 0 }, { opacity: 0.35, duration: 1 }, 0.05);

      // Hero lines: glitch reveal (same as @andikanugraha handles)
      const lines = hero.querySelectorAll<HTMLElement>("[data-anim='hero-line']");
      if (lines.length) {
        const arr = gsap.utils.toArray(lines);
        arr.forEach((line, i) => glitchReveal(master, line as HTMLElement, 0.5 + i * 0.32));
      }

      // Photo: glitch clip-slice reveal
      const img = hero.querySelector<HTMLElement>("[data-anim='hero-img']");
      if (img) {
        master.fromTo(img, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.55, ease: "steps(22)" }, 0.75)
          .fromTo(img, { x: -3 }, { x: 2, duration: 0.03 }, 0.75)
          .to(img, { x: -2, duration: 0.02 }, 0.78)
          .to(img, { x: 0, duration: 0.03 }, 0.8)
          .set(img, { clipPath: "none", clearProps: "clipPath,x" });
      }

      // Handles: glitch reveal
      const intros = hero.querySelectorAll<HTMLElement>("[data-anim='intro']");
      if (intros.length) glitchReveal(master, intros, 0.95);

      // Navbar: blink down
      const nav = document.querySelector("nav");
      if (nav) {
        const navItems = nav.querySelectorAll("a, button");
        master.fromTo(navItems, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.04 }, 0.9);
      }

      // --- Sections (scroll glitch) ---
      gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
        const headings = section.querySelectorAll<HTMLElement>("[data-gsap-heading]");
        const cards = section.querySelectorAll<HTMLElement>("[data-gsap-card]");
        const all = gsap.utils.toArray([...headings, ...cards]) as HTMLElement[];

        if (!all.length) return;

        gsap.set(all, { visibility: "visible", opacity: 1 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
         all.forEach((el) => {
           tl.fromTo(
             el,
             { clipPath: "inset(0 100% 0 0)", x: -4, skewX: 1.2, opacity: 0 },
             {
               clipPath: "inset(0 0% 0 0)",
               x: 0,
               skewX: 0,
               opacity: 1,
               duration: 0.5,
               ease: "steps(18)",
             }
           )
             .to(el, { x: 4, duration: 0.03, ease: "none" })
             .to(el, { x: -3, duration: 0.02, ease: "none" })
             .to(el, { x: 2, duration: 0.02, ease: "none" })
             .to(el, { x: 0, duration: 0.02, ease: "none" });
         });
      });

      // Recompute triggers after fonts/layout settle (prevents mid-scroll recompute glitches)
      timeout = window.setTimeout(() => ScrollTrigger.refresh(), 800);
    });

    return () => { if (timeout) window.clearTimeout(timeout); ctx.revert(); };
  }, []);
}
