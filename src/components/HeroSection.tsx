import imageUrl from "../assets/images/personal-image.jpeg";

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
          <span className=" uppercase font-light flex">
            Available for collaboration
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="aspect-square w-[17px]"
            >
              <path d="M4.2216 5.63589L5.63562 4.22168L17.0709 15.6569V10.0712H19.0709L19.0709 19.0712L10.0709 19.0712L10.0709 17.0712L15.6567 17.0712L4.2216 5.63589Z"></path>
            </svg>
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
