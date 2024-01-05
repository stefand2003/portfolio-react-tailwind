import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Main() {
  return (
    <div className='p-4'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
