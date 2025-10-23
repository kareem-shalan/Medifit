import React, { useEffect, useState } from 'react'
import data from '../../data.json'
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { motion, useTime, useTransform } from 'motion/react';

export function ShopByCategory() {
  const [AllData, setAllData] = useState([])

  const time = useTime();
const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  useEffect(() => {
    setAllData(data.categories);
  }, [data.categories])

  return (
    <>
      <motion.div className='md:w-full md:h-fit w-full mt-10 bg-white text-center'>
        <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className='text-2xl text-[#503217] font-bold'>Shop By Category</motion.h2>

        <motion.div className='w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 px-2 sm:px-3 md:px-4 lg:px-6'>
          {AllData.map((category) => (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} key={category.id} className='w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(25%-1rem)] xl:w-[191px] h-[220px] sm:h-[242px] transition-all duration-300 flex justify-center items-center'>
              <div className='w-full max-w-[115px] h-[195px] flex flex-col p-2 sm:p-3 md:p-5 justify-start items-center gap-2'>
                <div className='w-[90px] h-[90px] sm:w-[115px] sm:h-[115px] object-cover'>
                  <motion.img style={{ rotate }} className='w-full h-full cursor-pointer object-cover' src={category.image} alt={category.name} />
                </div>
                <div className='w-full max-w-[139px] h-auto flex flex-col items-center justify-center'>
                  <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className='text-sm sm:text-base font-bold text-center'>{category.name}</motion.h3>
                  <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className='text-xs sm:text-sm text-gray-500 text-center'>{category.itemCount} items</motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>


      <motion.div
  className="w-full max-w-screen-xl mx-auto mt-6 sm:mt-8 md:mt-10 px-2 sm:px-3 md:px-4 lg:px-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center p-2 bg-white rounded-3xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 ease-out"
    >
      <div className="w-full max-w-[195px] text-[#8F7D6A] font-bold flex flex-col justify-center items-start p-2 sm:p-3">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[80px] h-[30px] bg-[#D3744A] text-white rounded-md mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          Sanitizer
        </motion.button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-3 sm:mb-4"
        >
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#503217] leading-tight"
          >
            Hand sanitizer collection
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Link
            className="flex items-center gap-2 underline decoration-[#D3744A] w-fit text-sm sm:text-base"
            to="/shop"
          >
            <BiShoppingBag className="text-lg sm:text-xl" />
            Shop Now
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[163px] flex justify-center items-center"
      >
        <img
          className="w-full h-auto max-h-[202px] object-contain"
          src="../../../public/Images/realistic-hand-sanitizer-bottle-3d-style-1.png"
          alt="realistic-hand-sanitizer"
        />
      </motion.div>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center p-2 bg-white rounded-3xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 ease-out"
    >
      <div className="w-full max-w-[195px] text-[#8F7D6A] font-bold flex flex-col justify-center items-start p-2 sm:p-3">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[80px] h-[30px] bg-[#D3744A] text-white rounded-md mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          Sanitizer
        </motion.button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-3 sm:mb-4"
        >
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#503217] leading-tight"
          >
            Face wash sale collection
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Link
            className="flex items-center gap-2 underline decoration-[#D3744A] w-fit text-sm sm:text-base"
            to="/shop"
          >
            <BsEyeFill className="text-lg sm:text-xl" />
            Discover now
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[163px] flex justify-center items-center"
      >
        <img
          className="w-full h-auto max-h-[202px] object-contain"
          src="../../../public/Images/rb_2147639108-1.png"
          alt="Face wash sale collection"
        />
      </motion.div>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex justify-center items-center p-2 bg-white rounded-3xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 ease-out"
    >
      <div className="w-full max-w-[195px] text-[#8F7D6A] font-bold flex flex-col justify-center items-start p-2 sm:p-3">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[80px] h-[30px] bg-[#D3744A] text-white rounded-md mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          Sanitizer
        </motion.button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-3 sm:mb-4"
        >
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#503217] leading-tight"
          >
            Facial mask deals save up to 50%
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Link
            className="flex items-center gap-2 underline decoration-[#D3744A] w-fit text-sm sm:text-base"
            to="/shop"
          >
            <BsEyeFill className="text-lg sm:text-xl" />
            Discover now
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[130px] flex justify-center items-center"
      >
        <img
          className="w-full h-auto max-h-[202px] object-contain"
          src="../../../public/Images/realistic-medical-mask-with-shadows-1.png"
          alt="realistic-medical-mask"
        />
      </motion.div>
    </motion.div>
  </div>
</motion.div>



   
    </>

  )
}