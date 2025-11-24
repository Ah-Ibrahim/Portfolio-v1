import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Projects />
    </div>
  );
}
export default HomePage;
