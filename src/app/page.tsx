import Hero from "@/features/hero/Hero";
import NavBar from "@/shared/components/layout/NavBar";

function page() {
  // NOTE h-screen & bg-white is for navbar preview, remove it after adding sections
  return (
    <div className="page h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default page;
