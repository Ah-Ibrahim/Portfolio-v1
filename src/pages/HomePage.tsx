import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import AboutMe from "@/features/about/AboutMe";
import Contact from "@/features/contact/Contact";
import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Services from "@/features/services/Services";

function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
export default HomePage;
