
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PickleCardProps {
  pickleKey: string;
  imageSrc: string;
  animationDelay: string;
}

const weightOptions = [
  { value: "250", label: "250 grams" },
  { value: "500", label: "500 grams" },
  { value: "1000", label: "1000 grams" }
];

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
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-pickle-brown mb-2">{t('availableWeights')}</h4>
          <div className="flex flex-wrap gap-2">
            {weightOptions.map((option) => (
              <div 
                key={option.value} 
                className="px-3 py-2 bg-pickle-green/10 rounded-md text-sm text-pickle-brown border border-pickle-green/30"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickleCard;
