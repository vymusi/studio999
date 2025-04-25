import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Overview from './pages/Overview';
import PaperTexture from './components/PaperTexture';

function App() {
  return (
    <Router>
       <PaperTexture />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
