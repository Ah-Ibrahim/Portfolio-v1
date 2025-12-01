import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import AboutMe from "@/features/about/AboutMe";
import Contact from "@/features/contact/Contact";
import HeroSection from "@/features/hero/HeroSection";
import Projects from "@/features/projects/Projects";
import Services from "@/features/services/Services";

function HomePage() {
	return (
		<div className="page">
			<NavBar />
			<HeroSection />
			<AboutMe />
			<Projects />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
}
export default HomePage;
