import Hero from "../components/sections/Hero";
import TrustedClients from "../components/sections/TrustedClients";
import Services from "../components/sections/Services";
import FeaturedProject from "../components/sections/FeaturedProject";
import Testimonials from "../components/sections/Testimonials";
import AboutSection from "../components/sections/AboutSection";

export default function Home() {
  return (
    <div className="bg-base-100 text-base-content">
      <Hero />
      <TrustedClients />
      <Services />
      <FeaturedProject />
      <Testimonials />
      <AboutSection />
    </div>
  );
}
