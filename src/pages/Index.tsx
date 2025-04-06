
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PicklesSection from '@/components/PicklesSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  // Add smooth scrolling to the whole document
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-pickle-cream">
        <Header />
        <main className="flex-grow">
          <Hero />
          <PicklesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
