import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { useDebounceCallback } from "usehooks-ts";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, CustomEase);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

function GsapSetup() {
  const onResizeDebounced = useDebounceCallback(
    () => ScrollTrigger.refresh(),
    300,
  );

  useEffect(() => {
    window.addEventListener("resize", onResizeDebounced);
    window.addEventListener("orientationchange", onResizeDebounced);

    return () => {
      window.removeEventListener("resize", onResizeDebounced);
      window.removeEventListener("orientationchange", onResizeDebounced);
      onResizeDebounced.cancel();
    };
  }, [onResizeDebounced]);

  return null;
}
export default GsapSetup;
