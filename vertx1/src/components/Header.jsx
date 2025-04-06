import React from 'react'
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import menu from "../assets/threedot.png";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const path=useLocation();

  return (
    <div className='block md:hidden bg-black '>
      <div className='flex justify-between items-center  py-2 '>
        <img src={profile} alt="/profile" className='object-cover size-14'></img>
        <img src={logo} alt='logo' className='object-cover size-14'></img>
        <img src={menu} alt='menu'className='object-cover size-6'></img> 
      </div>
      <div className='flex justify-evenly'>
        <button className={`${path.pathname ==="/"? "border-b-3 border-white":""} `} onClick={(()=>navigate("/"))}>Overview</button>
        <button className={`${path.pathname ==="/portfolio"? "border-b-3 border-white":""} `} onClick={()=>navigate("/portfolio")}  >Portfolio</button>
        <button >Experience</button>
        <button >Media</button>
      </div>
    </div>
  )
}

export default Header
