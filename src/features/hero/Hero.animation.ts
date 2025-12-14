import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";

function animateHero(container: HTMLElement | null) {
  if (!container) return;

  const timeline = gsap.timeline({ id: "Hero" });

  const heading = container.querySelector("#hero-animation");
  const locationText = container.querySelector("#location-animation");
  const introContainer = container.querySelector("#intro-animation");
  const introDescription = container.querySelector("#intro-desc-animation");
  const keywords = container.querySelectorAll(".keywords-animation");
  const imageContainer = container.querySelector("#image-container-animation");
  const image = container.querySelector("#image-animation");

  const split = SplitText.create(heading, { type: "chars" });

  timeline.from(split.chars, {
    y: "-110%",
    stagger: {
      from: "center",
      each: 0.075,
    },
    duration: 0.65,
    ease: "power3.out",
  });

  timeline
    .from(
      [locationText, introContainer, introDescription],
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      "<35%"
    )
    .addLabel("intro-text", ">");

  timeline.from(
    keywords,
    {
      y: "-110%",
      stagger: {
        each: 0.2,
      },
      duration: 0.65,
    },
    "intro-text"
  );

  timeline.fromTo(
    imageContainer,
    {
      autoAlpha: 0,
      height: 0,
    },
    { duration: 1, autoAlpha: 1, height: "auto" },
    "intro-text"
  );

  timeline.from(
    image,
    {
      autoAlpha: 0,
      scale: 1.65,
      duration: 0.65,
      ease: "power3.out",
    },
    "intro-text"
  );

  GSDevTools.create();
}

export default animateHero;
