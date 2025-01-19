import React from 'react'
import Image from 'next/image';

interface MarketingCardProps {
    number: string;
    title: string;
    icon?: React.ReactNode;
};

const MarketingCard: React.FC<MarketingCardProps> = ({number, title, icon}) => {
  return (
    <div className="flex flex-col px-2 py-2 justify-around items-center" >
        <div>
        {/* vector as background, get original width and height from figma file */}
        <Image src="/Vector 8.png" alt="vector background" width={300} height={40} />
        </div>
        <div className="flex flex-row justify-between gap-4 rounded-[12px]">
            <div className="flex flex-col">
                <h4>{number}</h4>
                <p>{title} </p>
            </div>
            <div className="flex justify-center items-center">
                Icon{icon}
            </div>
        </div>
    </div>
  )
}

export default MarketingCard