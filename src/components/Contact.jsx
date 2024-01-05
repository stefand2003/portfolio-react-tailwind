import React from 'react';

import doubleChevron from '../assets/images/doubleChevronUp.svg';

export default function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen '>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Lets get in touch</h2>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div className='py-2'>
                <img
                  src='https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsbGluZyUyMHBob25lfGVufDB8fDB8fHww'
                  alt=''
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                />
              </div>
              <div>
                <h2 className='py-2'>Stefan Dimitrov</h2>
                <p className='py-2'>Aspiring Software Developer</p>
                <p className='py-4'>
                  My dream is to develop a deep and lasting connection with
                  people. I am always open to new ideas and opportunities. Let's
                  work together!
                </p>
              </div>

              <div>
                <p className='uppercase pt-8'>Feel free to connect with me</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <svg className='w-8 h-8' viewBox='0 0 48 48' version='1.1'>
                      <title>Linkedin</title>
                      <g
                        id='Icon/Social/linkedin-color'
                        stroke='none'
                        stroke-width='1'
                        fill='none'
                        fill-rule='evenodd'
                      >
                        <path
                          d='M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z'
                          id='Shape'
                          fill='#000000'
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <svg
                      class='w-8 h-8 text-gray-800 dark:text-black'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <svg
                      class='w-8 h-8 text-gray-800 dark:text-black'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 bg-gradient-to-tr from-[#5651e5] to-[#709dff] duration-300 hover:scale-105 rounded-xl'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* smooth scroll to the top */}
        <div className='flex justify-center py-12'>
          <a href='#'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <img src={doubleChevron} alt='hello' className='w-8' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
