import LinkList from "@/components/common/LinkList";
import useGSAPScrub from "@/hooks/useGSAPScrub";
import useMediaQuery from "@/hooks/useMediaQuery";
import screenBreakpoints from "@/lib/breakpoints";
import type { link } from "@/lib/schemas/definitions";
import { createTimeObject } from "@/lib/utils/time";
import { Activity, useEffect, useRef, useState } from "react";

const timeObject = createTimeObject();
const links: link[] = [
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-ibrahim-807258243/",
  },
  {
    text: "Github",
    href: "https://github.com/Ah-Ibrahim",
  },
];

function Footer() {
  const [time, setTime] = useState<string>(timeObject.getTime());
  const timeZone = timeObject.getTimeZone();

  const isLg = useMediaQuery(`(min-width:${screenBreakpoints.lg})`);
  const isSmallerThanLg = useMediaQuery(`(max-width:${screenBreakpoints.lg})`);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(timeObject.getTime());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const scrubContainer = useRef<HTMLDivElement>(null);
  const scrubElement = useRef<HTMLDivElement>(null);

  const startScrub = isSmallerThanLg ? "top 90%" : "top 85%";
  const endScrub = isSmallerThanLg ? "+=15" : "top 65%";

  useGSAPScrub<HTMLDivElement, HTMLDivElement>(
    scrubElement,
    scrubContainer,
    startScrub,
    endScrub,
    true
  );

  return (
    <footer className="bg-bg-primary section-padding py-4 space-y-8 md:space-y-10 lg:space-y-12 lg:pt-20 selection:text-white selection:bg-black">
      <div className="text-center font-bold-condensed text-2xl md:text-3xl lg:text-4xl lg:text-end xl:text-5xl">
        <a
          href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
          className="underline-animation"
        >
          ahmed.ibrahim.elsayed01@gmail.com
        </a>
      </div>
      <LinkList
        links={links}
        listStyle="flex justify-between"
        linkStyle="font-light uppercase bracket-hover-animation"
        newTab
      />
      <div className="overflow-hidden" ref={scrubContainer}>
        <div
          className="uppercase font-bold-condensed text-6xl -tracking-wider text-center md:text-[17.15vw] leading-none"
          ref={scrubElement}
        >
          Ahmed Ibrahim
        </div>
      </div>
      <div className="lg:flex justify-between">
        <Activity mode={isLg ? "visible" : "hidden"}>
          <div className="font-light text-xs text-right uppercase tracking-widest">
            <div>
              Alexandria, Egypt: ({timeZone}) {time}
            </div>
          </div>
        </Activity>
        <div className="text-sm text-center text-text-secondary">
          &copy; All Rights Reserved. 2025 AhmedIbrahim
        </div>
      </div>
    </footer>
  );
}
export default Footer;
