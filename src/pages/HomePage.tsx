import NavBar from "@/components/layout/NavBar";
import AboutMe from "@/features/about/AboutMe";
import HeroSection from "@/features/hero/HeroSection";
import Projects from "@/features/projects/Projects";

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
