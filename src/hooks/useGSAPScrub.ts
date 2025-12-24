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
  showMarkers: boolean = false
) {
  useGSAP(
    () => {
      if (!element.current || !container.current) return;

      let split: globalThis.SplitText | null = null;
      let tween: gsap.core.Tween | null = null;

      document.fonts.ready.then(() => {
        split = SplitText.create(element.current, {
          type: "chars",
          autoSplit: true,
        });

        const sign = isReversed ? "+" : "-";

        tween = gsap.from(split.chars, {
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

      return () => {
        tween?.revert();
        split?.revert();
        tween?.scrollTrigger?.kill();
      };
    },
    {
      scope: container,
      dependencies: [start, end, isReversed],
    }
  );
}

export default useGSAPScrub;
