import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import SidebarComponent from '@/components/sidebar/sidebarComponent';
import SidebarHeader from '@/components/SidebarHeader';
import Search from '@/components/sidebar/search';
import Separator from '@/components/sidebar/separator';
import './Sidebar.css';
import { FaHouse } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbTrashFilled } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { MdContentPaste } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string, path: string) => {
    if (expandedSection === section) {
      setExpandedSection(null); // Collapse if it's already open
    } else {
      setExpandedSection(section); // Expand the clicked section
    }
    router.push(path); // Navigate to the corresponding page
  };

  const handleSubSectionClick = (path: string) => {
    router.push(path); // Navigate to the corresponding subitem page
  };

  return (
    <div
      className={`w-64 bg-[#171717] text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'block' : 'hidden'}`}
    >
      <div className="mb-6">
        <SidebarHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
      </div>
      <div className="mb-4 px-4">
        <Search icon={<CiSearch />}/>
      </div>

      <div className="px-4">
        <Separator />
      </div>

      <div className="scrollable-sidebar max-h-[70vh]">
      <ul className="mt-4 px-4 text-[14px]">
        {/* Dashboard */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'dashboard' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<FaHouse/>}
            text="Dashboard"
            onClick={() => handleSectionClick('dashboard', '/admin/dashboard')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'dashboard'}
            isOpen={expandedSection === 'dashboard'}
          />
        </li>

        {/* Analytics */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'analytics' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<DiGoogleAnalytics/>}
            text="Analytics"
            onClick={() => handleSectionClick('analytics', '/admin/analytics')} // Pass path to navigate to
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/analytics/marketing')}>Marketing</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/analytics/social')}>Social</div>,
              <div key="3" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/analytics/sales')}>Sales</div>,
              <div key="4" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/analytics/liveClasses')}>Live Classes</div>,
            ]}
            active={expandedSection === 'analytics'}
            isOpen={expandedSection === 'analytics'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* Notifications */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'notifications' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<IoIosNotificationsOutline/>}
            text="Notifications"
            onClick={() => handleSectionClick('notifications', '/admin/notifications')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'notifications'}
            isOpen={expandedSection === 'notifications'}
          />
        </li>

        {/* CRM */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'crm' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<LuMessageCircleMore />}
            text="CRM"
            onClick={() => handleSectionClick('crm', '/admin/crm')} // Pass path to navigate to
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/crm/messages')}>Messages</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/crm/requests')}>Requests</div>,
              <div key="3" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/crm/calls')}>Calls</div>,
              <div key="4" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/crm/sms')}>SMS</div>,
              <div key="5" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/crm/emails')}>Emails</div>,
            ]}
            active={expandedSection === 'crm'}
            isOpen={expandedSection === 'crm'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* SEO */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'seo' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-search" />}
            text="SEO"
            onClick={() => handleSectionClick('seo', '/admin/seo')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'seo'}
            isOpen={expandedSection === 'seo'}
          />
        </li>

        {/* Content Management */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'contentManagement' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<MdContentPaste />}
            text="Content Management"
            onClick={() => handleSectionClick('contentManagement', '/admin/contentManagement')} // Pass path to navigate to
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/contentManagement/blogs')}>Blogs</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/contentManagement/courses')}>Courses</div>,
            ]}
            active={expandedSection === 'contentManagement'}
            isOpen={expandedSection === 'contentManagement'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* User Management */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'userManagement' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<FaUsers />}
            text="User Management"
            onClick={() => handleSectionClick('userManagement', '/admin/userManagement')} // Pass path to navigate to
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/userManagement/students')}>Students</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/userManagement/teachers')}>Teachers</div>,
              <div key="3" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/userManagement/accounts')}>Accounts</div>,
            ]}
            active={expandedSection === 'userManagement'}
            isOpen={expandedSection === 'userManagement'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* Bookings and Payments */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'bookingAndPayment' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<CiCreditCard1 />}
            text="Bookings & Payments"
            onClick={() => handleSectionClick('bookingAndPayment', '/admin/bookings&payments')} // Pass path to navigate to
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/bookings&payments/bookings')}>Bookings</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/bookings&payments/payments')}>Payments</div>,
            ]}
            active={expandedSection === 'bookingAndPayment'}
            isOpen={expandedSection === 'bookingAndPayment'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* Products and Packages */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'productAndPackage' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<FaTag />}
            text="Products and Packages"
            onClick={() => handleSectionClick('productAndPackage', '/admin/products&packages')} 
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/products&packages/products')}>Products</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/products&packages/categories')}>Categories</div>,
              <div key="3" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/products&packages/subjects')}>Subjects</div>,
              <div key="4" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/products&packages/managePackages')}>Manage Packges</div>,
            ]}
            active={expandedSection === 'productAndPackage'}
            isOpen={expandedSection === 'productAndPackage'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* Promotions */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'promotions' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<CiGift />}
            text="Promotions"
            onClick={() => handleSectionClick('promotions', '/admin/promotions')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'promotions'}
            isOpen={expandedSection === 'promotions'}
          />
        </li>

        {/* Help Desk */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'helpDesk' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<MdLiveHelp />}
            text="Help Desk"
            onClick={() => handleSectionClick('helpDesk', '/admin/helpDesk')} // Pass path to navigate to
            dropdown={[
              <div key="1" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/helpDesk/FAQs')}>FAQs</div>,
              <div key="2" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/helpDesk/complaints')}>Complaints</div>,
              <div key="3" className="cursor-pointer" onClick={() => handleSubSectionClick('/admin/helpDesk/articles')}>Articles</div>,
            ]}
            active={expandedSection === 'helpDesk'}
            isOpen={expandedSection === 'helpDesk'}
            handleSubSectionClick={handleSubSectionClick}
          />
        </li>

        {/* Trash */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'trash' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<TbTrashFilled />}
            text="Trash"
            onClick={() => handleSectionClick('trash', '/admin/trash')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'trash'}
            isOpen={expandedSection === 'trash'}
          />
        </li>

        <div className="px-4">
          <Separator />
        </div>

        {/* Enable Guide */}
        <li className={`mt-4 mb-4 cursor-pointer ${expandedSection === 'enableGuide' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<i className="fas fa-lightbulb" />}
            text="Enable Guide"
            onClick={() => handleSectionClick('enableGuide', '/admin/enableGuide')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'enableGuide'}
            isOpen={expandedSection === 'enableGuide'}
          />
        </li>

        {/* Settings */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'settings' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<CiSettings />}
            text="Settings"
            onClick={() => handleSectionClick('settings', '/admin/settings')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'settings'}
            isOpen={expandedSection === 'settings'}
          />
        </li>

        {/* Log Out */}
        <li className={`mb-4 cursor-pointer ${expandedSection === 'logOut' ? 'border-gradient' : ''}`}>
          <SidebarComponent
            icon={<RiLogoutBoxLine />}
            text="Log Out"
            onClick={() => handleSectionClick('logOut', '/admin/log-out')} // Pass path to navigate to
            dropdown={[]}
            active={expandedSection === 'logOut'}
            isOpen={expandedSection === 'logOut'}
          />
        </li>
      </ul>
      </div>

      <style jsx>{`
        .border-gradient {
          border: 2px solid transparent;
          border-image: linear-gradient(to right, #F98B91, #B871D1, #8BBDFE) 1;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
