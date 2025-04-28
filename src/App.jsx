import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Playground from './pages/Playground';
import Overview from './pages/Overview';
import Probot from './pages/Projects/Probot';
import NikeSNKRS from './pages/Projects/NikeSNKRS';
import NikeLambda from './pages/Projects/NikeLambda';
import Spotify from './pages/Projects/Spotify';
import ClosetAI from './pages/Projects/ClosetAI';
import GovEagle from './pages/Projects/GovEagle';

function App() {
  return (
    <Router basename="/studio999/">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/playground" element={<Playground />} />

        <Route path="/work/probot" element={<Probot />} />
        <Route path="/work/nikesnkrs" element={<NikeSNKRS />} />
        <Route path="/work/nikelambda" element={<NikeLambda />} />
        <Route path="/work/spotify" element={<Spotify />} />
        <Route path="/work/closetai" element={<ClosetAI />} />
        <Route path="/work/goveagle" element={<GovEagle />} />
      </Routes>
    </Router>
  );
}

export default App;

