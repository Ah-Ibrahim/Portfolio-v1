"use client";

import useGSAPScrub from "@/shared/hooks/useGSAPScrub";
import { useRef } from "react";

function Scrub2() {
  const scrubContainer2 = useRef<HTMLDivElement>(null);
  const scrubElement2 = useRef<HTMLDivElement>(null);

  useGSAPScrub<HTMLDivElement, HTMLDivElement>(scrubElement2, scrubContainer2);

  return (
    <div className="overflow-hidden" ref={scrubContainer2}>
      <div
        className="text-[2.5rem] font-bold-condensed xs:text-[2.75rem] md:text-7xl lg:text-8xl xl:text-9xl invisible"
        ref={scrubElement2}
      >
        Great Collaboration
      </div>
    </div>
  );
}
export default Scrub2;
