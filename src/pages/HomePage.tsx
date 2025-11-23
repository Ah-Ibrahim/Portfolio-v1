import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsContainer from "@/components/ProjectsContainer";

function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <ProjectsContainer />
    </div>
  );
}
export default HomePage;
