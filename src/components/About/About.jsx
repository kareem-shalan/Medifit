import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';

import data from '../../data.json'
import { FaCheckCircle } from 'react-icons/fa';
import { GiMissilePod } from 'react-icons/gi';
import { GoCommit } from 'react-icons/go';
import { BsEye } from 'react-icons/bs';

export function About() {
  const [SpecialLines, setSpecialLines] = useState([])

  const aboutUsData = [

    {
      id: 1,
      title: "Truck Fast",
      image: "/Images/truck-fast.png"
    },

    {
      id: 2,
      title: "Easy refund",
      image: "/Images/Easy-efund.png"
    }
    ,
    {
      id: 3,
      title: "Online support",
      image: "/Images/Online-support.png"
    },

    {
      id: 4,
      title: "Flexible payment",
      image: "/Images/Fexible-payment.png"
    }
  ]

  useEffect(() => {
    setSpecialLines(aboutUsData)
  }, [SpecialLines])

  return (
    <>

      <motion.div className='w-full container mx-auto flex flex-col items-center justify-center'>
        <motion.h2

          initial={{ scale: 0, filter: "blur(100px)", y: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}

          className=' text-center text-3xl leading-tight  font-bold text-[#503217] my-10'>

          Health products you can trust service you deserve
        </motion.h2>

        {/* images section */}
        <motion.div className='w-full flex flex- items-start justify-center gap-4 p-4 '>
          {/* imag 1 */}
          <motion.div

            initial={{ scale: 0, filter: "blur(100px)", y: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}

          >
            <img className='w-full h-full object-cover rounded-2xl ' src="/Images/About-Rectangle-1.png" alt="about-1" />
          </motion.div>

          {/* image 2 */}
          <motion.div
            initial={{ scale: 0, filter: "blur(100px)", y: "100%" }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            <img className='w-full h-full object-cover rounded-2xl ' src="/Images/About-Rectangle-2.png" alt="about-2" />
          </motion.div>

          {/* image 3 */}
          <motion.div initial={{ scale: 0, filter: "blur(100px)", y: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
            <img className='w-full h-full object-cover rounded-2xl ' src="/Images/About-Rectangle-3.png" alt="about-3" />
          </motion.div>





        </motion.div>


        {/* about us section */}
        <motion.div className='w-full flex  items-center justify-center gap-6 p-4 my-10'  >

          <motion.h2 initial={{ scale: 0, filter: "blur(100px)", x: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }} className=' self-start  text-4xl font-bold whitespace-nowrap text-[#503217]'>About us</motion.h2>
          <motion.p initial={{ scale: 0, filter: "blur(100px)", x: "100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }} className='w-full max-w-[415px] text-sm text-[#9d8264] leading-relaxed  text-start mt-3 self-end'>Our focus is on nurturing wellness and empowering health for all ages well being for people worldwide.</motion.p>

        </motion.div>

        {/* our mission section */}
        <motion.div className='w-full   container mx-auto  p-4  flex
      
      
       items-center justify-around gap-4  my-15  ' >

          {
            SpecialLines?.map((item, index) => (
              <motion.div

                initial={{ filter: "blur(100px) ", x: -100 }} animate={{ filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }}
                key={item.id} className='flex flex-col     items-center justify-center gap-2 '>
                <motion.img initial={{ scale: 0, filter: "blur(100px) ", x: -100 }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className='size-5 xl:size-10 object-cover  ' src={item.image} alt="hero-image" />
                <motion.p initial={{ scale: 0, filter: "blur(100px) ", x: -100 }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className='text-[7px] xl:text-sm  whitespace-nowrap text-[#503217] font-bold'>{item.title}</motion.p>
              </motion.div>
            ))

          }



        </motion.div>


      </motion.div>





      {/* What to Expect When You Join Our Team */}


      <div className='w-full  bg-white '>
        <motion.div className='w-full container mx-auto flex flex-col items-start  justify-center'>


          <motion.h2 initial={{ scale: 0, filter: "blur(100px)", y: "100%" }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }} className='  p-4  text-3xl font-bold max-w-[400px]  text-start my-10 text-[#503217]'>What to Expect When You Join Our Team</motion.h2>


          < motion.div
          className=' w-full flex  items-center justify-center gap-4'



          >


          
           

            <motion.div  className=' w-full p-10  flex flex-col md:flex-row items-center justify-center gap-2'>


            <ul className='flex flex-col items-start justify-center gap-2 self-start'>
              <motion.li initial={{ scale: 0, filter: "blur(100px)",x: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }} 
              className='hover:scale-125 text-[#503217] cursor-pointer hover:px-5  transition-all duration-300 flex items-center justify-center gap-2'> <GiMissilePod /> Mission</motion.li>
              <motion.li 
              
              initial={{ scale: 0, filter: "blur(100px)",x: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
               className='hover:scale-125 text-[#503217] cursor-pointer hover:px-5 transition-all duration-300 flex items-center justify-center gap-2'> < GoCommit /> Commitments</motion.li>

              <motion.li initial={{ scale: 0, filter: "blur(100px)",x: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
               className='hover:scale-125 cursor-pointer hover:px-5 text-[#503217] transition-all duration-300 flex items-center justify-center gap-2'> <BsEye /> Vision</motion.li>
            </ul>



              <motion.img 
              initial={{ scale: 0, filter: "blur(100px)",x: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              className='md:max-w-[200px] object-cover'
              src="/Images/Mission.png" alt="What-to-Expect-When-You-Join-Our-Team" />

            <div className='flex flex-col items-start justify-center gap-2 self-end'>
      
            <motion.p initial={{ scale: 0, filter: "blur(100px)",x: "-100%" }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
             className='md:max-w-[300px] mt-4 md:mt-0 text-sm text-[#503217]/40 font-bold'>
            Our mission is to provide the best products and services to our customers.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque maiores doloribus impedit totam numquam!

            </motion.p>


            
            </div>
              


            </motion.div>



          </motion.div>




        </motion.div>

      </div>



    </>
  )
}
