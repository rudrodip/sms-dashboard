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
  const toggleSidebar = () => setToggle(!toggle)

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
          <li>
            <span>
              <MdDashboard className='w-6 h-6' />
              <Link href="/">Dashboard</Link>
            </span>
          </li>
          <li>
            <span>
              <MdOutlineAddHome className='w-6 h-6' />
              <Link href="/institution">Institution</Link>
            </span>
          </li>
          <li>
            <span>
              <TbReportAnalytics className='w-6 h-6' />
              <Link href="/">Bi Report</Link>
            </span>
          </li>
          <li>
            <span>
              <GiArchiveRegister className='w-6 h-6' />
              <Link href="/register">Register Student</Link>
            </span>
          </li>
          <li>
            <span>
              <HiOutlineDocumentChartBar className='w-6 h-6' />
              <Link href="/registeredStudents">Registered Students</Link>
            </span>
          </li>
          <li>
            <span>
              <BiSearchAlt2 className='w-6 h-6' />
              <Link href="/registeredStudents">Student Search</Link>
            </span>
          </li>
          <li>
            <span>
              <CgArrowUpR className='w-6 h-6' />
              <Link href="/registeredStudents">Promote Students</Link>
            </span>
          </li>
          <li>
            <span>
              <HiOutlineDocumentDuplicate className='w-6 h-6' />
              <Link href="/">Result Management</Link>
            </span>
          </li>
          <li>
            <span>
              <AiOutlineNotification className='w-6 h-6' />
              <Link href="/notice">Notice</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;