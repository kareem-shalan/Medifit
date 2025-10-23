import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { BiCheckCircle, BiShoppingBag } from 'react-icons/bi';
import { FaTruck, FaHeadset, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import data from '../../data.json';
import { motion } from "motion/react"
import { TbMassage } from 'react-icons/tb';

export function LatestHealthProduct() {
  // Add this data array at the top of the component (along with the topSellingProducts)
  const [latestHealthProducts, setlatestHealthProducts] = useState([])
  // Add this data array at the top of the component, before the return statement
  const [topSellingProducts, settopSellingProducts] = useState([])

  const [followUs, setfollowUs] = useState([])
  useEffect(() => {
    setfollowUs(data.followUs);
  }, [data.followUs])

  useEffect(() => {
    setlatestHealthProducts(data.latestHealthProducts);
    settopSellingProducts(data.topSellingProducts);
  }, [data.latestHealthProducts, data.topSellingProducts])

    ;




  return (
    <motion.div >

      {/* Latest Health Product */}


      <motion.div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 transition-all duration-300 ease-out bg-[#F2F2F2] px-2 sm:px-3 md:px-4 lg:px-6 2xl:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1400px] mx-auto"
        >
          <motion.div className="w-full text-[#503217] flex justify-center items-center mt-6 sm:mt-8 md:mt-10">
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Latest Health Product
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center items-center mt-6">
          {latestHealthProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0, opacity: 0, x: -100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px] flex flex-col my-3 sm:my-4 md:my-5 justify-center items-center p-2 bg-white rounded-3xl relative overflow-hidden group"
            >
              {/* Image + Badge */}
              <div className="w-1/2 relative mb-[15px]">
                <div className="w-full flex items-center justify-center object-cover relative">
                  <img
                    className={`${product.imageSize} h-fit object-center z-10 transition-all duration-300 ease-out`}
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                {product.badge && (
                  <div className="w-[80px] h-[30px] flex items-center justify-center bg-[#D3744A] text-white rounded-md mb-[38px] absolute top-5 left-[-60px]">
                    <p className="text-sm">{product.badge}</p>
                  </div>
                )}
              </div>

              {/* Hover Button */}
              <Link
                to="/shop"
                className="w-full h-[30px] flex items-center justify-center gap-2 bg-[#D3744A] text-white rounded-md p-2 transform-3d hover:scale-105 cursor-pointer transform-cpu hover:bg-[#D3744A]/80 hover:text-black hover:shadow-lg hover:shadow-black/20 absolute bottom-[-100%] left-0 hover:bottom-0 group-hover:bottom-0 transition-all duration-300 ease-out"
              >
                <BsEyeFill className="text-2xl" />
                <p className="text-sm">View</p>
              </Link>

              {/* Product Info */}
              <div className={`w-full h-[180px] sm:h-[200px] text-[#8F7D6A] font-bold flex justify-start items-center ${product.extraClasses}`}>
                <div className="w-full max-w-[200px] sm:max-w-[220px] h-auto mx-2 mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-[#503217]">
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
        </div>
      </motion.div>




      {/* Why Choose Us */}


      <motion.div className="w-full  mx-auto px-4 md:px-6 lg:px-8 py-10 bg-[#F2F2F2] flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-6">
        {[
          {
            icon: <BiCheckCircle className="text-3xl text-green-500" />,
            title: "30 Days Warranty",
            description: "Enjoy peace of mind with our extended warranty",
            delay: 1.2,
          },
          {
            icon: <FaTruck className="text-3xl text-blue-500" />,
            title: "Free Delivery",
            description: "Fast and free shipping on all orders",
            delay: 1.3,
          },
          {
            icon: <FaHeadset className="text-3xl text-purple-500" />,
            title: "24/7 Support",
            description: "Round-the-clock customer service",
            delay: 1.4,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: card.delay }}
            className="w-full md:w-1/2 lg:w-[360px] min-h-[140px] bg-white rounded-3xl p-5 flex items-center gap-5 shadow-sm"
          >
            {/* Icon */}
            <div className="w-[70px] h-[70px] bg-[#EBE9E0] rounded-2xl flex items-center justify-center rotate-45 flex-shrink-0">
              <div className="-rotate-45">{card.icon}</div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <h6 className="text-base sm:text-lg font-semibold text-[#503217] leading-tight">
                {card.title}
              </h6>
              <p className="text-sm sm:text-base text-gray-500/70 leading-snug">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>






      {/* Explore Our store Collection */}



      <motion.div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-wrap justify-center items-center transition-all duration-300 ease-out bg-[#F2F2F2] gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative px-2 sm:px-3 md:px-4 lg:px-6 2xl:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: -100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-[1400px] mx-auto"
        >
          <motion.div className="w-full text-[#503217] flex justify-center items-center mt-6 sm:mt-8 md:mt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Explore Our Store Collection
            </h2>
          </motion.div>
        </motion.div>

        {/* Product Cards */}
        {topSellingProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ scale: 0, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(25%-1.25rem)] 2xl:w-[300px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px] flex flex-col my-3 sm:my-4 md:my-5 justify-center items-center p-2 bg-white rounded-3xl relative overflow-hidden group"
          >
            {/* Image + Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-1/2 relative mb-[15px] h-full flex items-center justify-center"
            >
              <div className="w-full flex items-center justify-center object-cover relative">
                <img
                  className={`${product.imageSize} h-fit object-center z-10 transition-all duration-300 ease-out`}
                  src={product.image}
                  alt={product.name}
                />
              </div>

              {product.badge && (
                <div className="w-[80px] h-[30px] flex items-center justify-center bg-[#D3744A] text-white rounded-md mb-[38px] absolute top-5 left-[-60px]">
                  <p className="text-sm">{product.badge}</p>
                </div>
              )}
            </motion.div>

            {/* Hover Button */}
            <Link
              to="/shop"
              className="w-full h-[30px] flex items-center justify-center gap-2 bg-[#D3744A] text-white rounded-md p-2 transform-3d hover:scale-105 cursor-pointer transform-cpu hover:bg-[#D3744A]/80 hover:text-black hover:shadow-lg hover:shadow-black/20 absolute bottom-[-100%] left-0 hover:bottom-0 group-hover:bottom-0 transition-all duration-300 ease-out"
            >
              <BsEyeFill className="text-2xl" />
              <p className="text-sm">View</p>
            </Link>

            {/* Product Info */}
            <motion.div className={`w-full h-[180px] sm:h-[200px] text-[#8F7D6A] font-bold flex justify-start items-center ${product.extraClasses}`}>
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
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sign Up for an Instant 15% Discount */}

      <motion.div className='bg-[#F2F2F2] flex-col  xl:flex-row md:w-full pt-8 sm:pt-10 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12 flex justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-3 sm:px-4 md:px-6 lg:px-8'>

        <motion.div className='md:w-1/2 w-full p-4 sm:p-6 md:p-8 lg:p-10 flex items-center'>
          <img className='w-full h-full object-cover rounded-xl sm:rounded-2xl' src="/Images/BG-Sign-Up.png" alt="BG-Sign-Up" />

        </motion.div>

        <motion.div className='md:w-1/2 w-full flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 px-4 sm:px-0'>

          <motion.div className='flex flex-col justify-center items-center gap-3 sm:gap-4'>
            <motion.h3 initial={{ scale: 0, opacity: 0, x: -100, filter: "blur(100px)" }} animate={{ scale: 1, opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.2 }} className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#503217] font-bold text-center'>Sign Up for an Instant </motion.h3>
            <motion.span initial={{ scale: 0, opacity: 0, x: -100, filter: "blur(100px)" }} animate={{ scale: 1, opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.3 }} className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500/65 font-bold'>15% Discount</motion.span>
            <motion.p initial={{ scale: 0, opacity: 0, x: -100, filter: "blur(100px)" }} animate={{ scale: 1, opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.4 }} className='text-sm sm:text-base md:text-lg text-gray-500/40'>on your first order</motion.p>
          </motion.div>

          <motion.div className='flex items-center flex-col md:flex-row justify-around w-full md:gap-3 lg:gap-4 gap-5 sm:gap-6'>
            <div className="relative w-full md:w-1/2" data-twe-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none outline-1 bg-[#8F7D6A]/40 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Enter your email" />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#503217] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none text-sm sm:text-base"
              >Enter your email
              </label>
            </div>
            <motion.button className='w-full sm:w-[149px] h-[44px] sm:h-[48px] bg-[#503217] text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-[#503217]/90 transition-all'>
              <Link to='/shop'>Shop Now</Link>
            </motion.button>
          </motion.div>
        </motion.div>



      </motion.div>


      {/*    Our happy clients      */}
      <motion.div className='w-full bg-[#EEEDE7] flex flex-col justify-center items-center py-6 px-3 sm:px-6 md:px-12 lg:px-24 sm:py-8 md:py-10 lg:py-12'>

        <motion.div initial={{ scale: 0, opacity: 0, x: -100 }} animate={{ scale: 1, opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='w-full text-[#503217] flex justify-center items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-2 sm:py-3 md:py-4 lg:py-5 mb-2 sm:mb-3 md:mb-4 lg:mb-5 font-bold'>
            Our happy clients
          </h2>
        </motion.div>

        {/* Note-FeedBack */}
        <motion.div initial={{ scale: 0, opacity: 0, x: -100 }} animate={{ scale: 1, opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='w-full sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-fit md:h-[280px] lg:h-[300px] xl:h-[270px] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 flex items-center justify-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl m-3 sm:m-4 md:m-0 relative'>

          <div className='w-[30px] h-[50px] sm:w-[40px] sm:h-[70px] md:w-[50px] md:h-[90px] flex items-start justify-start absolute top-2 left-2 md:relative md:top-0 md:left-0'>
            <img className='opacity-60 w-full h-full object-contain' src="/Images/Notes.png" alt="Notes" />
          </div>

          <motion.div initial={{ scale: 0, opacity: 0, x: -100, filter: "blur(100px)" }} animate={{ scale: 1, opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.5 }} className='flex flex-col items-center justify-center gap-1 sm:gap-2 max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:w-full lg:max-w-full'>

            <p className='text-xs sm:text-sm md:text-base lg:text-base text-[#503217]/70 text-center md:max-w-[1035px] md:max-h-[81px]'>
              I'm so impressed with this online medical store. The product selection is extensive and the prices are great. I found
            </p>
            <p className='text-xs sm:text-sm md:text-base lg:text-base text-[#503217]/70 text-center md:max-w-[1035px] md:max-h-[81px]'>everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-base text-[#503217]/70 text-center md:max-w-[1035px] md:max-h-[81px]'>condition. Plus, the customer service team was incredibly helpful.</p>
          </motion.div>

        </motion.div>

        {/* Name-FeedBack */}

        <motion.div
          initial={{ scale: 0, opacity: 0, x: -100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-[1200px] mx-auto text-[#503217] flex flex-wrap justify-center items-center my-6 sm:my-8 md:my-10 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 sm:px-4"
        >
          {[
            {
              id: 1,
              name: "James Wilson",
              title: "Manager",
              image: "/Images/Mask-group-1.png",
              delay: 0.7,
            },
            {
              id: 2,
              name: "Henry Adams",
              title: "CEO",
              image: "/Images/Mask-group-2.png",
              delay: 0.8,
            },
            {
              id: 3,
              name: "Ethan Harris",
              title: "Business Manager",
              image: "/Images/Mask-group-3.png",
              delay: 0.9,
            },
            {
              id: 4,
              name: "Lily Baker",
              title: "Product Manager",
              image: "/Images/Mask-group-4.png",
              delay: 1.0,
            },
          ].map((person) => (
            <motion.div
              key={person.id}
              initial={{ x: -10000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: person.delay }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[265px] min-h-[140px] h-auto flex items-center justify-start gap-3 outline outline-2 outline-[#503217] rounded-2xl p-4 bg-white"
            >
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={person.image}
                alt={person.name}
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-base md:text-lg xl:text-xl font-bold text-gray-500 whitespace-nowrap">
                  {person.name}
                </p>
                <p className="text-sm md:text-base text-gray-500/50">
                  {person.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>



      </motion.div>




      {/*Follow us @medifit  */}

      <motion.div className="w-full bg-[#F2F2F2] flex flex-col justify-center items-center py-6 px-3 sm:px-6 md:px-12 lg:px-24 sm:py-8 md:py-10 lg:py-12">
        {/* Title */}
        <motion.div
        initial={{ scale: 0, opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full text-[#503217] flex justify-center items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-2 sm:py-3 md:py-4 lg:py-5 mb-2 sm:mb-3 md:mb-4 lg:mb-5 font-bold">
            Follow us @medifit
          </h2>
        </motion.div>

        {/* Grid of Cards */}
        <motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          {followUs.map((item) => (
            <motion.div
              key={item.id}
              className="relative w-full items-center group"
            >
              {/* Image */}
              <motion.img
                initial={{ scale: 0, opacity: 0, x: -100 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`rounded-3xl w-full h-full object-cover ${item.id === 4 ? "rounded-t-full" : ""
                  } ${item.id === 3 ? "rounded-full" : ""} ${item.id === 2 ? "rounded-t-4xl" : ""
                  }`}
                src={item.image}
                alt={item.name}
              />

              {/* Hover Overlay */}
              <motion.div
                className={`absolute top-0 left-[100px] w-full h-full group-hover:bg-white/30 justify-center items-center hidden group-hover:flex duration-300 ease-out transition-all  group-hover:left-0 overflow-hidden
                  
            ${item.id === 4 ? "rounded-t-full group-hover:rounded-t-4xl" : ""}
            ${item.id === 3 ? "rounded-full group-hover:rounded-full" : ""}
            ${item.id === 2 ? "rounded-t-4xl group-hover:rounded-t-4xl" : ""}
            
          `}
              >
                <p className="text-[#503217] shadow-2xs flex items-center justify-center gap-2 flex-col text-xl font-bold">
                  {item.name}
                  <Link className="text-blue-500 w-fit " to={item.link} target="_blank">
                    {item.name === "Follow us on Instagram" && (
                      <FaInstagram className="text-2xl animate-bounce" />
                    )}
                    {item.name === "Follow us on Facebook" && (
                      <FaFacebookF className="text-2xl animate-bounce" />
                    )}
                    {item.name === "Follow us on Twitter" && (
                      <FaTwitter className="text-2xl animate-bounce" />
                    )}
                    {item.name === "Follow us on LinkedIn" && (
                      <FaLinkedin className="text-2xl animate-bounce" />
                    )}
                  </Link>
                </p>
              </motion.div>

              
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </motion.div >
  )
}
