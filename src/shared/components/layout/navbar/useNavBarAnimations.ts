"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import gsap from "gsap";

function useNavBarAnimations(container: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (!container.current) return;

      gsap.from(container.current, {
        delay: 2,
        autoAlpha: 0,
        duration: 0.5,
      });
    },
    { scope: container },
  );
}

export default useNavBarAnimations;
