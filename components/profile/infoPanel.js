import React from 'react'

const InfoPanel = ({ userInfo }) => {
  return (
    <div className='info'>
      <h1 className="text-3xl my-2 font-bold pt-8 lg:pt-0">{userInfo?.name}</h1>
      <div className='text-md mt-0.5'>
        <span className='font-semibold'>Session: </span>
        <span>{userInfo?.session}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Class: </span>
        <span>{userInfo?.class}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Roll: </span>
        <span>{userInfo?.roll}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Student ID: </span>
        <span>{userInfo?.studentID}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Email: </span>
        <a href={`mailto:${userInfo?.email}`} className='underline text-blue-400'>{userInfo?.email}</a>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Phone: </span>
        <a href={`tel:${userInfo?.phone}`}>{userInfo?.phone}</a>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Father's name: </span>
        <span>{userInfo?.fname}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Mother's name: </span>
        <span>{userInfo?.mname}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Father's contact: </span>
        <span>{userInfo?.fcontact}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Mother's contact: </span>
        <span>{userInfo?.mcontact}</span>
      </div>
      <div className='text-lg mt-2'>
        <span className='font-semibold'>Birth Registration Number: </span>
        <span>{userInfo?.brn}</span>
      </div>
    </div>
  )
}

export default InfoPanel