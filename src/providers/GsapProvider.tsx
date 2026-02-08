"use client";

import { debounce } from "@/shared/lib/utils/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function GsapProvider() {
  useEffect(() => {
    const onResize = () => debounce(ScrollTrigger.refresh, 500);

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return null;
}
export default GsapProvider;
