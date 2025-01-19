import React from 'react';
// import Image from 'next/image';

interface SocialCardProps {
    className?: string;
    icon?: React.ReactNode;
    mode: string;
    impressions?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({icon, className, mode, impressions='impressions'}) => {
  return (
    <div className={`flex flex-row justify-start items-center gap-2 ${className}`}>
        <div>
            {icon}
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col justify-evenly">
            <p>{mode}</p>
            <p> 235k </p>
            </div>

            <div className="flex flex-col justify-evenly">
                <p> {impressions} </p>
                <p> 235k </p>
            </div>

        </div>
    </div>
  )
}

export default SocialCard