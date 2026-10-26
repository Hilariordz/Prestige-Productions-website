import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ShopSection from "./components/ShopSection";
import Gallery from "./components/Gallery";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection"; 
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ShopSection />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}