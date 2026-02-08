"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type RefObject, useRef } from "react";

export function useAccordionPanelAnimations(
  container: RefObject<HTMLDivElement | null>,
  isSelected: boolean,
) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const containerElement = container.current;
      if (!containerElement) return;

      const tl = gsap.timeline({ paused: true });

      tl.set(containerElement, {
        backgroundColor: "white",
      });

      tl.fromTo(
        ".accordion-body-animation",
        { height: 0 },
        {
          height: "auto",
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => ScrollTrigger.refresh(),
          onReverseComplete: () => ScrollTrigger.refresh(),
        },
      );

      tl.fromTo(".accordion-index-animation", { y: 0 }, { y: "110%" }, "<");

      tl.fromTo(
        ".accordion-title-animation",
        { x: 0 },
        { x: -40, duration: 0.3 },
        "<50%",
      );

      tl.fromTo(
        ".accordion-keywords-animation",
        { y: "-110%" },
        {
          y: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        "<",
      );

      tl.fromTo(
        [".accordion-image-animation", ".accordion-description-animation"],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=20%",
      );

      timelineRef.current = tl;

      return () => {
        tl.kill();
        timelineRef.current = null;
      };
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const tl = timelineRef.current;
      if (!tl) return;

      if (isSelected) {
        tl.play();
      } else {
        tl.reverse();
      }
    },
    { dependencies: [isSelected] },
  );
}
