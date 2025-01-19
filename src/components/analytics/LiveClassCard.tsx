import React from 'react';

interface LiveClassCardProps {
    title: string;
    liveValue: string;
    scheduledValue: string;
    className?: string;
}

const LiveClassCard: React.FC<LiveClassCardProps> = ({title, liveValue, scheduledValue, className}) => {
  return (
    <div className={`flex flex-col py-2 px-2 ${className}`}>
       <p className="text-small text-grey-300">{title} </p>
       <h3>{liveValue} <span className="text-[8px]">live</span> | {scheduledValue} <span className="text-[8px]">scheduled</span></h3>
    </div>
  )
}

export default LiveClassCard