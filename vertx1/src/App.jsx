import React from 'react'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="h-screen w-screen text-white ">
      <div className='flex max-md:flex-col '>
        <div className='block md:hidden'>
        <Header/>
        </div>
        <Sidebar/>
         <Home/>
         <div className='block md:hidden'>
         <Navbar/>
        </div>
        </div>
    </div>
  )
}

export default App
