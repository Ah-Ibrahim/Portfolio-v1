"use client";

import useGSAPScrub from "@/shared/hooks/useGSAPScrub";
import { useRef } from "react";

function Scrub1() {
  const scrubContainer1 = useRef<HTMLDivElement>(null);
  const scrubElement1 = useRef<HTMLDivElement>(null);

  useGSAPScrub<HTMLDivElement, HTMLDivElement>(scrubElement1, scrubContainer1);

  return (
    <div className="overflow-hidden" ref={scrubContainer1}>
      <div
        className="text-[2.5rem] font-bold-condensed xs:text-[2.75rem] md:text-7xl lg:text-8xl xl:text-9xl invisible"
        ref={scrubElement1}
      >
        Great Design
      </div>
    </div>
  );
}
export default Scrub1;
