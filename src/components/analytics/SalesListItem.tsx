import React from 'react';
import Image from 'next/image';
import { Status } from '@/types/status';

interface SalesUserGroupProps {
  username: string;
}

interface SalesListItemProps {
  id: string | number;
  username: string;
  recipient: string;
  date: string;
  details: string;
  amount: string;
  status: Status;
  className?: string;
}

const SalesUserGroup: React.FC<SalesUserGroupProps> = ({ username }) => {
  return (
    <div>
      <Image
        src="/help.png"
        width={20}
        height={20}
        className="rounded-full"
        alt="buyer-image"
      />{' '}
      {username}
    </div>
  );
};

const SalesListItem: React.FC<SalesListItemProps> = ({
  id,
  username,
  recipient,
  date,
  details,
  amount,
  status,
  className,
}) => {
  // Define colors and shades based on status
  const statusColors: Record<Status, { bgColor: string; borderColor: string; textColor: string }> = {
    Paid: {
      bgColor: 'bg-green-500',
      borderColor: 'bg-green-700', // Thicker shade for border
      textColor: 'text-green-700', // Text color same as the border
    },
    Pending: {
      bgColor: 'bg-orange-500',
      borderColor: 'bg-orange-700',
      textColor: 'text-orange-700',
    },
    Failed: {
      bgColor: 'bg-red-500',
      borderColor: 'bg-red-700',
      textColor: 'text-red-700',
    },
  };

  const { bgColor, borderColor, textColor } = statusColors[status];

  return (
    <div className={`flex flex-row justify-evenly items-center ${className}`}>
      <div>
        <p>{id}</p>
        <SalesUserGroup username={username} />
      </div>

      <div>
        <SalesUserGroup username={recipient} />
      </div>

      <div>{date}</div>

      <div>{details}</div>

      <div className={`flex items-center space-x-2 ${bgColor} px-3 py-1`}>
        {/* Circular div with thicker shade */}
        <div className={`rounded-full w-[10px] h-[10px] ${borderColor}`} />
        {/* Status text with the same color as the border */}
        <div className={`font-bold ${textColor}`}>{status}</div>
      </div>

      <div>...</div>
    </div>
  );
};

export default SalesListItem;
