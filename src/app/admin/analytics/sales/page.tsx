import React from 'react'
import MarketingCard from '@/components/analytics/MarketingCard';
// import UserMap from '@/components/dashboard/UserMap';
import { studentData } from '@/data/constant'
import OverviewCountry from '@/components/dashboard/OverviewCountry';
import SalesCharts from '@/components/analytics/SalesCharts';
import SalesComponents from '@/components/analytics/SalesComponent';

const page = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MarketingCard number={"$9,550,000"} title={"Total Revenue"}/>
        <MarketingCard number={"$581,200"} title={"Total Expense"} />
        <MarketingCard number={"$415,250"} title={"Total income"}/>
        <MarketingCard number={"$32,908"} title={"Total Sales"}/>
      </section>

      <div className="mt-4 flex flex-column gap-2">
        <p className="text-small"> Sales by Location</p>
        <h4 className="text-bold"> 25 Countries </h4>
      </div>
      <section>
        {/* <div><UserMap/></div> */}
        <div>
          <OverviewCountry role={"Country List"} data={studentData}/>
        </div>
      </section>

      {/* find this type of map and display */}
      <section className="mt-4">
        <SalesCharts />
      </section>

      <section className="mt-2">
        <div>
          <h4 className="text-bold">Recent Sales</h4>
          <p className=""><span className="text-blue-400 cursor-pointer">1-10</span> of 255 </p>
        </div>
        <SalesComponents />
      </section>
    </div>
  )
}

export default page