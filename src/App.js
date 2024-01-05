import './App.css';
import Nav from '../src/components/Nav';
import Main from '../src/components/Main';
import NetflixClone from '../src/projects/NetflixClone';
import Sushii from '../src/projects/Sushii';
import JobPlus from '../src/projects/JobPlus';
import OpenAI from '../src/projects/ChatClone';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/netflixCloneProject' element={<NetflixClone />} />
          <Route path='/sushiiProject' element={<Sushii />} />
          <Route path='/jobPlus' element={<JobPlus />} />
          <Route path='/openAI-ChatClone' element={<OpenAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
