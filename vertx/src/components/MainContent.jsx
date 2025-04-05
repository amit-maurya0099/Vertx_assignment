import React from 'react';
import graph from "../assets/graph.png"
import insights from "../assets/insights.png"
import demographics from "../assets/demographics.png";
import  countries from "../assets/countries.png";

const MainContent = () => {
  return (
    <div className='px-[5%] pt-2 bg-[#080808]'>
          <h2 className='text-2xl font-bold max-md:hidden '>Overview</h2>
          <div className='flex flex-col mt-4'>
            <div className='max-md:flex-col flex gap-4 '>
                <img src={graph} alt="graph" className='max-md:w-full h-fit md:w-[70%] h-[300px] md:h-[250px] rounded-xl border border-[#5B5E66]'></img>
                <img src={insights} alt="insights" className='max-md:w-full md:w-[30%] h-fit  md:h-[250px] border rounded-xl border-[#5B5E66] '></img>

            </div>
            <div className='max-sm:flex-col my-8 flex border border-[#5B5E66] rounded-xl p-2'>
              <img src={demographics} alt="demographics" className='md:w-[70%] h-fit'></img>
              <img src={countries} alt="countries" className='md:w-[30%]'></img>
            </div>
          </div>
    </div>
  )
}

export default MainContent
