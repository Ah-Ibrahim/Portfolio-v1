import AboutMe from "@/features/about/AboutMe";
import Hero from "@/features/hero/Hero";
import NavBar from "@/shared/components/layout/NavBar";

function page() {
  return (
    <div className="page">
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </div>
  );
}

export default page;
