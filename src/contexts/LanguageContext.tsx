
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Translation dictionary
export const translations = {
  en: {
    // Header
    home: "Home",
    ourPickles: "Our Pickles",
    contact: "Contact",
    
    // Hero
    tagline: "Traditional Handcrafted Pickles",
    description: "Savor the authentic taste of India with our carefully crafted, small-batch pickles made from traditional family recipes passed down through generations.",
    exploreButton: "Explore Our Pickles",
    
    // Pickles Section
    picklesSectionTitle: "Our Traditional Pickles",
    
    // Pickle names and descriptions
    tenderMango: {
      name: "Tender Mango Pickle",
      description: "A tangy delight made from young, tender raw mangoes, carefully selected and preserved with aromatic spices for an unforgettable taste experience."
    },
    jeerigeMango: {
      name: "Jeerige Mango Pickle",
      description: "Our special cumin-infused mango pickle blends the sweetness of ripe mangoes with the earthy warmth of cumin seeds for a perfectly balanced flavor."
    },
    gundappeMango: {
      name: "Gundappe Mango Pickle",
      description: "Made from the rare Gundappe variety of mangoes, this pickle offers a unique sweet-sour profile with hints of spiciness that brings alive any meal."
    },
    lemon: {
      name: "Lemon Pickle",
      description: "Bursting with citrusy freshness, our lemon pickle combines sun-ripened lemons with a perfect blend of spices for a zesty, mouthwatering accompaniment."
    },
    mix: {
      name: "Mix Pickle",
      description: "A medley of fresh vegetables and fruits, carefully preserved with our secret spice blend to create a symphony of flavors that elevate any meal."
    },
    
    // Footer
    taglineFooter: "Bringing the authentic taste of traditional Indian pickles to your table since 1965.",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    address1: "123 Spice Avenue",
    address2: "Flavor District, Pickle Town",
    address3: "Karnataka, India - 560001",
    email: "Email: info@picklepalace.com",
    phone: "Phone: +91 98765 43210",
    hours: "Hours: Mon-Sat, 9:00 AM - 6:00 PM",
    copyright: "© 2025 Pickle Palace. All rights reserved."
  },
  kn: {
    // Header
    home: "ಮುಖಪುಟ",
    ourPickles: "ನಮ್ಮ ಉಪ್ಪಿನಕಾಯಿಗಳು",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    
    // Hero
    tagline: "ಸಾಂಪ್ರದಾಯಿಕ ಕೈಮಾಡಿದ ಉಪ್ಪಿನಕಾಯಿಗಳು",
    description: "ತಲೆಮಾರುಗಳಿಂದ ಕೆಳಗಿಳಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಕುಟುಂಬದ ರೆಸಿಪಿಗಳಿಂದ ಮಾಡಿದ ನಮ್ಮ ಎಚ್ಚರಿಕೆಯಿಂದ ತಯಾರಿಸಿದ, ಸಣ್ಣ-ಬ್ಯಾಚ್ ಉಪ್ಪಿನಕಾಯಿಗಳೊಂದಿಗೆ ಭಾರತದ ಸ್ವಾದವನ್ನು ಆಸ್ವಾದಿಸಿ.",
    exploreButton: "ನಮ್ಮ ಉಪ್ಪಿನಕಾಯಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    
    // Pickles Section
    picklesSectionTitle: "ನಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ಉಪ್ಪಿನಕಾಯಿಗಳು",
    
    // Pickle names and descriptions
    tenderMango: {
      name: "ಮೃದುವಾದ ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಯುವ, ಮೃದುವಾದ ಕಚ್ಚಾ ಮಾವಿನಕಾಯಿಗಳಿಂದ ಮಾಡಿದ ಹುಳಿ ಸವಿ, ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ಕೆ ಮಾಡಿ ಸುಗಂಧಿತ ಮಸಾಲೆಗಳೊಂದಿಗೆ ಸಂರಕ್ಷಿಸಿದ ಮರೆಯಲಾಗದ ರುಚಿ ಅನುಭವಕ್ಕಾಗಿ."
    },
    jeerigeMango: {
      name: "ಜೀರಿಗೆ ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ನಮ್ಮ ವಿಶೇಷ ಜೀರಿಗೆ-ಮಿಶ್ರಿತ ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ ಪರಿಪೂರ್ಣವಾಗಿ ಸಮತೋಲಿತ ರುಚಿಗಾಗಿ ಪಕ್ವವಾದ ಮಾವಿನಕಾಯಿಗಳ ಸಿಹಿಯನ್ನು ಜೀರಿಗೆ ಬೀಜಗಳ ಮಣ್ಣಿನ ಬೆಚ್ಚಗಿನೊಂದಿಗೆ ಮಿಶ್ರಣಗೊಳಿಸುತ್ತದೆ."
    },
    gundappeMango: {
      name: "ಗುಂಡಪ್ಪೆ ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಅಪರೂಪದ ಗುಂಡಪ್ಪೆ ಬಗೆಯ ಮಾವಿನಕಾಯಿಗಳಿಂದ ಮಾಡಿದ, ಈ ಉಪ್ಪಿನಕಾಯಿ ಯಾವುದೇ ಊಟವನ್ನು ಜೀವಂತಗೊಳಿಸುವ ಖಾರದ ಸೂಚನೆಗಳೊಂದಿಗೆ ಅನನ್ಯ ಸಿಹಿ-ಹುಳಿ ಪ್ರೊಫೈಲ್ ಅನ್ನು ನೀಡುತ್ತದೆ."
    },
    lemon: {
      name: "ನಿಂಬೆ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಸಿಟ್ರಸ್ ತಾಜಾತನದಿಂದ ತುಂಬಿದ, ನಮ್ಮ ನಿಂಬೆ ಉಪ್ಪಿನಕಾಯಿ ಒಂದು ರುಚಿಕರ, ಬಾಯಲ್ಲಿ ನೀರೂರಿಸುವ ಪೂರಕಕ್ಕಾಗಿ ಸೂರ್ಯ-ಪಕ್ವವಾದ ನಿಂಬೆಗಳನ್ನು ಮಸಾಲೆಗಳ ಪರಿಪೂರ್ಣ ಮಿಶ್ರಣದೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ."
    },
    mix: {
      name: "ಮಿಶ್ರ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ತಾಜಾ ತರಕಾರಿಗಳು ಮತ್ತು ಹಣ್ಣುಗಳ ಮಿಶ್ರಣ, ಯಾವುದೇ ಊಟವನ್ನು ಉನ್ನತಗೊಳಿಸುವ ರುಚಿಗಳ ಸಿಂಫನಿಯನ್ನು ಸೃಷ್ಟಿಸಲು ನಮ್ಮ ರಹಸ್ಯ ಮಸಾಲೆ ಮಿಶ್ರಣದೊಂದಿಗೆ ಎಚ್ಚರಿಕೆಯಿಂದ ಸಂರಕ್ಷಿಸಲಾಗಿದೆ."
    },
    
    // Footer
    taglineFooter: "1965 ರಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಉಪ್ಪಿನಕಾಯಿಗಳ ಅಸಲಿ ರುಚಿಯನ್ನು ನಿಮ್ಮ ಮೇಜಿಗೆ ತರುತ್ತಿದ್ದೇವೆ.",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    getInTouch: "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
    address1: "123 ಸ್ಪೈಸ್ ಅವೆನ್ಯೂ",
    address2: "ಫ್ಲೇವರ್ ಡಿಸ್ಟ್ರಿಕ್ಟ್, ಪಿಕಲ್ ಟೌನ್",
    address3: "ಕರ್ನಾಟಕ, ಭಾರತ - 560001",
    email: "ಇಮೇಲ್: info@picklepalace.com",
    phone: "ಫೋನ್: +91 98765 43210",
    hours: "ಸಮಯ: ಸೋಮ-ಶನಿ, 9:00 AM - 6:00 PM",
    copyright: "© 2025 ಪಿಕಲ್ ಪ್ಯಾಲೇಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
  }
};

type Language = 'en' | 'kn';
type TranslationContextType = {
  language: Language;
  t: (key: string, section?: string) => string;
  changeLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<TranslationContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, section?: string): string => {
    if (section) {
      // @ts-ignore - we know the structure of our translations
      return translations[language][section][key] || key;
    }
    // @ts-ignore - we know the structure of our translations
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
