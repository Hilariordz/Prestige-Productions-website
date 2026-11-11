import type { Metadata } from 'next';
import AboutPageContent from '../about';
import FooterSection from '../components/FooterSection';

export const metadata: Metadata = {
  title: 'About | Prestige Productions',
  description: 'Meet the host behind unforgettable nights at Prestige Productions.',
};

export default function AboutPage() {
  return (
    <main className="font-sans">
      <AboutPageContent />
      <FooterSection compact />
    </main>
  );
}
