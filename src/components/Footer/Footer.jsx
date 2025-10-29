import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Footer() {
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
            <motion.li className='font-bold '>
              <Link onClick={()=>handleScrollToTop()} to='/home'>Home</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/shop'>Shop</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/about'>About</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/contact'>Contact</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/blog'>Blog</Link>
            </motion.li>




          </motion.ul>
          <motion.ul className="flex gap-4 text-[#503217] w-1/2 justify-center items-center flex-col">
            <motion.li className='mb-2 font-bold text-lg'>
             <p >Products</p>
            </motion.li>
            <motion.li className='font-bold '>
              <Link onClick={()=>handleScrollToTop()} to='/'>Home</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/shop'>Shop</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/about'>About</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/contact'>Contact</Link>
            </motion.li>
            <motion.li>
              <Link onClick={()=>handleScrollToTop()} to='/blog'>Blog</Link>
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
            <p className='text-left'>Phone:(123)456-7890</p>
            <p className='text-left'>Email:info@yourwedsite</p>

          </div>

        </div>


      


      </motion.div>


      <div className='w-full bg-[#E8E6DE] flex justify-center items-center py-6 px-3 sm:px-6 md:px-12 lg:px-24 sm:py-8 md:py-10 lg:py-12'>
        <p className='text-center text-gray-500/70 text-sm'>© 2025 Medifit. All rights reserved.</p>
      </div>

    </>
  )
}
