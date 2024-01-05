import React, { useState } from 'react';
import StefanLogo from '../assets/images/logo.png';

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#f9fdff]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <a href='/'>
          <img src={StefanLogo} alt='/' width='50' height='50' />
        </a>

        <div>
          <ul className='hidden md:flex'>
            <li>
              <a href='/' className='ml-10 text-sm uppercase hover:border-b'>
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='ml-10 text-sm uppercase hover:border-b'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='ml-10 text-sm uppercase hover:border-b'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='ml-10 text-sm uppercase hover:border-b'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='ml-10 text-sm uppercase hover:border-b'
              >
                Contact
              </a>
            </li>
          </ul>

          <div>
            {/* Hamburger Icon */}
            <div className='md:hidden cursor-pointer' onClick={handleNav}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f9fdff] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <img
                src={StefanLogo}
                alt='/'
                width='75'
                height='75'
                className='cursor-pointer'
              />

              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <a href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </a>
              <a href='#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </a>
              <a href='#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </a>
              <a href='#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </a>
              <a href='#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </a>
            </ul>

            <div className='pt-40'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
