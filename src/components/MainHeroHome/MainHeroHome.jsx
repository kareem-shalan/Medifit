import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { GiEagleEmblem, GiMagicTrident } from 'react-icons/gi';
import { SiGnuprivacyguard, SiGoogleearth } from 'react-icons/si';
import { FaArrowRight, FaHandsAslInterpreting } from 'react-icons/fa6';
import { homeProducts } from "../../data.json"
import { BsEyeFill } from 'react-icons/bs';


export function MainHeroHome() {

  const [AllHomeProducts, setAllHomeProducts] = useState([])
  const [LinkActive, setLinkActive] = useState(null)

  const lineIcons = [
    {
      id: 1,
      icon: <GiEagleEmblem className='text-2xl' />,
      title: "Emblem"
    },
    {
      id: 2,
      icon: <SiGoogleearth className='text-2xl' />,
      title: "Grapho"

    },

    {
      id: 3,
      icon: <GiMagicTrident className='text-2xl' />,
      title: "WAYLine"
    },

    {
      id: 4,
      icon: <FaHandsAslInterpreting className='text-2xl' />,
      title: "PRELUDE"
    },
    {
      id: 5,
      icon: <SiGnuprivacyguard className='text-2xl' />,
      title: "Signum"
    },




  ]



  const SpecialLines = [

    {
      id: 1,
      title: "Thoughtfully Made",
      image: "/Images/image-line-1.png"
    },

    {
      id: 2,
      title: "Non-Toxic Formula",
      image: "/Images/image-line-2.png"
    }
    ,
    {
      id: 3,
      title: "Organic Essentials",
      image: "/Images/image-line-3.png"
    },

    {
      id: 4,
      title: "Safe for Everyone",
      image: "/Images/image-line-4.png"
    },

  ]



  useEffect(() => {
    setAllHomeProducts(homeProducts)
    setLinkActive(null);
  }, [homeProducts])
  return (
    <>



      <motion.div className=' bg-[#EEEDE7] xl:w-screen xl:h-screen  flex flex-col xl:flex-row  
     justify-around items-center
     gap-4
    '>

        <section className='md:w-[60%] w-full flex flex-col xl:items-end items-start  justify-center px-3 md:px-0 xl:mb-28 mb-0  md:ms-4  order-2 xl:order-1   '>

          <motion.div initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className=' w-full max-w-[600px] mb-10 ms-4 flex flex-col items-start justify-center'>
            <motion.p initial={{ scale: 0, filter: "blur(100px)" }} animate={{ scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.6 }} className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold text-[#503217] leading-tight'>From wellness to</motion.p>
            <motion.p initial={{ scale: 0, filter: "blur(100px)" }} animate={{ scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.7 }} className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold text-[#503217] leading-tight'>care all in one place</motion.p>


          </motion.div>



          <div className='flex items-center justify-center '>

            <motion.div initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-shrink-0 w-[200px] h-[200px] items-center justify-center md:p-2 p-0 ">
              <img src="/Images/Hero-Rectangle-Home.png" alt="hero-image" />
            </motion.div>

            <motion.div initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className=" p-2 flex flex-col items-start justify-end  self-end">


              <motion.p initial={{ scale: 0, filter: "blur(100px)", y: 100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className='md:w-[320px] w-full  text-sm sm:text-base md:text-lg leading-relaxed  font-serif text-[#563716]'>Your health is in good hands with Medifit. We’re here to provide you with a wide range of healthcare essentials, carefully selected.</motion.p>
              <motion.Link to='/shop' initial={{ scale: 0, filter: "blur(100px) ", y: 100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className='bg-[#503217] text-white  w-[150px] h-[40px] md:mt-10 mt-4 flex items-center justify-center gap-2 rounded-md'>Shop Now <LuShoppingCart className='text-2xl' /></motion.Link>


            </motion.div>


          </div>



        </section>

        <section className='xl:w-[50%] w-full relative    flex items-center justify-center flex-col xl:ms-36 ms-0 xl:mb-36 mt-[-15px] md:mt-0  order-1 xl:order-2  '>


          <img className='w-full    h-full object-cover self-end ' src="/Images/Home-Hero.png " alt="hero-image" />



        </section>





      </motion.div>





      <motion.div className='w-full max-w-[1900px] mt-5 xl:mt-0  block  xl:absolute bottom-0 left-0 '>
        <section className='bg-[#E2DFCF] order-3  items-center xl:justify-around justify-center w-full h-full py-6 px-6 flex  gap-2  '>
          {
            lineIcons?.map((item) => (
              <motion.div key={item.id} className='flex   items-center justify-center  flex-col xl:flex-row mx-auto gap-2  '>
                {item.icon}
                <p className='leading-relaxed  font-serif text-[#563716]'>{item.title.includes("Line") ? <span

                  className='text-[#503217] font-light'
                >{item.title}</span> : <span style={{ color: "#503217", fontWeight: "bold" }}>{item.title}</span>}</p>
              </motion.div>
            ))
          }

        </section>

      </motion.div>




      <motion.div className=' w-full  container mx-auto  p-4  flex
      flex-col md:flex-row items-center justify-around gap-4  my-15' >



        <motion.div className='flex flex-col items-start justify-center order-2 xl:order-1 '>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-2xl text-[#503217] font-bold'>Bringing trusted health solutions</motion.p>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-2xl text-[#503217] font-bold'>to your doorstep focused on</motion.p>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-2xl text-[#503217] font-bold mb-4'>quality care & reliability</motion.p>

          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className='text-sm text-gray-500 font-bold'>Our store offers a comprehensive range of pharmaceuticals, health and wellness</motion.p>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className='text-sm text-gray-500 font-bold mb-4'> products, and medical supplies to meet the diverse needs of our community.</motion.p>

          <motion.button initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} className='bg-[#503217] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'>Our Story <FaArrowRight /></motion.button>
        </motion.div>



        <motion.div className='w-full  md:w-1/2 lg:w-auto flex justify-center items-center order-1 xl:order-2 '>
          <motion.img initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className='w-full h-full object-cover rounded-4xl' src="/Images/second-Section-1.png" alt="hero-image" />
        </motion.div>


      </motion.div>




      <motion.div className='w-full  container mx-auto  p-4  flex
       items-center justify-around gap-4  my-15 0   ' >

        {
          SpecialLines?.map((item, index) => (
            <motion.div

              initial={{ filter: "blur(100px) ", x: -100 }} animate={{ filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }}
              key={item.id} className='flex flex-col     items-center justify-center gap-2 '>
              <motion.img initial={{ scale: 0, filter: "blur(100px) ", x: -100 }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className='size-6 xl:size-10 object-cover rounded-4xl' src={item.image} alt="hero-image" />
              <motion.p initial={{ scale: 0, filter: "blur(100px) ", x: -100 }} animate={{ scale: 1, filter: "blur(0px)", x: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className='text-[10px] xl:text-sm  whitespace-nowrap text-[#503217] font-bold'>{item.title}</motion.p>
            </motion.div>
          ))

        }



      </motion.div>





      <motion.div className='w-full  container mx-auto  p-4  flex
       items-center justify-start gap-4  my-15 flex-wrap   ' >

        <motion.div className='flex flex-col items-start justify-center w-full     '>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-2xl font-serif text-[#503217] font-bold'>Discover our</motion.p>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-2xl font-serif text-[#503217] font-bold'>collection</motion.p>


          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className='text-sm text-gray-500 font-bold'>Our medical store offers trusted products</motion.p>
          <motion.p initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className='text-sm text-gray-500 font-bold mb-4'>easy navigation, and fast shipping</motion.p>

          <motion.button initial={{ scale: 0, filter: "blur(100px) ", y: -100 }} animate={{ scale: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} className='bg-[#503217] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'>View all products<FaArrowRight /></motion.button>
        </motion.div>

        {



          AllHomeProducts.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ scale: 0, opacity: 0, x: -100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() =>
                setLinkActive(LinkActive === index ? null : index) // ✅ toggle
              }

              className="group w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(25%-1.25rem)] 2xl:w-[300px]
         h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px]
         flex flex-col my-3 sm:my-4 md:my-5 justify-center items-center
         p-2 bg-white rounded-3xl relative overflow-hidden touch-manipulation "
            >
              {/* Image + Badge */}
              <div className="w-1/2 relative  mb-[15px] h-full flex items-center justify-center">
                <div className="size-[100px] flex items-center justify-center object-fill relative">
                  <img
                    className={`${product.imageSize} h-fit 
                    
                    object-center z-10 transition-all duration-300 ease-out`}
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                {product.badge && (
                  <div className="w-[80px] h-[30px] flex items-center justify-center bg-[#D3744A] text-white rounded-md mb-[38px] absolute top-5 left-[-60px] ">
                    <p className="text-sm">{product.badge}</p>
                  </div>
                )}
              </div>

              {/* Button */}
              <Link
                to="/shop"
                className={`absolute left-0 w-full h-[40px] flex items-center justify-center gap-2 rounded-md text-white p-2 bg-[#D3744A] transition-all duration-300 ease-out
             ${LinkActive === index ? "bottom-0 z-50 bg-[#D3744A]/80 text-black shadow-lg shadow-black/20     group-hover:bottom-0 group-hover:bg-[#D3744A]/80 group-hover:text-black group-hover:shadow-lg group-hover:shadow-black/20  " : "bottom-[-100%]"}
            `}
              >
                <BsEyeFill className="text-2xl" />
                <p className="text-sm">View</p>
              </Link>

              {/* Product Info */}
              <div className={`w-full h-[180px] sm:h-[200px] text-[#8F7D6A] font-bold flex justify-start items-center ${product.extraClasses}`}>
                <div className="w-full max-w-[200px] sm:max-w-[220px] h-auto mx-2 mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold whitespace-nowrap text-[#503217]">
                    {product.name}
                  </h2>
                  {product.originalPrice ? (
                    <div className="flex items-center gap-2">
                      <p className="text-sm/snug font-bold text-green-500/65 mt-2 sm:mb-3">
                        {product.price}
                      </p>
                      <p className="text-sm/snug font-bold line-through text-red-500/40 mt-2 sm:mb-3">
                        {product.originalPrice}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm/snug font-bold text-green-500/65 mt-2 sm:mb-3">
                      {product.price}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

          ))}






      </motion.div>




    </>
  )
}
