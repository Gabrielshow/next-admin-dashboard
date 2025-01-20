"use client";
import { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
// import Sidebar from '@/components/Sidebar';
import OverviewWelcome from '@/components/dashboard/OverviewWelcome';
import OverviewCard from '@/components/dashboard/OverviewCard';
import OverviewCountry from '@/components/dashboard/OverviewCountry';
import UserMap from '@/components/dashboard/UserMap'
import { AiOutlineRise } from "react-icons/ai";

export default function Admin() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const tutorData = [
    { countryCode: 'US', countryName: 'United States', countryPopulation: 331002651 },
    { countryCode: 'IN', countryName: 'India', countryPopulation: 1380004385 },
    { countryCode: 'GB', countryName: 'United Kingdom', countryPopulation: 67886011 },
  ];
  
  const studentData = [
    { countryCode: 'US', countryName: 'United States', countryPopulation: 331002651 },
    { countryCode: 'NG', countryName: 'Nigeria', countryPopulation: 206139589 },
    { countryCode: 'BR', countryName: 'Brazil', countryPopulation: 212559417 },
  ];
  
  // Handle sidebar toggle
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <section> 
        <OverviewWelcome username={"Bekwa"}/> 
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        <OverviewCard role={"Students"} number={"642"} change={23.40} bgColor="bg-[rgba(254,126,81,1)]" icon={<AiOutlineRise />}/>
        <OverviewCard role={"Tutors"} number={"642"} change={23.40} bgColor="bg-[rgba(113,53,123,1)]" icon={<AiOutlineRise />}/>
        <OverviewCard role={"Lessons"} number={"642"} change={23.40} bgColor="bg-[rgba(114,192,198,1)]" icon={<AiOutlineRise />}/>
        <OverviewCard role={"Courses"} number={"642"} change={23.40} bgColor="bg-[rgba(114,192,198,1)]" icon={<AiOutlineRise />}/>
      </section>
      <section className="flex flex-col md:flex-row justify-between mt-4">
        <div className="flex-1"><UserMap/></div>
        <div className="flex-1 flex flex-col md:flex-row justify-between">
          <div className="flex-1 mr-2">
            <OverviewCountry role={"Tutors"} data={tutorData} />
          </div>
          <div className="flex-1 ml-2">
            <OverviewCountry role={"Students"} data={studentData} />
          </div>
        </div>
      </section>
    </div>
  );
}