import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Gallery from "./components/GallerySection";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Gallery />
    </main>
  );
}