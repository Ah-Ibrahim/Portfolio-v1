import useGSAPScrub from "@/shared/hooks/useGSAPScrub";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import screenBreakpoints from "@/shared/lib/breakpoints";
import { useRef } from "react";
import useIntroAnimation from "../intro-animation/useIntroAnimation";

function Scrub() {
  // Tablet or larger
  const isMdOrLarger = useMediaQuery(`(min-width:${screenBreakpoints.md})`);

  const container = useRef<HTMLElement | null>(null);

  // for useGSAPScrub
  const scrubElement = useRef<HTMLHeadingElement>(null);
  const scrubContainer = useRef<HTMLDivElement>(null);

  // for large screen, be undefined to use useGSAPScrub default values
  const startScrub = isMdOrLarger ? undefined : "start 65%";
  const endScrub = isMdOrLarger ? undefined : "bottom 55%";

  useGSAPScrub(scrubElement, scrubContainer, startScrub, endScrub);

  return (
    <div
      className="mt-15 md:mt-20 overflow-hidden"
      id="about-container-animation"
      ref={scrubContainer}
    >
      <h2
        id="about-animation"
        ref={scrubElement}
        className="text-[3.5rem] uppercase font-bold-condensed xs:text-[4.75rem] tracking-tighter text-center  md:text-[11vw] lg:text-[13vw] leading-none invisible"
      >
        About me
      </h2>
    </div>
  );
}
export default Scrub;
