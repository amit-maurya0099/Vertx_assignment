import React from 'react'
import MainContent from './MainContent'

const Home = () => {
    return (
        <div className='w-full md:w-[80%]  max-h-[100vh] bg-black overflow-y-scroll'>
            <div className='hidden md:flex h-12 border-b border-[#5B5E66]'>
                <div className='w-[85%] flex justify-between  items-center font-md border-b border-r border-[#5B5E66]'>
                    <div className='w-[15%] flex justify-center items-center'>Profile</div>
                    <div className=' h-full w-[15%] flex justify-center items-center border-l border-[#5B5E66]'>Activity</div>
                       
                </div>
                <div className='w-[15%] flex items-center justify-center '>
                    Logout
                </div>
            </div>
            <div className='md:flex border-b border-[#5B5E66] h-12 hidden' >
                <div className='flex w-[85%] text-[#555555] '>
                  <div className=' border-r border-[#5B5E66] w-[15%] flex justify-center items-center text-white'>
                     Overview
                  </div>
                  <div className=' border-r border-[#5B5E66] w-[15%] flex justify-center items-center'>Portfolio</div>
                  <div className=' border-r border-[#5B5E66] w-[15%] flex justify-center items-center'>Experience</div>
                  <div className=' border-r border-[#5B5E66] w-[15%] flex justify-center items-center'>Media</div>
                </div>
                <div className=' w-[15%] border-l border-[#5B5E66] flex justify-center items-center'>
                      More
                    </div>
                
                
            </div>

            <MainContent/>

        </div>
    )
}

export default Home
