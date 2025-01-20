import React from 'react';
import SalesListItem from '@/components/analytics/SalesListItem';
import SalesListHeader from '@/components/analytics/SalesListHeader';
import { salesData } from '@/data/constant';
// import { Status } from '@/types/status';


const SalesComponent = () => {
  
  return (
    <div className="flex flex-col">
      <SalesListHeader
        id="ID"
        username="Username"
        recipient="Recipient"
        amount="Amount"
        details="Details"
        date="Date"
        status="Status"
      />
      {salesData && salesData.map((item, index) => (
        <SalesListItem
          key={item.id}
          id={item.id}
          username={item.username}
          recipient={item.recipient}
          date={item.date}
          details={item.details}
          amount={item.amount}
          status={item.status}
          className={index % 2 === 1 ? 'bg-grey-300' : ''} // Add bg-grey for even indexed items
        />
      ))}
    </div>
  );
};

export default SalesComponent;
