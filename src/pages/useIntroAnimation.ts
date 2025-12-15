import useMediaQuery from "@/hooks/useMediaQuery";
import screenBreakpoints from "@/lib/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { RefObject } from "react";

function useIntroAnimation(container: RefObject<HTMLElement | null>) {
  const isSmallerThanMd = useMediaQuery(`(max-width:${screenBreakpoints.md})`);

  useGSAP(
    () => {
      if (!container.current) return;

      const containerElement = container.current;

      const navbar = containerElement.querySelector("#navbar-animation");

      // Hero section
      const heading = containerElement.querySelector("#hero-animation");
      const locationText = containerElement.querySelector(
        "#location-animation"
      );
      const introContainer = containerElement.querySelector("#intro-animation");
      const introDescription = containerElement.querySelector(
        "#intro-desc-animation"
      );
      const keywords = containerElement.querySelectorAll(".keywords-animation");
      const imageContainer = containerElement.querySelector(
        "#image-container-animation"
      );
      const image = containerElement.querySelector("#image-animation");
      const collaboration = containerElement.querySelector(
        "#collaboration-animation"
      );

      const timeline = gsap.timeline({ id: "Hero" });

      const type = isSmallerThanMd ? "words" : "chars";
      const splitHeading = SplitText.create(heading, { type });
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
        ease: "power3.out",
      });

      timeline
        .from(
          [locationText, introContainer, introDescription],
          {
            autoAlpha: 0,
            duration: 1,
          },
          "<35%"
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
        "intro-text"
      );

      timeline.fromTo(
        imageContainer,
        {
          autoAlpha: 0,
          height: 0,
        },
        { duration: 1, autoAlpha: 1, height: "auto" },
        "intro-text"
      );

      timeline.from(
        image,
        {
          autoAlpha: 0,
          scale: 1.75,
          duration: 1,
          ease: "power3.out",
        },
        "intro-text"
      );

      timeline.from([navbar, collaboration], {
        autoAlpha: 0,
      });

      return () => {
        splitHeading.revert();
      };
    },
    { scope: container }
  );
}

export default useIntroAnimation;
