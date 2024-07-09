import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { BentoGrid } from "@/components/bento-grid";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Faq from "@/components/faqs/Faq.tsx";
import Pricing from "@/components/pricing/Pricing.tsx";
import Features from "@/components/features.tsx";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <Features />

      <Pricing />
      <Testimonials />
      <Contact />
      <Faq />

      <Footer />
    </div>
  );
};

export default LandingPage;
