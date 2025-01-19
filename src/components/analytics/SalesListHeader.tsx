import React from 'react'

interface SalesListHeaderProps {
  id: string | number;
  username: string;
  recipient: string;
  date: string;
  details: string;
  amount: string;
  status: string;
  className?: string;
}

const SalesListHeader: React.FC<SalesListHeaderProps> = ({ id,
  username,
  recipient,
  date,
  details,
  amount,
  status,
  className}) => {
  return (
        <div className={`flex flex-row justify-evenly items-center ${className}`}>
      <div className="flex flex-row gap-3">
        <p className="text-bold">{id}</p>
        <div className="text-bold">{username}
      </div>

      <div className="text-bold">
        {recipient}
      </div>

      <div className="text-bold">{date}</div>

      <div className="text-bold">{details}</div>

      <div className="text-bold">{amount} </div>

      <div className="text-bold">
       {status}
      </div>

      <div>''</div>
    </div>
    </div>
)
}


export default SalesListHeader;