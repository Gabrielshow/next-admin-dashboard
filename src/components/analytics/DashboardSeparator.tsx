import React from 'react';

interface DashboardSeparatorProps {
    className?: string;
    height?: string; // Optional height prop
}

const DashboardSeparator: React.FC<DashboardSeparatorProps> = ({ className, height = '1px' }) => {
  return (
    <div className={`${className} bg-[#9193A5]`} style={{ height }}>
    </div>
  );
}

export default DashboardSeparator;