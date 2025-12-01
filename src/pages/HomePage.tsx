import NavBar from '@/components/layout/NavBar';
import AboutMe from '@/features/about/AboutMe';
import HeroSection from '@/features/hero/HeroSection';
import Projects from '@/features/projects/Projects';
import Services from '@/features/services/Services';

function HomePage() {
	return (
		<div className="page">
			<NavBar />
			<HeroSection />
			<AboutMe />
			<Projects />
			<Services />
		</div>
	);
}
export default HomePage;
