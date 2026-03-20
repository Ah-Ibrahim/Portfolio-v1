import HomePage from "@/pages/HomePage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import GsapSetup from "./setup/gsap-setup";

function App() {
  return (
    <>
      <GsapSetup />
      <HomePage />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
