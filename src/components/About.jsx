import React from 'react';

export default function About() {
  return (
    <div id='about' className='w-full  p-2 flex items-center py-16 mb-60'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 p-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I am?</h2>
          <p className='py-2 text-gray-600'>
            Hi, I'm Stefan (20) and I'm an aspiring software developer.
          </p>

          <p className='py-2 text-gray-600'>
            In 2023, I kicked off my coding adventure, starting with the basics
            of HTML and CSS. Soon, I stumbled upon the wonders of SCSS and
            Tailwind, opening the door to frameworks like React. But here's the
            catch - diving into React meant diving deep into JavaScript. So, I
            rolled up my sleeves and made it a mission to grasp every nuance of
            this indispensable language. Each day brings new lines of code, a
            chance to learn, and a step closer to mastering JavaScript.
          </p>

          <p className='py-2 text-gray-600'>
            Beyond the screen and keyboard, I'm all about the violin and
            Mandarin. Playing the violin isn't just about making music; it's
            about precision and attention to detail—skills that spill over into
            the coding world. Then there's Mandarin, a language that's not just
            a new set of words but a brain workout. These outside-of-code
            pursuits aren't just hobbies; they're contributors to a skill set
            that's as diverse as it is resilient. So, when it comes to coding,
            or life in general, I'm all about embracing every opportunity to
            learn and grow.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            <a href='#projects'>Check out my projects below</a>
          </p>
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='/'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
