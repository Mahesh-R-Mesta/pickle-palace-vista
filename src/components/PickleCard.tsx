
import React from 'react';

interface PickleCardProps {
  name: string;
  description: string;
  imageSrc: string;
  animationDelay: string;
}

const PickleCard: React.FC<PickleCardProps> = ({ name, description, imageSrc, animationDelay }) => {
  return (
    <div 
      className="pickle-card animate-fade-in" 
      style={{ animationDelay }}
    >
      <div className="overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-56 object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-pickle-brown mb-3">{name}</h3>
        <p className="text-pickle-brown/80">{description}</p>
      </div>
    </div>
  );
};

export default PickleCard;
