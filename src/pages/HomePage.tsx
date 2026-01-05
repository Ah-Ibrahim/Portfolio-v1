import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import AboutMe from "@/features/about/AboutMe";
import Contact from "@/features/contact/Contact";
import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Services from "@/features/services/Services";
import { useRef } from "react";
import useIntroAnimation from "./useIntroAnimation";

function HomePage() {
  const container = useRef<HTMLDivElement>(null);

  useIntroAnimation(container);

  return (
    <div className="page invisible" ref={container}>
      <NavBar />
      <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Services />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
