import React, { Fragment } from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react';
export function MainHero() {
  return (
    <motion.div className='px-3 sm:px-4 md:px-6 lg:px-8 bg-[#E8E6DE] w-full flex flex-col md:flex-row items-center justify-center md:gap-2 lg:gap-4 xl:gap-6 py-6 sm:py-8 md:py-10 lg:py-12'>
      <motion.div initial={{filter: "blur(100px)", opacity: 0}} animate={{filter: "blur(0px)", opacity: 1}} transition={{ duration: 0.5 , delay: 0.6 }} className='w-full md:w-[541px] md:h-[279px] flex flex-col items-start justify-center gap-3 sm:gap-4 md:gap-5 order-2 md:order-1'>
        <motion.h2 initial={{ scale: 0 , blur: 10 }} animate={{ scale: 1 , blur: 0 }} transition={{ duration: 0.5 , delay: 0.5 }} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#503217] leading-tight'>
          <motion.span initial={{ scale: 0  , filter: "blur(100px)"}} animate={{ scale: 1  , filter: "blur(0px)"}} transition={{ duration: 0.5 , delay: 0.6 }} className="block">Your trusted</motion.span>
          <motion.span initial={{ scale: 0  , filter: "blur(100px)"}} animate={{ scale: 1  , filter: "blur(0px)"}} transition={{ duration: 0.5 , delay: 0.7}} className="block">care now</motion.span>
          <motion.span initial={{ scale: 0  , filter: "blur(100px)"}} animate={{ scale: 1  , filter: "blur(0px)"}} transition={{ duration: 0.5 , delay: 0.8 }} className="block">and always</motion.span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 , filter: "blur(100px)"}} animate={{ opacity: 1 , filter: "blur(0px)"  }} transition={{ duration: 0.5 , delay: 0.9 }} className='text-[#8F7D6A] w-full max-w-[415px] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8'>
          For the best results, align your health needs with your medication plan.
        </motion.p>

        <motion.button initial={{y: -100, scale: 0 , filter: "blur(100px)"}} animate={{ y: 0, scale: 1 , filter: "blur(0px)" }} transition={{ duration: 0.5 , delay: 0.5 , ease: "easeInOut" }} className='flex items-center justify-center gap-2 w-[140px] sm:w-[158px] h-[44px] sm:h-[48px] bg-[#503217] text-white rounded-md hover:bg-[#503217]/90 active:bg-[#503217]/90 transition-all duration-300 p-2'>
          <LuShoppingCart className='text-lg sm:text-xl' />
          <Link to='/shop' className='text-sm sm:text-base font-medium'>Shop Now</Link>
        </motion.button>
      </motion.div>

      <motion.div className='w-full md:w-1/2 lg:w-auto flex justify-center items-center mt-6 md:mt-0 order-1 md:order-2'>
        <motion.img className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto' src='/Images/HERO-Group 220.png' alt='hero-image' />
      </motion.div>


    </motion.div>
  )
}
