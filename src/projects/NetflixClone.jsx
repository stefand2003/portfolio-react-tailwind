import React from 'react';
import { Link } from 'react-router-dom';

import SushiImage from '../assets/images/sushii.svg';

export default function NetflixClone() {
  return (
    <div className='pt-20'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[20vh] md:h-[25vh] lg:h-[40vh] bg-black/80 z-10' />
        <img src={SushiImage} className='absolute z-1 object-cover' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-100%] text-white z-10 p-2'>
          <h2 className='py-2 text-5xl sm:text-6xl'>Netflix Clone</h2>
          <h3 className='py-2 text-2xl sm:text-3xl'>React</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React. It's a clone of Netflix. It features
            React JS development, Building responsive user interfaces, State
            management using React Hooks, Integration with third-party APIs,
            User authentication and authorisation using Firebase Auth,
            Deployment of React application using Netlify and Heroku
          </p>
          <a
            href='https://sushii-iota.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/stefand2003/sushii.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 '>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 gap-4'>
              <p className='text-gray-600 py-2 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                React JS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                Responsive
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                React Hooks
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                3rd-party API
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                Firebase Auth
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                Netify
              </p>
            </div>
          </div>
        </div>
        <Link to='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
}
