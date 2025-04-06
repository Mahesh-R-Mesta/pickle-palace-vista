
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-16 md:py-20 pattern-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in mb-8">
            <Logo className="mb-6 justify-center" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pickle-brown mb-6">
              Traditional Handcrafted Pickles
            </h1>
            <p className="text-lg md:text-xl text-pickle-brown/80 max-w-2xl mx-auto">
              Savor the authentic taste of India with our carefully crafted, 
              small-batch pickles made from traditional family recipes passed down through generations.
            </p>
          </div>
          
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#pickles" 
              className="bg-pickle-yellow hover:bg-pickle-yellow/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Our Pickles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
