import React from 'react';
import Image from 'next/image';

interface LiveClassesCardProps {
    number: string;
    title: string;
    className?: string;
}

const LiveClassesCard: React.FC<LiveClassesCardProps> = ({number, title, className}) => {
  return (
    <div className={`flex flex-col gap-2 py-2 px-2 ${className}`}>
        <div>
            <Image src='vector8.png' width={40} height={40} alt="class-vector" /> 
        </div>
        <div>
            <div>
               <p> {number} </p>
               <p className="nowrap-whitespace text-small"> {title} </p>
            </div>
            <div>
                <Image src='help.png' width={20} height={20} alt="icon" />
            </div>
        </div>
    </div>
  )
}

export default LiveClassesCard