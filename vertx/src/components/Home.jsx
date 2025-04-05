import React from 'react'
import MainContent from './MainContent'

const Home = () => {
    return (
        <div className='w-full md:w-[80%]  max-h-[100vh] bg-black overflow-y-scroll'>
            <div className='hidden md:flex h-12 border-b border-[#5B5E66]'>
                <div className='  w-[80%] flex justify-between  items-center font-md border-b border-r border-[#5B5E66]'>
                    <div className='w-[20%] flex justify-center items-center'>Analytics</div>
                    <div className=' h-full w-[20%] flex justify-center items-center border-l border-[#5B5E66]'>Activity</div>
                       
                </div>
                <div className='w-[20%] flex items-center justify-center '>
                    <button className='text-center font-md'>Logout</button>
                </div>
            </div>
            <div className='md:flex border-b border-[#5B5E66] h-12 hidden' >
                <div className='flex w-[80%] '>
                  <div className=' border-r border-[#5B5E66] w-[20%] flex justify-center items-center'>
                     Overview
                  </div>
                  <div className=' border-r border-[#5B5E66] w-[20%] flex justify-center items-center'>Demographics</div>
                </div>
                <div className=' w-[20%] border-l border-[#5B5E66] flex justify-center items-center'>
                      More
                    </div>
                
                
            </div>

            <MainContent/>

        </div>
    )
}

export default Home
