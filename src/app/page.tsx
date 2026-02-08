import AboutMe from "@/features/about/AboutMe";
import Contact from "@/features/contact/Contact";
import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Services from "@/features/services/Services";

function page() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}

export default page;
