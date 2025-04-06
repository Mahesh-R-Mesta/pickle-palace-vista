
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PicklesSection from '@/components/PicklesSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scrolling to the whole document
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-pickle-cream">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PicklesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
