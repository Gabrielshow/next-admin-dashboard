import React from 'react';
// import UserMap from '@/components/dashboard/UserMap';
import OverviewCountry from '@/components/dashboard/OverviewCountry';
// import DashboardSeparator from '@/components/analytics/DashboardSeparator';
import { tutorData, studentData } from '@/data/constant';
import MarketingCard from '@/components/analytics/MarketingCard';
import PieChart from '@/components/analytics/PieChart';


const page = () => {
  return (
    <div>
      <p className="font-bold mb-4"> Marketing Analytics </p>
      <section className="border border-grey-300">
        <div className="flex flex-row justify-between py-2 px-2 border border-grey-300">
          <p className="font-bold">User Location</p>
          <button className="flex justify-center items-center bg-grey-700"> By Country </button>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row">
          {/* <div className="flex-1">
          <UserMap/>
          </div> */}
          {/* <DashboardSeparator className="my-4" height="4px" /> */}
          <div className="flex-1 flex flex-col md:flex-row lg:flex-row border-grey-300 border-l-2">
            <OverviewCountry role={"Students"} data={studentData} />
            <OverviewCountry role={"Tutors"} data={tutorData} />
          </div>
        </div>

      </section>

      <div className="mt-4 flex justify-between py-2 px-2 ">
        <h3 className="font-bold">Key Performance Indicators(KPIs) </h3>
        <div>
          {/* change this button to input later */}
          <p>View <button className="cursor-pointer">all time</button></p>
        </div>
        </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <MarketingCard number={"50000"} title={"Total Reach"} bgColor="bg-[rgba(254,126,81,1)]" />
          <MarketingCard number={"1200"} title={"conversions"} bgColor="bg-[rgba(113,53,123,1)]"/>
          <MarketingCard number={"$5000"} title={"Marketing Spend"}  bgColor="bg-[rgba(114,192,198,1)]"/>
          <MarketingCard number={"240%"} title={"ROI"} bgColor="bg-[rgba(114,192,198,1)]" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        <PieChart />
        <PieChart />
        <PieChart />
      </section>
    </div>
  )
}

export default page