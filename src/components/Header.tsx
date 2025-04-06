
import React from 'react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="py-4 px-6 md:py-6 md:px-10 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-pickle-brown hover:text-pickle-yellow transition-colors duration-300 font-medium">
              {t('home')}
            </a>
            <a href="#pickles" className="text-pickle-brown hover:text-pickle-yellow transition-colors duration-300 font-medium">
              {t('ourPickles')}
            </a>
            <a href="#contact" className="text-pickle-brown hover:text-pickle-yellow transition-colors duration-300 font-medium">
              {t('contact')}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
