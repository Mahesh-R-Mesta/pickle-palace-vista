
import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="py-12 md:py-16 bg-pickle-brown/10 border-t border-pickle-brown/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-pickle-brown/80 max-w-md">
              {t('taglineFooter')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pickle-brown">{t('contactUs')}</h3>
            <address className="not-italic text-pickle-brown/80 space-y-2">
              <p>{t('address1')}</p>
              <p>{t('address2')}</p>
              <p>{t('address3')}</p>
            </address>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pickle-brown">{t('getInTouch')}</h3>
            <div className="text-pickle-brown/80 space-y-2">
              <p>{t('email')}</p>
              <p>{t('phone')}</p>
              <p>{t('hours')}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-pickle-brown/10 text-center text-pickle-brown/70">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
