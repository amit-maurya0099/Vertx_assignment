import React from 'react'
// import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import menu from "../assets/threedot.png";
import logo2 from "../assets/logo2.png"

const Header = () => {
  return (
    <div className='block md:hidden bg-black '>
      <div className='flex justify-between items-center  py-2 px-4'>
        <img src={logo2} alt="/profile" className=' size-10 rounded-full'></img>
        <img src={logo} alt='logo' className='object-cover size-14'></img>
        <img src={menu} alt='menu'className='object-cover size-6'></img> 
      </div>
      <div className='flex justify-evenly text-[#5B5E66]'>
        <button className='border-b-3 border-white text-white' >Overview</button>
        <button  >Portfolio</button>
        <button >Experience</button>
        <button >Media</button>
      </div>
    </div>
  )
}

export default Header
