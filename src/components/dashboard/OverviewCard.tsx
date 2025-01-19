import React from 'react';
import ImageMapper from './ImageMapper';
import Image from 'next/image';

interface OverviewCardProps {
    role: string;
    number: string;
    change: number;
    icon?: React.ReactNode;
    className?: string;
}

// first overview Card background rgba(254, 126, 81, 1)
// second overview Card background rgba(113, 53, 123, 1)
// rgba(114, 192, 198, 1)
const data = ['/user1.png', '/user2.png', '/user3.png', '/user4.png', '/user5.png'];


const OverviewCard: React.FC<OverviewCardProps> = ({role, number=542, change=25.4, icon, className}) => {
  return (
    <div className={`rounded-[12px] h-[236px] ${className}`}>
        <div className="flex flex-row justify-between px-2 py-2"> 
        <div className="flex flex-col gap-4">
            <ImageMapper data={data} />
            <h3> 
                {role}
            </h3>

        </div>

        <div className="flex flex-col gap-4">
            <h4>{number}</h4>
            <p>{change} <span>{icon}</span> </p>
        </div>
        </div>
        <div>
            <Image src="/Vector 8.png" alt="vector background" width={391} height={40} />
        </div>

    </div>
  )
}

export default OverviewCard