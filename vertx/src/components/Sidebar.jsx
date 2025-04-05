import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import add from "../assets/add.png"
const Sidebar = () => {
  return (
    <div className='w-[20%] h-[100vh]  border-r  border-[#5B5E66]  bg-black hidden md:block'>
      <div className='flex items-center h-12 gap-6 p-1 border-b border-[#5B5E66] '>
         <img src={logo} alt="logo" className='size-10 '></img>
         <p className='text-lg font-semibold'>Vertxlabs.Inc</p>
      </div>
      <div className='flex h-[90vh]'>
        <div className='border-r border-[#5B5E66] flex flex-col justify-between'>
          <img src={profile} alt="profile" className='size-16 border-b border-[#5B5E66]'></img>
          <span className='border-t border-[#5B5E66] pt-4 pl-2'>
          <img src={add} alt="add" className='size-10  '></img></span>
        </div>
        <div className='pl-4  pt-6'>
          <div className='text-[#555555] flex flex-col gap-6 font-semibold'>
            <p>Dashboard</p>
            <p className='text-white'>Analytics</p>
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
