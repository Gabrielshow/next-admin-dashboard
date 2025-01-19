import React from 'react'
import LiveClassesCard from '@/components/analytics/LiveClassesCard';
import LiveClassCard from '@/components/analytics/LiveClassCard';
import ClassCard from '@/components/analytics/ClassCard';
// import LiveClassesListComponent from '@/components/analytics/LiveClassesListComponent';
// import DetailsCard from '@/components/analytics/DetailsCard';

const page = () => {
  return (
    <div>
      <h4>Live Classes</h4>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <LiveClassesCard number="2,391" title="Total Live Classes Today" />
        <LiveClassesCard number="329,032" title="Total Students Enrolled in live Classes"/>
        <LiveClassesCard number="239" title="Total Teachers Assigned Today"/>
      </section>

      <section className="border-[1px] border-grey-300">
        <p className="text-bold"> Private Classes </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <ClassCard title="Total Active Private Classes" value="255" />
              <LiveClassCard title="Online Classes" liveValue='255' scheduledValue='754' className="border-l-2 border-grey-300" />
              <LiveClassCard title="Teacher's Place" liveValue='55' scheduledValue='12' className="border-l-2 border-grey-300" />
              <LiveClassCard title="Student's Place Courses" liveValue='25' scheduledValue='11' className="border-l-2 border-grey-300"/>
        </div>
      </section>
      {/* group classes */}
      <section className="border-[1px] border-grey-300">
        <p className="text-bold"> Group Classes </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <ClassCard title="Total Active Group Classes" value="255" />
              <ClassCard title="Classes Currently live" value="34" liveValue='live classes' className="border-l-2 border-grey-300" />
              <ClassCard title="Upcoming classes" value="34" liveValue='scjeduled for today' className="border-l-2 border-grey-300" />
              <ClassCard title="Average class" value="34" liveValue='students per class' className="border-l-2 border-grey-300"/>
        </div>
      </section>

      {/* Courses */}
      <section className="border-[1px] border-grey-300">
        <p className="text-bold"> Courses </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <ClassCard title="Total Active Courses" value="255" />
              <ClassCard title="Classes in Progress" value="34" className="border-l-2 border-grey-300" />
              <ClassCard title="New enrollments" value="34" liveValue='new enrollments' className="border-l-2 border-grey-300" />
              <ClassCard title="Completion Rate" value="93%" className="border-l-2 border-grey-300"/>
        </div>
      </section>
    </div>
  )
}

export default page;