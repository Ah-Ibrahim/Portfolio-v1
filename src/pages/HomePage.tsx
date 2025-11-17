import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <HeroSection />
      <AboutMe />
    </div>
  );
}
export default HomePage;
