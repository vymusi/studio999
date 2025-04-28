import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Overview from './pages/Overview';

function App() {
  return (
    <Router basename="/studio999/">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;

