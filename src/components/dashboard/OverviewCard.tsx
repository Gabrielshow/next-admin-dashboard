import React from 'react';
import ImageMapper from './ImageMapper';
import Image from 'next/image';

interface OverviewCardProps {
    role: string;
    number: string;
    change: number;
    icon?: React.ReactNode;
    className?: string;
    bgColor?: string;
}

const data = ['/user1.png', '/user2.png', '/user3.png', '/user4.png', '/user5.png'];

// Inside OverviewCard component:
const OverviewCard: React.FC<OverviewCardProps> = ({
  role,
  number = "542",
  change = 25.4,
  icon,
  className,
  bgColor = 'bg-white',
}) => {
  return (
    <div className={`rounded-[12px] flex flex-col h-[236px] ${bgColor} ${className}`}>
      <div className="flex-1 flex flex-row justify-between gap-4 items-center px-2 py-2">
        <div className="flex flex-col gap-8 w-[200px]">
          <ImageMapper data={data} />
          <h3 className="underline text-lg pl-2">{role}</h3>
        </div>
        <div className="flex flex-col text-white">
          <h4 className="text-[24px]">{number}+</h4>
          <p className="text-sm flex items-center">
            +{change}% <span>{icon}</span>
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/Vector 8.png"
          alt="vector background"
          width={302}
          height={40}
        />
      </div>
    </div>
  );
};

export default OverviewCard;