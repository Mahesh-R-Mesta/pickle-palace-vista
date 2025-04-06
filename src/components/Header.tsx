
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:py-6 md:px-10 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-pickle-brown hover:text-pickle-yellow transition-colors duration-300 font-medium">
            Home
          </a>
          <a href="#pickles" className="text-pickle-brown hover:text-pickle-yellow transition-colors duration-300 font-medium">
            Our Pickles
          </a>
          <a href="#contact" className="text-pickle-brown hover:text-pickle-yellow transition-colors duration-300 font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
