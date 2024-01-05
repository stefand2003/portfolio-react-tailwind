import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectItem({
  title,
  backgroundImg,
  projectUrl,
  tech,
}) {
  return (
    <div>
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300'>
        <img
          src={backgroundImg}
          alt='hello'
          className='rounded-xl group-hover:opacity-10'
        />
        <div className='hidden group-hover:block absolute'>
          <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
          <p className='pb-4 pt-2 text-white'>{tech}</p>
          <Link to={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
