import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Link from 'next/link';

// icons
import { MdDashboard } from 'react-icons/md';
import { MdOutlineAddHome } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb'
import { GiArchiveRegister } from 'react-icons/gi'
import { HiOutlineDocumentChartBar } from 'react-icons/hi2'
import { BiSearchAlt2 } from 'react-icons/bi';
import { CgArrowUpR } from 'react-icons/cg'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2'
import { AiOutlineNotification } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const toggleSidebar = () => {
    setToggle(!toggle)
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={toggle} onChange={() => { }} />
      <div className="drawer-content">
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay" onClick={toggleSidebar}></label>
        <ul className="menu p-4 w-50 bg-gray-900 text-gray-300 hover:bg-gray-800">
          <div className='flex justify-end items-center'>
            <AiOutlineClose className='lg:hidden w-6 h-6' onClick={toggleSidebar} />
          </div>
          <SidebarButton Icon={MdDashboard} name="Dashboard" link="/" />
          <SidebarButton Icon={MdOutlineAddHome} name="Institution" link="/institution" />
          <SidebarButton Icon={TbReportAnalytics} name="Bi Report" link="/" />
          <SidebarButton Icon={GiArchiveRegister} name="Register Student" link="/register" />
          <SidebarButton Icon={HiOutlineDocumentChartBar} name="Registered Students" link="/registeredStudents" />
          <SidebarButton Icon={BiSearchAlt2} name="Student Search" link="/registeredStudents" />
          <SidebarButton Icon={CgArrowUpR} name="Promote Students" link="/registeredStudents" />
          <SidebarButton Icon={HiOutlineDocumentDuplicate} name="Result Management" link="/" />
          <SidebarButton Icon={AiOutlineNotification} name="Notice" link="/notice" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarButton = ({ Icon, name, link, clickHanlder }) => {
  return (
    <li>
      <Link href={link} onClick={clickHanlder}>
        <Icon className='w-6 h-6' />
        <p className='text-white'>{name}</p>
      </Link>
    </li>
  )
}