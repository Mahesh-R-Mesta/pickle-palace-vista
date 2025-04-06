
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PickleCardProps {
  pickleKey: string;
  imageSrc: string;
  animationDelay: string;
}

const PickleCard: React.FC<PickleCardProps> = ({ pickleKey, imageSrc, animationDelay }) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="pickle-card animate-fade-in" 
      style={{ animationDelay }}
    >
      <div className="overflow-hidden">
        <img 
          src={imageSrc} 
          alt={t('name', pickleKey)} 
          className="w-full h-56 object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-pickle-brown mb-3">{t('name', pickleKey)}</h3>
        <p className="text-pickle-brown/80">{t('description', pickleKey)}</p>
      </div>
    </div>
  );
};

export default PickleCard;
