"use client";

import useGSAPScrub from "@/shared/hooks/useGSAPScrub";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import screenBreakpoints from "@/shared/lib/breakpoints";
import { useRef } from "react";

function Scrub() {
  const isSmallerThanLg = useMediaQuery(`(max-width:${screenBreakpoints.lg})`);

  const scrubContainer = useRef<HTMLDivElement>(null);
  const scrubElement = useRef<HTMLDivElement>(null);

  const startScrub = isSmallerThanLg ? "top 90%" : "top 85%";
  const endScrub = isSmallerThanLg ? "+=15" : "top 65%";

  useGSAPScrub<HTMLDivElement, HTMLDivElement>(
    scrubElement,
    scrubContainer,
    startScrub,
    endScrub,
    true,
  );

  return (
    <div className="overflow-hidden" ref={scrubContainer}>
      <div
        className="text-5xl uppercase font-bold-condensed xs:text-6xl -tracking-wider text-center md:text-[17.15vw] leading-none invisible"
        ref={scrubElement}
      >
        Ahmed Ibrahim
      </div>
    </div>
  );
}
export default Scrub;
