import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../index';

export function Layout() {
  return (
    <>

      <Navbar />

      <div className='w-full mx-auto  bg-[#EEEDE7] min-h-screen flex flex-col items-center justify-start'>
        <Outlet />
      </div>

      <Footer />
    </>

  )
}
