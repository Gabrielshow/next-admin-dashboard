import React from 'react'

interface ClassCardProps {
    title: string;
    value: string
    liveValue?: string;
    className?: string;
}

const ClassCard: React.FC<ClassCardProps> = ({className, title, value, liveValue}) => {
  return (
    <div className={`flex flex-column py-2 px-2 ${className}`}>
       <p className="text-small text-grey-300 nowrap-whitespace">{title} </p>
       <h3>{value} <span className="text-[8px] text-grey">{liveValue}</span></h3>
    </div>
  )
}

export default ClassCard;  