import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Footer() {
  const [LinkActive, setLinkActive] = useState(null)
  const handleScrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })}
  return (
    <>

      <motion.div className='w-full bg-[#E8E6DE] flex gap-4  md:flex-row flex-col justify-center items-center py-6 px-3 sm:px-6 md:px-12 lg:px-24 sm:py-8 md:py-10 lg:py-12 overflow-hidden  '>


        <div className="links flex gap-4 md:w-1/2 w-full justify-center items-center" >
          


          <motion.ul className="flex gap-4 text-[#503217] w-1/2 justify-center items-center flex-col">
            <motion.li className='mb-2 font-bold text-lg'>
             <p >Products</p>
            </motion.li>
            <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 1 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 1) {
                  setLinkActive(null)
                } else {
                  setLinkActive(1)
                }
              }} to='/home'>Home</Link>
            </motion.li>
            <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 2 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 2) {
                  setLinkActive(null)
                } else {
                  setLinkActive(2)
                }
              }} to='/shop'>Shop</Link>
            </motion.li>
              <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 3 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 3) {
                  setLinkActive(null)
                } else {
                  setLinkActive(3)
                }
              }} to='/about'>About</Link>
            </motion.li>
            <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 4 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 4) {
                  setLinkActive(null)
                } else {
                  setLinkActive(4)
                }
              }} to='/contact'>Contact</Link>
            </motion.li>
           




          </motion.ul>
          <motion.ul className="flex gap-4 text-[#503217] w-1/2 justify-center items-center flex-col">
            <motion.li className='mb-2 font-bold text-lg'>
             <p >Products</p>
            </motion.li>
            <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 5 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 5) {
                  setLinkActive(null)
                } else {
                  setLinkActive(5)
                }
              }} to='/'>Home</Link>
            </motion.li>
            <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 6 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 6) {
                  setLinkActive(null)
                } else {
                  setLinkActive(6)
                }
              }} to='/shop'>Shop</Link>
            </motion.li>
              <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 7 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 7) {
                  setLinkActive(null)
                } else {
                  setLinkActive(7)
                }
              }} to='/about'>About</Link>
            </motion.li>
            <motion.li   className={`
      text-[#503217] cursor-pointer 
      transition-all duration-300 flex items-center justify-center gap-2
      ${LinkActive === 8 ? `px-5 mx-4 scale-125 bg-[#E8E6DE] shadow-lg shadow-black/40 rounded-3xl  animate-pulse` : null}  `}>
              <Link onClick={()=>{
                handleScrollToTop() 
                if (LinkActive === 8) {
                  setLinkActive(null)
                } else {
                  setLinkActive(8)
                }
              }} to='/contact'>Contact</Link>
            </motion.li>
        



          </motion.ul>

        </div>



        <div className="info flex gap-4 md:w-1/2 w-full justify-center items-center flex-col">
          <div className="logo flex gap-4 w-1/2 justify-center items-center ">
         <Link onClick={()=>handleScrollToTop()} to='/'>   <img src="/Images/logo-2.png" alt="Logo" /></Link>
            <Link onClick={()=>handleScrollToTop()} to='/'>   <img src="/Images/Medifit.png" alt="Logo" /></Link>
          </div>

          <div className="text-center text-gray-500/70 text-sm">
            <p>We provides the ultimate solution</p>
            <p> for your online store and all the</p>
            <p> healthcare needs</p>
          </div>

          <div className="icons flex gap-4 w-1/2 justify-center items-center ">
            <Link to='/' target='_blank' className='bg-[#503217] rounded-md flex justify-center items-center text-white hover:bg-[#503217]/90 active:bg-[#503217]/90 transition-all duration-300'><FaFacebookF className='text-xl p-1 bg' /></Link>
            <Link to='/' target='_blank' className='bg-[#503217] rounded-md flex justify-center items-center text-white hover:bg-[#503217]/90 active:bg-[#503217]/90 transition-all duration-300'><FaTwitter className='text-xl p-1' /></Link>
            <Link to='/' target='_blank' className='bg-[#503217] rounded-md flex justify-center items-center text-white hover:bg-[#503217]/90 active:bg-[#503217]/90 transition-all duration-300'><FaInstagram className='text-xl p-1' /></Link>
            <Link to='/' target='_blank' className='bg-[#503217] rounded-md flex justify-center items-center text-white hover:bg-[#503217]/90 active:bg-[#503217]/90 transition-all duration-300'><FaLinkedin className='text-xl p-1' /></Link>
            <Link to='/' target='_blank' className='bg-[#503217] rounded-md flex justify-center items-center text-white hover:bg-[#503217]/90 active:bg-[#503217]/90 transition-all duration-300'><FaYoutube className='text-xl p-1' /></Link>

          </div>

        </div>




        <div className="address flex gap-4 md:w-1/2 w-full justify-center items-left flex-col">
          <div className="text-center text-gray-500/70 text-sm">
            <h4 className='text-lg font-bold text-left mb-2'>address</h4>
            <p className='text-left'>1234 Main Street, Anytown, USA</p>
            <p className='text-left'>New York, NY 10001</p>

          </div>
          <div className="text-center text-gray-500/70 text-sm">
            <h4 className='text-lg font-bold text-left mb-2'>contact</h4>
            <p className='text-left'>Phone:0127295817</p>
            <p className='text-left'>Email:kareemmohamedali330@gmail.com</p>

          </div>

        </div>


      


      </motion.div>


      <div className='w-full bg-[#E8E6DE] flex justify-center items-center py-6 px-3 sm:px-6 md:px-12 lg:px-24 sm:py-8 md:py-10 lg:py-12'>
        <p className='text-center text-gray-500/70 text-sm'>© 2025 Medifit. All rights reserved.</p>
      </div>

    </>
  )
}
