import React from 'react';
// import UserMap from '@/components/dashboard/UserMap';
import OverviewCountry from '@/components/dashboard/OverviewCountry';
import DashboardSeparator from '@/components/analytics/DashboardSeparator';
import { tutorData, studentData } from '@/data/constants';

const page = () => {
  return (
    <div>
      <section>
        <div>headers</div>
        <div>
          {/* <UserMap/> */}
          <DashboardSeparator />
          <div>
            <OverviewCountry role={"Students"} data={studentData} />
            <OverviewCountry role={"Tutors"} data={tutorData} />
          </div>
        </div>

      </section>
    </div>
  )
}

export default page