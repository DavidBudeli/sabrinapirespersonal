"use client";

import { useEffect } from "react";

export function useGSAPAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    let isMounted = true;
    let teardown = () => {};

    async function initMotion() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      let lenis:
        | {
            raf: (time: number) => void;
            on: (event: "scroll", callback: () => void) => void;
            destroy: () => void;
          }
        | null = null;

      const updateLenis = (time: number) => {
        lenis?.raf(time * 1000);
      };

      if (!isMobile) {
        const lenisModule = await import("lenis");
        const Lenis = lenisModule.default;
        lenis = new Lenis({
          anchors: true,
          duration: 1.05,
          lerp: 0.08,
          smoothWheel: true,
          wheelMultiplier: 0.9,
        });

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);
      }

      const context = gsap.context(() => {
        const heroTimeline = gsap.timeline({
          defaults: { duration: isMobile ? 0.48 : 0.9, ease: "power3.out" },
        });

        heroTimeline
          .from("[data-hero-visual]", { autoAlpha: 0, y: isMobile ? 20 : 44, scale: 0.98 })
          .from("[data-hero-badge]", { autoAlpha: 0, y: 18 }, "-=0.34")
          .from(
            "[data-hero-line]",
            {
              autoAlpha: 0,
              y: isMobile ? 28 : 52,
              rotateX: isMobile ? 0 : 10,
              stagger: isMobile ? 0.055 : 0.12,
              transformOrigin: "bottom left",
            },
            "-=0.42",
          )
          .from("[data-hero-sub]", { autoAlpha: 0, y: 22 }, "-=0.48")
          .from("[data-hero-cta]", { autoAlpha: 0, y: 22 }, "-=0.42")
          .from("[data-hero-note]", { autoAlpha: 0, y: 18 }, "-=0.36");

        gsap.to("[data-hero-visual]", {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        if (!isMobile) {
          gsap.utils.toArray<HTMLElement>("[data-organic]").forEach((shape, index) => {
            gsap.to(shape, {
              y: index % 2 === 0 ? -18 : 18,
              rotate: index % 2 === 0 ? 4 : -4,
              duration: 4.2 + index,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 34,
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          const items = group.querySelectorAll("[data-card]");

          gsap.from(items, {
            autoAlpha: 0,
            y: 30,
            duration: 0.82,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((image) => {
          gsap.from(image, {
            autoAlpha: 0,
            clipPath: "inset(18% 0 18% 0 round 14px)",
            scale: 1.04,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 82%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          gsap.to(element, {
            yPercent: isMobile ? -3 : -10,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        const method = document.querySelector("[data-method]");

        if (method) {
          gsap.from("[data-method-step]", {
            autoAlpha: 0,
            y: 28,
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.14,
            scrollTrigger: {
              trigger: method,
              start: "top 76%",
              once: true,
            },
          });

          gsap.fromTo(
            "[data-method-progress]",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: method,
                start: "top 68%",
                end: "bottom 58%",
                scrub: true,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();

      teardown = () => {
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.ticker.remove(updateLenis);
        lenis?.destroy();
      };
    }

    void initMotion();

    return () => {
      isMounted = false;
      teardown();
    };
  }, []);
}
