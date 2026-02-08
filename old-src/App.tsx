import HomePage from "@/pages/HomePage";
import { useGSAP } from "@gsap/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import "./App.css";

gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger, SplitText, CustomEase);

function App() {
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <>
      <HomePage />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
