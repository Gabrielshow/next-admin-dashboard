import React from 'react';
import ImageMapper from './ImageMapper';

interface OverviewCardProps {
    role: string;
    number: number;
    change: number;
    icon?: React.ReactNode;
}

// first overview Card background rgba(254, 126, 81, 1)
// second overview Card background rgba(113, 53, 123, 1)
// rgba(114, 192, 198, 1)
const data = ['/user1.png', '/user2.png', '/user3.png', '/user4.png', '/user5.png'];


const OverviewCard: React.FC<OverviewCardProps> = ({role, number=542, change=25.4, icon}) => {
  return (
    <div className="rounded-[12px] h-[236px] w-[391px]">
        <div className="flex flex-row justify-between px-2 py-2"> 
        <div className="flex flex-column gap-2">
            <ImageMapper data={data} />
            <h3> 
                {role}
            </h3>

        </div>

        <div>
            <h4> {number} </h4>
            <p> {change} <span> {icon} </span> </p>
        </div>
        </div>

    </div>
  )
}

export default OverviewCard