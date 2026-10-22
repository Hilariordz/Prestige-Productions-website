import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ShopSection from "./components/ShopSection";
import GlowProductsSection from "./components/GlowProductsSection";
import Gallery from "./components/Gallery";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection"; 

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GlowProductsSection />
      <ShopSection />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}