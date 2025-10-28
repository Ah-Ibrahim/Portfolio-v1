import imageUrl from "../assets/images/personal-image.jpeg";
import ArrowIcon from "./ArrowIcon";

function AboutMe() {
  return (
    <section className="bg-bg-secondary text-white section-padding pt-17 pb-10">
      <div className="uppercase text-lg">About me</div>
      <div className="w-46 mx-auto mt-1 space-y-6">
        <img
          className="w-full"
          src={imageUrl}
          alt="My personal image"
          style={{ filter: "grayscale(80%)" }}
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
      <h2 className="uppercase text-text-secondary text-4xl mt-10">
        IT’S NOT JUST A PROFESSION — IT’S A WAY OF THINKING
      </h2>
      <div className="uppercase text-xl mt-6 text-center">
        My work is part of how I see the world. As a creative front-end
        developer, I turn ideas into experiences — shaping how people feel,
        move, and connect through the web.
      </div>
      <div className="uppercase mt-10 text-sm flex text-text-secondary gap-x-1">
        My philosophy
        <ArrowIcon />
      </div>
      <div className="uppercase text-xl mt-6 text-center">
        I value clarity, precision, and emotion — both in code and in life. I
        believe in intentional design: every pixel and line should have purpose.
        I lean toward functional minimalism, crafting interfaces that feel
        effortless yet alive.
      </div>
      {/* NOTE: Maybe About me should be added to About me section */}
      <h2 className="uppercase font-bold-condensed text-[3.75rem] tracking-tighter text-center mt-10">
        Recent works
      </h2>
    </section>
  );
}
export default AboutMe;
