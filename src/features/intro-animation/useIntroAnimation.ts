"use client";

import useMediaQuery from "@/shared/hooks/useMediaQuery";
import screenBreakpoints from "@/shared/lib/breakpoints";
import { getNonNullElements } from "@/shared/lib/utils/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { RefObject } from "react";

gsap.registerPlugin(SplitText, useGSAP);

function useIntroAnimation(container: RefObject<HTMLElement | null>) {
  const isSmallerThanMd = useMediaQuery(`(max-width:${screenBreakpoints.md})`);

  useGSAP(
    () => {
      if (!container.current) return;

      const containerElement = container.current;

      // Hero section
      const heading = containerElement.querySelector("#hero-animation");
      if (!heading) return;

      const locationText = containerElement.querySelector(
        "#location-animation",
      );
      const introContainer = containerElement.querySelector("#intro-animation");
      const introDescription = containerElement.querySelector(
        "#intro-desc-animation",
      );
      const keywords = containerElement.querySelectorAll(".keywords-animation");
      const imageContainer = containerElement.querySelector(
        "#image-container-animation",
      );
      const image = containerElement.querySelector("#image-animation");
      const collaboration = containerElement.querySelector(
        "#collaboration-animation",
      );

      const timeline = gsap.timeline({ id: "Hero" });

      const type = isSmallerThanMd ? "words,lines" : "chars";
      const splitHeading = SplitText.create(heading, {
        type,
        mask: isSmallerThanMd ? "lines" : undefined,
      });
      const splitTarget = isSmallerThanMd
        ? splitHeading.words
        : splitHeading.chars;

      timeline.from(splitTarget, {
        y: "-110%",
        stagger: {
          from: isSmallerThanMd ? "start" : "center",
          each: 0.075,
        },
        duration: 0.65,
        ease: isSmallerThanMd ? "power1" : "power3.out",
      });

      timeline
        .from(
          getNonNullElements([locationText, introContainer, introDescription]),
          {
            autoAlpha: 0,
            duration: 1,
          },
          "<35%",
        )
        .addLabel("intro-text", ">");

      timeline.from(
        keywords,
        {
          y: "-110%",
          stagger: {
            each: 0.2,
          },
          duration: 0.65,
        },
        "intro-text",
      );

      timeline.fromTo(
        imageContainer,
        {
          autoAlpha: 0,
          height: 0,
        },
        { duration: 1, autoAlpha: 1, height: "auto" },
        "intro-text",
      );

      timeline.from(
        image,
        {
          autoAlpha: 0,
          scale: 1.75,
          duration: 1,
          ease: "power3.out",
        },
        "intro-text",
      );

      timeline.from(collaboration, {
        delay: 0,
        autoAlpha: 0,
      });

      return () => {
        timeline?.revert();
        splitHeading?.revert();
      };
    },
    { scope: container, dependencies: [isSmallerThanMd], revertOnUpdate: true },
  );
}

export default useIntroAnimation;
