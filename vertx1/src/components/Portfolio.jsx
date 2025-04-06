import React from 'react';

import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blueTick from "../assets/blueTick.png";
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"
const Portfolio = () => {
  return (
    <div className='p-[5%] bg-[#080808] flex flex-col gap-10'>
      <div className="border rounded-xl px-2 border-[#5B5E66] ">
        <h2 className='text-2xl font-bold max-md:hidden '>Overview</h2>
        <div className="flex max-sm:flex-col gap-4 py-4">
          <div>
            <img src={logo2} alt="dummyProfile" className='size-40'></img>
          </div>
          <div>
            <div className='flex gap-44 items-center'>
              <h2 className=" text-xl font-semibold">Mr ABC</h2>
              <img src={blueTick} alt="tick" className='h-5'></img>
            </div>
            <p className='flex items-center'> Co-founder and CEO @Vertx <img src={logo} alt="/logo" className='h-6'></img></p>
            <div className='flex justify-between  md:flex-col md:gap-2 '>
              <h2 className='text-black bg-white px-1 rounded-sm w-fit '>Entrepreneur</h2>
              <div className='flex gap-1 md:text-3xl text-lg items-center'>
                <CgMail className='md:text-5xl text-3xl '/>
                <FaLinkedin/>
                <FaXTwitter/>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className='max-sm:flex-col flex justify-between max-sm:gap-6  mb-10'>
        <LeftComponent />
        <RightComponent />

      </div>

    </div>
  )
}

export default Portfolio

