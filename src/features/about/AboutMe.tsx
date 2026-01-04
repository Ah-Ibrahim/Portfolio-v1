import imageUrl from "@/assets/images/personal-image.jpeg";
import ArrowIcon from "@/components/ui/ArrowIcon";
import useGSAPScrub from "@/hooks/useGSAPScrub";
import { useRef } from "react";

function AboutMe() {
  // For GSAP scrub
  const scrubContainer = useRef<HTMLDivElement>(null);
  const scrubElement = useRef<HTMLHeadingElement>(null);

  useGSAPScrub<HTMLHeadingElement, HTMLDivElement>(
    scrubElement,
    scrubContainer
  );

  return (
    <section
      className="bg-bg-secondary text-white section-padding pt-10 pb-6"
      id="about"
    >
      <div className="uppercase text-lg flex justify-between mb-6 font-bold-condensed">
        <div className="md:text-3xl lg:text-4xl xl:text-5xl">2/5</div>
        <div className="lg:text-lg xl:text-2xl">DSGN/2</div>
      </div>
      <div className="md:w-lg md:mx-auto md:font-light">
        <div className="w-46 lg:w-55 max-lg:mx-auto mt-1 space-y-6">
          <img
            className="w-full"
            src={imageUrl}
            alt="My personal image"
            style={{ filter: "grayscale(80%)" }}
            width={210}
            height={243}
          />
          <div className="uppercase text-center text-lg leading-tight">
            <div>Hello!</div>
            <div>I'm Ahmed Ibrahim</div>
          </div>
        </div>
        <div className="uppercase mt-13 text-sm flex text-text-secondary gap-x-1">
          My experience
          <ArrowIcon />
        </div>
        <div className="uppercase text-xl mt-6 text-center">
          I’ve spent the last couple of years crafting web interfaces, mastering
          the art of turning complexity into simplicity.
        </div>
      </div>
      <h2 className="uppercase text-text-secondary text-4xl mt-10 lg:text-7xl lg:w-[70%] lg:mt-20">
        IT’S NOT JUST A PROFESSION — IT’S A WAY OF THINKING
      </h2>
      <div className="uppercase text-xl mt-6 text-center font-light lg:w-lg md:mx-auto">
        My work is part of how I see the world. As a creative front-end
        developer, I turn ideas into experiences — shaping how people feel,
        move, and connect through the web.
      </div>
      <div className="lg:w-lg ms-auto">
        <div className="uppercase mt-10 text-sm flex text-text-secondary gap-x-1">
          My philosophy
          <ArrowIcon />
        </div>
        <div className="uppercase text-xl mt-6 text-center font-light">
          I value clarity, precision, and emotion — both in code and in life. I
          believe in intentional design: every pixel and line should have
          purpose. I lean toward functional minimalism, crafting interfaces that
          feel effortless yet alive.
        </div>
      </div>
      <div className="mt-15 overflow-hidden" ref={scrubContainer}>
        <h2
          className="uppercase font-bold-condensed text-[3.75rem] tracking-tighter text-center md:text-7xl lg:text-8xl leading-none"
          id="projects"
          ref={scrubElement}
        >
          Recent works
        </h2>
      </div>
    </section>
  );
}
export default AboutMe;
