import React from 'react';

export default function Home() {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='w-full h-full mx-auto p-2 flex justify-center items-center max-w-[1240px]'>
        <div>
          <p className='uppercase text-sm tracking-widest'>
            Aspiring Software Developer
          </p>

          <h1 className='py-4 text-gray-700 text-[60px]'>
            Hey, I'm <span className='text-[#5651e5] '>Stefan 👋🏼</span>
          </h1>

          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Aspiring FrontEnd Developer | Crafting Seamless Digital Experiences
            with Precision & Passion | Transforming Ideas into Code
          </p>

          <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a
                href='https://www.linkedin.com/in/developerstefandimitrov/'
                target='_blank'
              >
                {/* Linked in Icon - SVG */}
                <svg className='w-10 h-10' viewBox='0 0 48 48' version='1.1'>
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
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://github.com/stefand2003' target='_blank'>
                {/* <FaGithub /> */}
                <svg
                  class='w-10 h-10 text-gray-800 dark:text-black'
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
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='mailto:mr.dimitrov.stefan@gmail.com' target='_blank'>
                <svg
                  class='w-10 h-10 text-gray-800 dark:text-black'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
