import HomePage from "@/pages/HomePage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./App.css";

gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger, SplitText, CustomEase);

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
