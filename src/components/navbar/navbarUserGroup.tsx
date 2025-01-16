import React from 'react';
import Image from 'next/image';

interface navbarUserGroupInterface {
    userImage: string;
    userName: string;
    userRole?: string;
    className?: string;
}

const NavbarUserGroup: React.FC<navbarUserGroupInterface> = ({ userImage, userName, userRole, className}) => {
  return (
    <div className="flex justify-between gap-2 px-2 py-2 bg-blue-400 rounded-[20px]">
        <div className="flex flex-col justify-around gap-2">
            <p className="text-[10px]">{userName}</p>
            <p className='text-sm'>{userRole}</p>
        </div>
        <div className="cursor-pointer flex items-center justify-center rounded-full">
            <Image src={userImage} width={20} height={20} alt="profile-image"/>
        </div>
    </div>
  )
}

export default NavbarUserGroup