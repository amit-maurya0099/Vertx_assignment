import React from 'react';
import logo2 from "../assets/logo2.png"


const RightComponent = () => {
  return (
    <div className='w-full md:w-[45%] border rounded-lg border-[#5B5E66] px-4 pt-2 pb-10  '>
                <div>
                    <h2 className='font-semibold text-xl'>Experience</h2>
                    <h2 className='font-bold text-7xl mt-4'>03</h2>
                </div>
                <div className='mt-4 flex flex-col gap-4'>
                  <div className='flex justify-between '>
                       <div className='flex items-center gap-1'>
                          <img src={logo2} alt="/" className='h-10'></img>
                           <h2>Company 1</h2>
                       </div>
                       <div>View Profile</div>
                  </div>
                  <div className='flex justify-between '>
                       <div className='flex items-center gap-2'>
                          <img src={logo2} alt="/" className='h-10'></img>
                         <h2>Company 2</h2>
                       </div>
                       <div>View Profile</div>
                  </div>
                  <div className='flex justify-between '>
                       <div className='flex items-center gap-2'>
                          <img src={logo2} alt="/" className='h-10'></img>
                         <h2>Company 3</h2>
                       </div>
                       <div>View Profile</div>
                  </div>
    
                </div>
            </div>
  )
}

export default RightComponent
