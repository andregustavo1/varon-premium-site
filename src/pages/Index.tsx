
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { setupAnimations } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    const cleanup = setupAnimations();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
