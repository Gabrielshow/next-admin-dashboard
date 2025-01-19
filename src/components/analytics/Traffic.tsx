import React from 'react';

interface SocialTrafficProps {
    platform: string;
    visitors: string;
    clicks: string;
    clickThroughRate: string;
    className?: string;
}

const SocialTraffic: React.FC<SocialTrafficProps> = ({platform, visitors, clicks, clickThroughRate, className }) => {
  return (
    <div className={` flex flex-row justify-evenly py-2 px-2 items-center ${className}`}>
        <p>{platform}</p>
        <p>{visitors}</p>
        <p>{clicks}</p>
        <p>{clickThroughRate}</p>
    </div>
  )
}

export default SocialTraffic