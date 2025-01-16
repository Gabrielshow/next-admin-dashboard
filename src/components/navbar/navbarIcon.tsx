import React from 'react';
import Image from 'next/image';

interface NavbarIconInterface {
  icon: string;      // Icon to be displayed in the center
  number?: string;   // Optional number to float at the top-right
  className?: string; // Optional className for custom styling
  onClick?: () => void; // Optional click handler
}

const NavbarIcon: React.FC<NavbarIconInterface> = ({ icon, number, className, onClick }) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className} cursor-pointer`} 
      onClick={onClick}
    >
      {/* Circular Div with Icon */}
      <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
        <Image src={icon} alt="icon" width={20} height={20} />
      </div>

      {/* Floating number */}
      {number && (
        <div className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center z-10">
          {number}
        </div>
      )}
    </div>
  );
};

export default NavbarIcon;
