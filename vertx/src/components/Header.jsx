import React from 'react'
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import menu from "../assets/threedot.png";

const Header = () => {
  return (
    <div className='block md:hidden bg-black '>
      <div className='flex justify-between items-center  py-2 '>
        <img src={profile} alt="/profile" className='object-cover size-14'></img>
        <img src={logo} alt='logo' className='object-cover size-14'></img>
        <img src={menu} alt='menu'className='object-cover size-6'></img> 
      </div>
      <div className='flex justify-evenly'>
        <button className='border-b-3 border-white' >Overview</button>
        <button  >Reports</button>
        <button >Demographics</button>
      </div>
    </div>
  )
}

export default Header
