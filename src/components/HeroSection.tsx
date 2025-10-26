import imageUrl from "../assets/images/personal-image.jpeg";
import ArrowIcon from "./ArrowSvg";

function HeroSection() {
  return (
    <section className="bg-bg-primary pt-23 section-padding">
      <div className="px-4">
        <h1 className="text-[5.25rem] font-bold-condensed uppercase tracking-tighter leading-[0.75] text-right">
          Creative Developer
        </h1>
        <div className="text-[0.70rem] uppercase flex justify-between *:tracking-[1em] translate-x-2">
          <span>Based</span>
          <span>in</span>
          <span>Egypt</span>
        </div>
        <div className="flex mt-8">
          <div className="flex-5">
            <img src={imageUrl} style={{ filter: "grayscale(80%)" }}></img>
          </div>
          <div className="uppercase font-bold-condensed mt-auto flex-4 *:w-max">
            <div>/ Frontend developer</div>
            <div>/ Computer Engineer</div>
          </div>
        </div>
      </div>
      <a
        href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
        className="flex flex-col items-center mt-25"
      >
        <div className="w-max">
          <span className=" uppercase font-light flex gap-x-1">
            Available for collaboration <ArrowIcon />
          </span>
        </div>
        {/* TODO: hover animation needs after and before underline instead of this   */}
        <div className="font-bold-condensed underline self-end">
          ahmed.ibrahim.elsayed01@gmail.com
        </div>
      </a>
      <div className="uppercase font-bold-condensed text-[4.75rem] tracking-tighter text-center mt-10">
        About me
      </div>
    </section>
  );
}
export default HeroSection;
