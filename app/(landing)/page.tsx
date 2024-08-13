
import Footer from "@/components/footer";
import Features from "@/components/features.tsx";
import { PrimaryFeatures } from "./_components/PrimaryFeatures.tsx";
import { SecondaryFeatures } from "./_components/SecondaryFeatures.tsx";
import { Pricing } from "./_components/Pricing.tsx";
import { LandingHero } from "./_components/LandingHero.tsx";
import FAQ from "./_components/Faq.tsx";
import Contact from "@/components/contact.tsx";
import LandingNavbar from "./_components/LandingNavbar.tsx";
import Testimonials from "./_components/Testimonials.tsx";

const LandingPage = () => {
   return (
      <div className="h-full flex flex-col gap-16 md:gap-32 ">
         <LandingNavbar />
         <LandingHero />
         <PrimaryFeatures />
         <SecondaryFeatures />
         <Features />
         <Pricing />
         <Testimonials />
         <Contact />
         <FAQ />
         <Footer />
      </div>
   );
};

export default LandingPage;
