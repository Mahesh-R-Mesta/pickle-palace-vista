
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 50 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <circle cx="25" cy="25" r="23" fill="#FEF7E4" stroke="#E4A11B" strokeWidth="2" />
        <path d="M15 20C15 16.5 20 13 25 13C30 13 35 16.5 35 20C35 23.5 30 24 25 24C20 24 15 23.5 15 20Z" fill="#556B2F" />
        <path d="M18 32C18 28.5 21 25 25 25C29 25 32 28.5 32 32C32 35.5 29 38 25 38C21 38 18 35.5 18 32Z" fill="#D35400" />
        <path d="M25 13.5V24.5" stroke="#8B4513" strokeWidth="1.5" />
        <path d="M25 24.5V37.5" stroke="#8B4513" strokeWidth="1.5" />
        <path d="M16 20C19 22 22 23 25 23C28 23 31 22 34 20" stroke="#8B4513" strokeWidth="1.5" />
        <path d="M19 32C21 34 23 35 25 35C27 35 29 34 31 32" stroke="#8B4513" strokeWidth="1.5" />
      </svg>
      <span className="text-2xl font-bold font-playfair text-pickle-brown">Vaishnavi Pickles</span>
    </div>
  );
};

export default Logo;
