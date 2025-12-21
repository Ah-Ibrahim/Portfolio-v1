import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, type RefObject } from "react";

export function useHamburgerAnimation(
  container: RefObject<HTMLElement | null>,
  isMenuShown: boolean
) {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      tl.current = gsap
        .timeline({ id: "Menu", paused: true })
        .fromTo(
          container.current,
          { y: "110%" },
          { y: 0, duration: 0.5, ease: "power1.out" }
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current) return;

    if (isMenuShown) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "";
    }
  }, [isMenuShown]);
}
