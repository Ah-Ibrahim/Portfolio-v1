import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { RefObject } from "react";

const STAGGERS_EACH = 0.04;
const SCRUB = 4;
const START_DEFAULT = "top 75%";
const END_DEFAULT = "bottom 65%";

function useGSAPScrub<T extends HTMLElement, K extends HTMLElement>(
  element: RefObject<T | null>,
  container: RefObject<K | null>,
  start: string = START_DEFAULT,
  end: string = END_DEFAULT,
  isReversed: boolean = false,
  showMarkers: boolean = false,
) {
  useGSAP(
    (_context, contextSafe) => {
      if (!element.current || !container.current) return;

      const setupTextScrubAnimation = contextSafe!(() => {
        let split = SplitText.create(element.current, {
          type: "chars",
          autoSplit: true,
        });

        const sign = isReversed ? "+" : "-";

        gsap.set(element.current, {
          autoAlpha: 1,
        });

        gsap.from(split.chars, {
          y: sign + "110%",
          stagger: {
            from: "center",
            each: STAGGERS_EACH,
          },
          scrollTrigger: {
            trigger: container.current,
            scrub: SCRUB,
            markers: showMarkers,
            start,
            end,
          },
        });

        // delay for  layout shift
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      document.fonts.ready.then(() => {
        setupTextScrubAnimation();
      });
    },
    {
      scope: container,
      dependencies: [start, end, isReversed],
      revertOnUpdate: true,
    },
  );
}

export default useGSAPScrub;
