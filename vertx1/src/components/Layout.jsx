import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className="h-screen w-screen text-white ">
            <div className='flex max-md:flex-col '>
                <div className='block md:hidden'>
                    <Header />
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

export default Layout
