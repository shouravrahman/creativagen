import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Features from "@/components/features.tsx";
import { PrimaryFeatures } from "./_components/PrimaryFeatures.tsx";
import { SecondaryFeatures } from "./_components/SecondaryFeatures.tsx";
import { Faqs } from "./_components/Faq.tsx";
import { Pricing } from "./_components/Pricing.tsx";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <Features />

      <Pricing />
      <Testimonials />
      <Contact />
      <Faqs />

      <Footer />
    </div>
  );
};

export default LandingPage;
