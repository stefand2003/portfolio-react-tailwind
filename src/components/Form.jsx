import React from 'react';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0rxgid9',
        'template_pbxa0fe',
        form.current,
        'eU3eEvi4-YFeDgt51'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
      method='POST'
      encType='multipart/form-data'
    >
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Name</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='user_name'
            required
          />
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Phone Number</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='user_phone'
            required
          />
        </div>
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='email'
          name='user_email'
          required
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subject</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='text'
          name='user_subject'
          required
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea
          className='border-2 rounded-lg p-3 border-gray-300'
          rows='10'
          name='message'
          required
        ></textarea>
      </div>
      <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
    </form>
  );
}
