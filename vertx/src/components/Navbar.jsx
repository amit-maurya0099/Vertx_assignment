import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { DiAptana } from "react-icons/di";
const Navbar = () => {
  return (
    <div className='w-full bg-black  flex justify-evenly fixed bottom-0 py-1'>
       <button className='flex flex-col justify-center items-center '>
        <MdOutlineDashboard/>
        <p className='text-sm'>Dashboard</p>
        </button> 
        <button className='flex flex-col justify-center items-center'>
        <MdAnalytics/>
        <p className='text-sm'>Analytics</p>
        </button> 
        <button className='flex flex-col justify-center items-center'>
        <FaEarthAsia/>
        <p className='text-sm'>Connect</p>
        </button> 
        <button className='flex flex-col justify-center items-center'>
        <FaRegBell/>
        <p className='text-sm'>Activity</p>
        </button> 
        <button className='flex flex-col justify-center items-center'>
        <DiAptana/>
        <p className='text-sm'>Dealroom</p>
        </button> 
        
      
    </div>
  )
}

export default Navbar
