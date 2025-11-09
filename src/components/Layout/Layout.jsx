import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../index';
import { Cart } from '../Cart/Cart';

export function Layout() {
  return (
    <>
      <Navbar />
      
      <div className='w-full mx-auto  bg-[#EEEDE7] min-h-screen flex flex-col items-center justify-start overflow-hidden'>
        <Outlet />
      </div>

      <Footer />
      
      {/* Global Cart Drawer */}
      <Cart />
    </>
  )
}
