import React from 'react'
import MainContent from './MainContent'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Portfolio from './Portfolio';

const Home = () => {
    const navigate=useNavigate();
    const path=useLocation();
    console.log(path);
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
                  <div className={` border-r border-[#5B5E66] w-[15%] flex justify-center items-center cursor-pointer ${path.pathname === "/" ? "text-white": "text-[#555555]"} `} onClick={()=>navigate("/")}>
                     Overview
                  </div>
                  <div className={`${path.pathname ==="/portfolio" ? "text-white" :'text-[#555555]'} border-r border-[#5B5E66] w-[15%] flex justify-center items-center cursor-pointer`} onClick={()=> navigate("/portfolio")}>Portfolio</div>
                  <div className='text-[#555555] border-r border-[#5B5E66] w-[15%] flex justify-center items-center'>Experience</div>
                  <div className='text-[#555555] border-r border-[#5B5E66] w-[15%] flex justify-center items-center'>media</div>
                </div>
                
                <div className=' w-[20%] border-l border-[#5B5E66] flex justify-center items-center'>
                      More
                    </div>
                
                
            </div>
            {console.log(path.pathname) }
            {path.pathname ==="/" && <MainContent/>}
            {path.pathname ==="/portfolio" && <Portfolio/>}

        </div>
    )
}

export default Home
