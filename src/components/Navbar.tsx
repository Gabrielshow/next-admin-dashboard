import React from 'react';
import Image from 'next/image';
import NavbarIcon from '@/components/navbar/navbarIcon';
import NavbarUserGroup from '@/components/navbar/navbarUserGroup';

interface NavbarProps {
  userImage?: string;
  userRole?: string;
  userName: string;
  toggleSidebar: () => void;
  toggleRightSidebar?: () => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userImage, userRole='admin', userName, toggleSidebar,  toggleRightSidebar, className }) => {
  return (
    <div className={`flex flex-row justify-between py-4 px-4 items-center ${className}`}>
      <div onClick={toggleSidebar}>
        <Image src="/Menu.png" width={20} height={20} className="flex items-center justify-center" alt="hamburger-menu" />
      </div>

      <div className="flex gap-4">
        {/* Navbar Icons */}
        <NavbarIcon 
          icon="/help.png"
        />
        <NavbarIcon 
          icon="/help.png"
          number="24"                    
          onClick={toggleRightSidebar} 
        />
        {/* User Group */}
        <NavbarUserGroup userImage={userImage || '/help.png'} userName={userName} userRole={userRole} />
      </div>
    </div>
  );
};

export default Navbar;
