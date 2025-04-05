import React from 'react'
import logo from "../assets/logo.png"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import profile3 from "../assets/profile3.png"
const Sidebar = () => {
  return (
    <div className='w-[20%] h-[100vh]  border-r  border-[#5B5E66]  bg-black hidden md:block'>
      <div className='flex items-center h-12 gap-6 p-1 border-b border-[#5B5E66] '>
         <img src={logo} alt="logo" className='size-10 '></img>
         <p className='text-lg font-semibold'>Vertxlabs.Inc</p>
      </div>
      <div className='flex h-[90vh]'>
        <div className='border-r border-[#5B5E66] flex flex-col '>
          <img src={profile1} alt="profile1" className=' size-14'></img>
          <img src={profile2} alt="profile2" className=' size-14'></img>
          <img src={profile3} alt="profile3" className=' size-14'></img>
          
          
        </div>
        <div className='pl-4  pt-6'>
          <div className='text-[#555555] flex flex-col gap-6 font-semibold'>
            <p>Dashboard</p>
            <p>Analytics</p>
            <p>Connect</p>
            <p>Dealroom</p>
            <p>Profile</p>
            <p>Setting</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
