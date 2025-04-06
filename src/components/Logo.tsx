
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
  <img 
    src="/logo.svg" 
    alt="Logo" 
    style={{ width: "58px", height: "58px" }} 
    className="object-contain"
  />
  <span className="text-2xl font-bold font-playfair text-pickle-brown">
    Vaishnavi Pickles
  </span>
</div>
  );
};

export default Logo;
