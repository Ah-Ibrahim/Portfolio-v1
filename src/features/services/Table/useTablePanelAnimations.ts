import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

export function useTablePanelAnimations(
  container: RefObject<HTMLDivElement | null>,
) {
  useGSAP(
    (_context, contextSafe) => {
      const containerElement = container.current;
      if (!containerElement) return;

      const timeline = gsap.timeline().pause();
      const panelTitleAnimation = gsap.to(".panel-title-animation", {
        y: "0",
        delay: 0.1,
        duration: 0.5,
        paused: true,
        ease: "power2.in",
        onReverseComplete: () => {
          // to restore delay on repeat
          panelTitleAnimation.restart(true);
          panelTitleAnimation.pause();
        },
        onComplete: () => {
          timeline.restart(true);
        },
      });

      const onMouseEnter = contextSafe!(() => {
        panelTitleAnimation.play();
      });

      const onMouseLeave = contextSafe!(() => {
        panelTitleAnimation.reverse();
        timeline.restart();
        timeline.pause();
      });

      containerElement.addEventListener("mouseenter", onMouseEnter);
      containerElement.addEventListener("mouseleave", onMouseLeave);

      // Timeline

      timeline.from(
        ".table-keywords-animation",
        {
          y: "-110%",
          stagger: {
            each: 0.2,
          },
          duration: 0.5,
        },
        "<",
      );

      timeline.from(
        [".panel-image-animation", ".panel-description-animation"],
        {
          autoAlpha: 0,
          duration: 1,
        },
        "-=20%",
      );

      return () => {
        containerElement.removeEventListener("mouseenter", onMouseEnter);
        containerElement.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: container },
  );
}
