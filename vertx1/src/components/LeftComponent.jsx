import React from 'react';
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"

const LeftComponent = () => {
    return (
        <div className='w-full md:w-[45%] border rounded-lg border-[#5B5E66]  px-4 pt-2 pb-10  '>
           
                <h2 className='font-semibold text-xl'>Founded Companies</h2>
                <h2 className='font-bold text-7xl mt-3'>02</h2>
           
            <div className='mt-4 flex flex-col gap-4'>
              <div className='flex justify-between '>
                   <div className='flex items-center gap-1'>
                      <img src={logo} alt="/" className='h-12'></img>
                      <div>
                         <span className='flex gap-4 items-center max-sm:text-sm'>
                            <h2 className='text-lg font-bold'>Vertx</h2>
                            <h2 className='bg-green-600 px-0.5 rounded-sm text-[12px]'>CEO</h2>
                         </span>
                         <p className='flex max-sm:flex-col max-sm:text-sm'>Founded in 2025.in <span className='font-semibold ml-1'>Fintech </span></p>
                      </div>
                   </div>
                   <div className='text-sm'>View Profile</div>
              </div>
              <div className='flex justify-between '>
                   <div className='flex items-center gap-2'>
                      <img src={logo2} alt="/" className='h-10'></img>
                      <div className='max-sm:text-sm'>
                         <span className='flex max-sm:gap-2 gap-4 items-center'>
                            <h2 className='md:text-lg font-bold'>Company</h2>
                            <h2 className='bg-[#B0BDEB] px-0.5 rounded-sm max-sm:text-[8px]'>PROPRIETOR</h2>
                         </span>
                         <p className='flex max-sm:flex-col max-sm:text-sm' >Details/information<br></br> like acquired /exit/ m&a </p>
                      </div>
                   </div>
                   <div className='max-sm:text-sm'>View Profile</div>
              </div>

            </div>
        </div>
    )
}

export default LeftComponent
