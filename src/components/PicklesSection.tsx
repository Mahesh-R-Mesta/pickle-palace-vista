
import React from 'react';
import PickleCard from './PickleCard';

// Mock data for pickles
const pickles = [
  {
    id: 1,
    name: "Tender Mango Pickle",
    description: "A tangy delight made from young, tender raw mangoes, carefully selected and preserved with aromatic spices for an unforgettable taste experience.",
    imageSrc: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Jeerige Mango Pickle",
    description: "Our special cumin-infused mango pickle blends the sweetness of ripe mangoes with the earthy warmth of cumin seeds for a perfectly balanced flavor.",
    imageSrc: "https://images.unsplash.com/photo-1602456546655-d48f1c9a5741?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Gundappe Mango Pickle",
    description: "Made from the rare Gundappe variety of mangoes, this pickle offers a unique sweet-sour profile with hints of spiciness that brings alive any meal.",
    imageSrc: "https://images.unsplash.com/photo-1557053506-91e48fb4dba1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    name: "Lemon Pickle",
    description: "Bursting with citrusy freshness, our lemon pickle combines sun-ripened lemons with a perfect blend of spices for a zesty, mouthwatering accompaniment.",
    imageSrc: "https://images.unsplash.com/photo-1546198632-9ef4a06d43b4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    name: "Mix Pickle",
    description: "A medley of fresh vegetables and fruits, carefully preserved with our secret spice blend to create a symphony of flavors that elevate any meal.",
    imageSrc: "https://images.unsplash.com/photo-1607434036242-051040ee1ea2?auto=format&fit=crop&q=80&w=1000"
  }
];

const PicklesSection: React.FC = () => {
  return (
    <section id="pickles" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-pickle-brown section-heading mb-12">
          Our Traditional Pickles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pickles.map((pickle, index) => (
            <PickleCard 
              key={pickle.id}
              name={pickle.name}
              description={pickle.description}
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
