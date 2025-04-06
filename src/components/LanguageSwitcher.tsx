
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-pickle-yellow text-white'
            : 'text-pickle-brown hover:bg-pickle-cream'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('kn')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'kn'
            ? 'bg-pickle-yellow text-white'
            : 'text-pickle-brown hover:bg-pickle-cream'
        }`}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
