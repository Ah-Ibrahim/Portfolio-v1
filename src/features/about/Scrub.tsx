"use client";

import useGSAPScrub from "@/shared/hooks/useGSAPScrub";
import { useRef } from "react";

function Scrub() {
  const scrubContainer = useRef<HTMLDivElement>(null);
  const scrubElement = useRef<HTMLHeadingElement>(null);

  useGSAPScrub<HTMLHeadingElement, HTMLDivElement>(
    scrubElement,
    scrubContainer,
  );

  return (
    <div className="mt-15 overflow-hidden" ref={scrubContainer}>
      <h2
        className="text-[3.5rem] uppercase font-bold-condensed xs:text-[3.75rem] tracking-tighter text-center md:text-7xl lg:text-8xl leading-none invisible"
        id="projects"
        ref={scrubElement}
      >
        Recent works
      </h2>
    </div>
  );
}

export default Scrub;
