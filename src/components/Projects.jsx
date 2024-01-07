import React from 'react';
import ProjectItem from './ProjectItem';

import SushiImage from '../assets/images/sushiiCover.png';
import ChatImage from '../assets/images/chatGPTCloneCover.png';
import CatsCover from '../assets/images/catsCover.png';
import ComfyStore from '../assets/images/comfyStore.png';

export default function Projects() {
  return (
    <div id='projects' className='w-full mb-60'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Sushii App - HTML / SCSS'
            backgroundImg={SushiImage}
            projectUrl='/sushiiProject'
            tech='React'
          />
          <ProjectItem
            title='Lesson Dashboard'
            backgroundImg={CatsCover}
            projectUrl='/dashboardLessonDesign'
            tech='React and SCSS'
          />

          <ProjectItem
            title='Ecommerce - Furniture Store'
            backgroundImg={ComfyStore}
            projectUrl='/ecommerceFurniture'
            tech='Vanilla Javascript'
          />

          <ProjectItem
            title='OpenAI - ChatGPT Clone'
            backgroundImg={ChatImage}
            projectUrl='/openAI-ChatClone'
            tech='React'
          />
        </div>
      </div>
    </div>
  );
}
