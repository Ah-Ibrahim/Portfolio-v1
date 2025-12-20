import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

export function useAccordionPanelAnimations(
  container: RefObject<HTMLDivElement | null>,
  isSelected: boolean
) {
  useGSAP(
    () => {
      if (!container.current) return;

      const containerElement = container.current;

      if (isSelected) {
        const timeline = gsap.timeline();

        timeline.set(containerElement, {
          backgroundColor: "white",
        });
        timeline.fromTo(
          ".accordion-body-animation",
          {
            height: 0,
          },
          {
            height: "auto",
          }
        );

        timeline.to(
          ".accordion-index-animation",
          {
            y: "+110%",
          },
          "<"
        );
        timeline.to(
          ".accordion-title-animation",
          {
            x: -40,
            duration: 0.3,
          },
          "<50%"
        );

        timeline.from(
          ".accordion-keywords-animation",
          {
            y: "-110%",
            stagger: {
              each: 0.2,
            },
            duration: 0.5,
          },
          "<"
        );

        timeline.from(
          [".accordion-image-animation", ".accordion-description-animation"],
          {
            autoAlpha: 0,
            duration: 1,
          },
          "-=20%"
        );
      } else {
        const timeline = gsap.timeline();

        timeline.to(".accordion-body-animation", {
          height: 0,
        });

        timeline.to(
          ".accordion-title-animation",
          {
            x: 0,
          },
          "<"
        );

        timeline.to(
          ".accordion-index-animation",
          {
            y: 0,
          },
          "<50%"
        );

        timeline.set(containerElement, {
          backgroundColor: "",
        });
      }
    },
    { scope: container, dependencies: [isSelected] }
  );
}
