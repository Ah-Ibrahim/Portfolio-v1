import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

      const split = SplitText.create(element.current, { type: "chars" });

      const sign = isReversed ? "+" : "-";

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

      return () => {
        split.revert();
      };
    },
    { scope: container }
  );
}

export default useGSAPScrub;
