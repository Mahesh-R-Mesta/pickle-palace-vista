
import React from 'react';
import PickleCard from './PickleCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Mock data for pickles
const pickles = [
  {
    id: 1,
    key: "tenderMango",
    imageSrc: "/appe.jpg"
  },
  {
    id: 2,
    key: "jeerigeMango",
    imageSrc: "/jire.jpg"
  },
  {
    id: 3,
    key: "gundappeMango",
    imageSrc: "/midi.jpg"
  },
  {
    id: 4,
    key: "lemon",
    imageSrc: "/limbo.jpg"
  },
  {
    id: 5,
    key: "mix",
    imageSrc: "/mix.jpg"
  }
];

const PicklesSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="pickles" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-pickle-brown section-heading mb-12">
          {t('picklesSectionTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pickles.map((pickle, index) => (
            <PickleCard 
              key={pickle.id}
              pickleKey={pickle.key}
              imageSrc={pickle.imageSrc}
              animationDelay={`${index * 0.15}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PicklesSection;
