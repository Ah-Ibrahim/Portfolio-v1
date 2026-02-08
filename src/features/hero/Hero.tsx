"use client";

import ArrowIcon from "@/shared/components/ui/ArrowIcon";
import img from "@/../public/images/personal-image.webp";
import useGSAPScrub from "@/shared/hooks/useGSAPScrub";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import screenBreakpoints from "@/shared/lib/breakpoints";
import { useRef } from "react";
import useIntroAnimation from "../intro-animation/useIntroAnimation";

function Hero() {
  // Tablet or larger
  const isMdOrLarger = useMediaQuery(`(min-width:${screenBreakpoints.md})`);

  const container = useRef<HTMLElement | null>(null);

  // for useGSAPScrub
  const scrubElement = useRef<HTMLHeadingElement>(null);
  const scrubContainer = useRef<HTMLDivElement>(null);

  // for large screen, be undefined to use useGSAPScrub default values
  const startScrub = isMdOrLarger ? undefined : "start 65%";
  const endScrub = isMdOrLarger ? undefined : "bottom 55%";

  useIntroAnimation(container);
  useGSAPScrub(scrubElement, scrubContainer, startScrub, endScrub);

  return (
    <section
      ref={container}
      className="bg-bg-primary pt-23 section-padding pb-8 selection:text-white selection:bg-black"
    >
      <div className="sm:max-md:px-4 flex flex-col isolate">
        <div className="md:mt-6">
          <h1 className="text-[4rem] xs:text-[5.25rem] font-bold-condensed uppercase tracking-tighter lg:-tracking-[0.0975em] leading-[0.75] md:text-[13vw] md:whitespace-nowrap md:text-center lg:text-[14vw]">
            <div className="w-min max-md:text-right max-md:ms-auto md:mx-auto relative">
              <div id="hero-animation" className="overflow-y-clip">
                Creative Developer
              </div>
              <div
                className="text-[0.65rem] xs:text-[0.70rem] uppercase flex justify-between *:tracking-[1em] font-bold-condensed lg:w-1/3 lg:text-[0.8rem] xl:text-base absolute max-lg:left-0 right-0 top-full translate-x-3"
                id="location-animation"
              >
                <span>Based</span>
                <span>in</span>
                <span>Egypt</span>
              </div>
            </div>
          </h1>
        </div>
        <div
          className="flex mt-14 gap-x-1 md:gap-x-15 lg:gap-x-22 md:w-fit md:flex-row-reverse md:mx-auto md:bg-bg-accent md:pe-4 md:pb-4 -z-10 invisible"
          id="intro-animation"
        >
          <div className="flex-5 md:float-right">
            <div className="md:scale-115 lg:scale-135 origin-bottom-right float-right overflow-hidden aspect-210/243 w-[140px] xs:w-[210px]">
              <div id="image-container-animation" className="overflow-hidden">
                <img
                  src={img.src}
                  style={{ filter: "grayscale(80%)" }}
                  className="w-full invisible"
                  id="image-animation"
                  alt="Ahmed Ibrahim"
                  width={210}
                  height={243}
                ></img>
              </div>
            </div>
          </div>
          <div className="uppercase font-bold-condensed mt-auto flex-4 *:w-max md:text-lg lg:text-3xl">
            <div className="overflow-hidden">
              <div className="keywords-animation">/ Frontend developer</div>
            </div>
            <div className="overflow-hidden">
              <div className="keywords-animation">/ Computer Engineer</div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="hidden md:block text-center w-lg mx-auto mt-10 uppercase font-light invisible"
        id="intro-desc-animation"
      >
        Turning ideas into clean, expressive interfaces — with a bit of creative
        obsession. Every detail matters, and I aim to ship work that’s
        intuitive, fast, and visually striking.
      </p>
      <a
        href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
        className="flex flex-col items-center mt-10 md:mt-20 md:w-max group invisible"
        id="collaboration-animation"
      >
        <div className="w-max">
          <span className="text-xs xs:text-base uppercase font-light flex gap-x-2 md:text-lg lg:text-xl">
            Available for collaboration <ArrowIcon />
          </span>
        </div>
        <div className="font-bold-condensed underline-animation max-md:self-end md:translate-x-1/3 md:text-xl lg:text-2xl group-hover:opacity-50 transition-opacity">
          ahmed.ibrahim.elsayed01@gmail.com
        </div>
      </a>
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
    </section>
  );
}
export default Hero;
