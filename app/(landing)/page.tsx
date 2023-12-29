import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { BentoGrid } from "@/components/bento-grid";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const LandingPage = () => {
	return (
		<div className='h-full'>
			<LandingNavbar />
			<LandingHero />
			<BentoGrid />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default LandingPage;
