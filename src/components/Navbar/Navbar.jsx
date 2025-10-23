import React, { useState } from 'react';
import logo from '../../assets/Images/logo 2.png';
import Medifit from '../../assets/Images/Medifit.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { LuShoppingCart } from 'react-icons/lu';
import { IoMenu } from 'react-icons/io5';

export function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu && (
        <div
          className="fixed  w-full  bg-opacity-50  z-30 md:hidden transition-opacity duration-300"
          onClick={() => setShowMenu(false)}
        />
      )}
      <nav className='bg-white text-[#503217] py-3 sm:py-4 flex items-center justify-center'>
        <div className='flex justify-between items-center w-full max-w-[1200px] px-3 sm:px-4 md:px-6 lg:px-8'>
          <div>
           <Link className='flex items-center gap-2' to='/'>
            <img src={logo} alt='logo' />
            <img src={Medifit} alt='logo' />
           </Link>
          </div>

          <div >
            <ul className={`md:flex md:items-center md:justify-around md:gap-6 lg:gap-8 ${showMenu ? 'flex' : 'hidden'} md:relative absolute top-0 md:top-0 left-0 w-full md:w-auto md:h-auto h-screen bg-white/95 md:bg-transparent flex-col md:flex-row items-center justify-start md:justify-around pt-8 md:pt-0 space-y-6 md:space-y-0 shadow-2xl md:shadow-none transition-all duration-300 ease-in-out z-40`}>
              <li>
                <NavLink
                  to='/home'
                  className={({ isActive }) =>
                    `font-medium text-lg hover:text-[#8B5A3C] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B5A3C] after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-[#8B5A3C] after:w-full' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink  className={({ isActive }) =>
                    `font-medium text-lg hover:text-[#8B5A3C] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B5A3C] after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-[#8B5A3C] after:w-full' : ''}`
                  }
                   to='/shop'>Shop</NavLink>
              </li>
              <li>
                <select
                  defaultValue="pages"
                  className="bg-white border-2 border-[#503217] rounded-lg px-4 py-2 text-[#503217] font-medium cursor-pointer hover:border-[#8B5A3C] hover:text-[#8B5A3C] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value !== 'pages') navigate(value);
                  }}
                >
                  <option value="pages" disabled>Pages</option>
                  <option value="/home">Home</option>
                  <option value="/shop">Shop</option>
                  <option value="/about">About</option>
                  <option value="/contact">Contact</option>
                </select>
              </li>
              <li>
                <NavLink  className={({ isActive }) =>
                    `font-medium text-lg hover:text-[#8B5A3C] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B5A3C] after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-[#8B5A3C] after:w-full' : ''}`
                  } to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink  className={({ isActive }) =>
                    `font-medium text-lg hover:text-[#8B5A3C] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B5A3C] after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-[#8B5A3C] after:w-full' : ''}`
                  } to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className='text-xl sm:text-2xl flex items-center justify-around gap-3 sm:gap-4'>
            <CiSearch className='cursor-pointer hover:text-[#8B5A3C] transition-colors duration-200 hover:scale-110 transform' />
            <LuShoppingCart className='cursor-pointer hover:text-[#8B5A3C] transition-colors duration-200 hover:scale-110 transform' />
          </div>

          <div className='z-50 md:hidden'>
            <IoMenu
              className={`text-3xl cursor-pointer transition-transform duration-300 hover:scale-110 ${showMenu ? 'rotate-90' : ''}`}
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </nav>
    </>
  );

}