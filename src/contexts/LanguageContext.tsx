
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
      name: "Appemidi Mango Pickle",
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
      description: "A medley of fresh vegetables & tender mango, carefully preserved with our secret spice blend to create a symphony of flavors that elevate any meal."
    },
    
    // Footer
    taglineFooter: "Bringing the authentic taste of traditional Indian pickles to your table since 1965.",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    address1: "Rayeshvar nilaya, Marikamba Nagar",
    address2: "Uttarkannad District, Sirsi",
    address3: "Karnataka, India - 581401",
    email: "Email: info@picklepalace.com",
    phone: "Phone: +91 98765 43210",
    hours: "Hours: Mon-Sat, 9:00 AM - 6:00 PM",
    copyright: "© 2025 Vaishnavi Pickles. All rights reserved."
  },
  kn: {
    // Header
    home: "ಮುಖಪುಟ",
    ourPickles: "ನಮ್ಮ ಉಪ್ಪಿನಕಾಯಿಗಳು",
    contact: "ಸಂಪರ್ಕಿಸಿ",
  
    // Hero
    tagline: "ಪಾರಂಪರಿಕ ಕೈಚಳಿ ಉಪ್ಪಿನಕಾಯಿಗಳು",
    description: "ಪೀಳಿಗೆಯಿಂದ ಪೀಳಿಗೆಗೆ ಸಾಗಿರುವ ಪಾರಂಪರಿಕ ಕುಟುಂಬದ ವಾಣಿಜ್ಯ ಪದ್ಧತಿಗಳೊಂದಿಗೆ ತಯಾರಿಸಿದ ನಮ್ಮ ಸಣ್ಣ ಪ್ರಮಾಣದ ಉಪ್ಪಿನಕಾಯಿಗಳೊಂದಿಗೆ ಭಾರತದ ನಿಜವಾದ ರುಚಿಯನ್ನು ಅನುಭವಿಸಿ.",
    exploreButton: "ನಮ್ಮ ಉಪ್ಪಿನಕಾಯಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
  
    // Pickles Section
    picklesSectionTitle: "ನಮ್ಮ ಪಾರಂಪರಿಕ ಉಪ್ಪಿನಕಾಯಿಗಳು",
  
    // Pickle names and descriptions
    tenderMango: {
      name: "ಅಪ್ಪೆಮಿಡಿ ಮಾವಿನ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಹೊಸ ಮತ್ತು ಕೊಂಚ ಹಸಿವಿರುವ ಮಾವಿನಕಾಯಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಸುವಾಸನೆಯುತ ಮಸಾಲೆಗಳಿಂದ ರುಚಿಕರವಾಗಿ ಸಂರಕ್ಷಿಸಿದ ಖಾರದ-ಹುಳಿ ಉಪ್ಪಿನಕಾಯಿ."
    },
    jeerigeMango: {
      name: "ಜೀರಿಗೆ ಮಾವಿನ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಜೀರಿಗೆ ಬೀಜಗಳ ಭೂಮಿಯ ಸ್ಪರ್ಶದೊಂದಿಗೆ ಪಕ್ವ ಮಾವಿನ ಸಿಹಿಯನ್ನು ಸಂಯೋಜಿಸಿದ, ವಿಶಿಷ್ಟವಾದ ಖಾರದ ರುಚಿಯುಳ್ಳ ಉಪ್ಪಿನಕಾಯಿ."
    },
    gundappeMango: {
      name: "ಗುಂಡಪ್ಪೆ ಮಾವಿನ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ದುಷ್ಕರವಾಗಿ ದೊರೆಯುವ ಗುಂಡಪ್ಪೆ ಮಾವಿನೊಂದಿಗೆ ತಯಾರಿಸಿದ ಈ ಉಪ್ಪಿನಕಾಯಿ, ಸಿಹಿ-ಹುಳಿ ರುಚಿಯೊಂದಿಗೆ ಸ್ವಲ್ಪ ಖಾರವನ್ನು ಹೊಂದಿದ್ದು ಯಾವುದೇ ಭೋಜನವನ್ನು ಉಜ್ಜೀವನಗೊಳಿಸುತ್ತದೆ."
    },
    lemon: {
      name: "ನಿಂಬೆ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ ಬಾಡಿಸಿದ ನಿಂಬೆಹಣ್ಣುಗಳೊಂದಿಗೆ ತಯಾರಿಸಲಾದ ಈ ಉಪ್ಪಿನಕಾಯಿ, ಖಾರದ ಮತ್ತು ಹುಳಿ ರುಚಿಗಳ ಸಮತೋಲನದೊಂದಿಗೆ ನಿಮ್ಮ ಊಟಕ್ಕೆ ತಾಜಾ ರುಚಿ ನೀಡುತ್ತದೆ."
    },
    mix: {
      name: "ಮಿಕ್ಸ್ ಉಪ್ಪಿನಕಾಯಿ",
      description: "ಹೆಚ್ಚಿನ ತರಕಾರಿ ಮತ್ತು ನರು ಮಾವಿನಕಾಯಿಯ ಮಿಶ್ರಣ, ನಮ್ಮ ಗುಪ್ತ ಮಸಾಲೆಯ ಮಿಶ್ರಣದಿಂದ ಸಂರಕ್ಷಿಸಲಾದ ಈ ಉಪ್ಪಿನಕಾಯಿ ಯಾವುದೇ ಊಟಕ್ಕೆ ರುಚಿಯ ಸಿಂಫನಿಯನ್ನೇ ನೀಡುತ್ತದೆ."
    },
  
    // Footer
    taglineFooter: "2000 ರಿಂದ ಪಾರಂಪರಿಕ ಭಾರತೀಯ ಉಪ್ಪಿನಕಾಯಿಗಳ ನಿಜವಾದ ರುಚಿಯನ್ನು ನಿಮ್ಮ ಮನೆಗೆ ತರುತ್ತಿದೆ.",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    getInTouch: "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
    address1: "ರಾಯೇಶ್ವರ ನಿಲಯ, ಮರಿಕಾಂಬಾ ನಗರ",
    address2: "ಉತ್ತರಕನ್ನಡ ಜಿಲ್ಲೆ, ಸಿರಸಿ",
    address3: "ಕರ್ನಾಟಕ, ಭಾರತ - 581401",
    email: "ಇಮೇಲ್: info@picklepalace.com",
    phone: "ದೂರವಾಣಿ: +91 98765 43210",
    hours: "ಕಾರ್ಯ ಸಮಯ: ಸೋಮ-ಶನಿ, ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
    copyright: "© 2025 ವೈಷ್ಣವಿ ಉಪ್ಪಿನಕಾಯಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
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
