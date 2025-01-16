import React from 'react';

interface SeparatorProps {
    className?: string;
}

const Separator: React.FC<SeparatorProps> = ({className}) => {
  return (
    <div className={`${className} bg-[#9193A5]`}>
        <hr/>
    </div>
  )
}

export default Separator