import React from 'react'
import Image from 'next/image';

interface MarketingCardProps {
    number: string;
    title: string;
    icon?: React.ReactNode;
    bgColor?: string;
};

const MarketingCard: React.FC<MarketingCardProps> = ({number, title, icon, bgColor = 'bg-white',}) => {
  return (
    <div className={`flex flex-col px-4 py-4 justify-around rounded-[12px] ${bgColor} `} >
        <div>
        {/* vector as background, get original width and height from figma file */}
        <Image src="/Vector 8.png" alt="vector background" width={300} height={40} />
        </div>
        <div className="flex flex-row justify-between rounded-[12px] text-white">
            <div className="flex flex-col">
                <h4 className="text-[20px]">{number}</h4>
                <p className="">{title} </p>
            </div>
            <div className="flex justify-center items-center">
                Icon{icon}
            </div>
        </div>
    </div>
  )
}

export default MarketingCard