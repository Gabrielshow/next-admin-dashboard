"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-0 bg-gray-800 text-white w-64 duration-300 transition-transform z-30`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Right Sidebar */}
      {isRightSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-40">
          <div className="p-4">Right sidebar contents</div>
<<<<<<< HEAD
          <p onClick={toggleRightSidebar} className='cursor-pointer'> X </p>
=======
>>>>>>> 750c08f54202bdc0335410dfdbb6e2311a085699
        </div>
      )}

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar
          className="bg-white z-20"
          userName="Bekwa Undie"
          toggleSidebar={toggleSidebar}
          toggleRightSidebar={toggleRightSidebar}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
