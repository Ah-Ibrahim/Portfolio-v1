export { default as gsap } from "gsap";
export { ScrollTrigger } from "gsap/ScrollTrigger";
export { useGSAP } from "@gsap/react";
export { SplitText } from "gsap/SplitText";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
