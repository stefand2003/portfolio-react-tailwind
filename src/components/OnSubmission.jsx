import React from 'react';
import { Link } from 'react-router-dom';
import GreenTick from '../assets/images/done.svg';

export default function OnSubmission() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen pt-20 gap-8'>
      <img src={GreenTick} alt='' width={200} />

      <h2 className='text-[#87d487] max-w-[600px] text-center'>
        Thank you for submitting the contact form
      </h2>

      <Link to='/'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  );
}
