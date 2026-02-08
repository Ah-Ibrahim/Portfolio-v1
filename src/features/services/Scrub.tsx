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
    <div
      className="flex justify-between section-padding mb-10 uppercase font-bold-condensed tracking-tighter overflow-hidden"
      ref={scrubContainer}
    >
      <h2
        className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl tracking-tighter leading-none invisible"
        ref={scrubElement}
      >
        Services
      </h2>
      <div className="text-sm md:text-base lg:text-lg xl:text-2xl">DSGN/4</div>
    </div>
  );
}

export default Scrub;
