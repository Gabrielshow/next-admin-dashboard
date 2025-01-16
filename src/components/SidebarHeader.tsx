import React from 'react';
import Image from 'next/image';

interface SidebarHeaderProps {
    logo?: string;
    vector?: React.ReactNode;
    className?: string;
    isSidebarOpen: boolean
    setIsSidebarOpen: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({logo, vector, className, isSidebarOpen, setIsSidebarOpen}) => {
//    const defaultLogo = '/educify.png';
//    const defaultVector = '/vector.png'

    return(
        <div className={`flex w-full flex-row bg-[#171717] h-[84px] justify-between items-center px-4 py-4 border-b-2 border-[#9193A5] ${className}`}>
            <Image src='/image.png'
             width={97} height={25} alt="educify" className="cursor-pointer"/>
            <div onClick={setIsSidebarOpen}>
                <Image src='/vector.png' width={20} height={20} alt="sidebarIcon"/></div>
        </div>

    )
}

export default SidebarHeader;