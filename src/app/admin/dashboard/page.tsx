"use client"
import { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
// import Sidebar from '@/components/Sidebar';
import OverviewWelcome from '@/components/dashboard/OverviewWelcome';
import OverviewCard from '@/components/dashboard/OverviewCard';
import OverviewCountry from '@/components/dashboard/OverviewCountry';

export default function Admin() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const tutorData: string[] = [];
  const studentData: string[] = [];
  
  // Handle sidebar toggle
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <section> 
        <OverviewWelcome username={"Bekwa"}/> 
      </section>
      <section className="grid">
        <OverviewCard role={"Students"} number={642} change={23.40}/>
        <OverviewCard role={"Tutors"} number={642} change={23.40}/>
        <OverviewCard role={"Lessons"} number={642} change={23.40}/>
        <OverviewCard role={"Courses"} number={642} change={23.40}/>
      </section>
      <section className="flex flex-row justify-evenly">
        <div></div>
      <div className="flex flex-row">
        <OverviewCountry role={"Tutors"} data={tutorData} />
        <OverviewCountry role={"Students"} data={studentData} />
      </div>
      </section>
    </div>

  )}