// Work.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ just motion, no AnimatePresence needed
import Loader from '../components/Loader';
import './Work.css';

// Media Imports
import ProbotImage from '../assets/probot.jpg';
import NikeSNKRSImage from '../assets/nikesnkrs.jpg';
import NikeLambdaImage from '../assets/nikelambda.jpg';
import SpotifyVideo from '../assets/spotify.mp4';
import ClosetAIImage from '../assets/closetai.jpeg';
import GovEagleVideo from '../assets/goveagle.mp4';

const projects = [
  { 
    title: "Nike - SNKRS Maps", 
    path: "/work/nikesnkrs", 
    meta: "2025 / Creative Fullstack Engineer", 
    media: NikeSNKRSImage,
    type: 'image'
  },
  { 
    title: "GovEagle", 
    path: "/work/goveagle", 
    meta: "2024 / Frontend UI Engineer", 
    media: GovEagleVideo,
    type: 'video'
  },
  { 
    title: "ProBot", 
    path: "/work/probot", 
    meta: "2023 / UX Designer | Creative Developer", 
    media: ProbotImage,
    type: 'image'
  },
  { 
    title: "Nike - Lambda/Capacity", 
    path: "/work/nikelambda", 
    meta: "2023 / Fullstack Engineer", 
    media: NikeLambdaImage,
    type: 'image'
  },
  { 
    title: "Closet.AI", 
    path: "/work/closetai", 
    meta: "2022 / Founder & Designer", 
    media: ClosetAIImage,
    type: 'image'
  },
  { 
    title: "Spotify Re-design", 
    path: "/work/spotify", 
    meta: "2021 / UX/UI Designer", 
    media: SpotifyVideo,
    type: 'video'
  },
];

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Loader>
      <div className="work-container">
        
       <div className="project-list">
        
        <div className="project-header-block">
          <div className="project-header">THE ARCHIVAL</div>
          <div className="project-subtitle">A curated record of my creative and technical evolutions.</div>
        </div>


          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-item"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onTouchStart={() => setHoveredProject(project)}
              onTouchEnd={() => setHoveredProject(null)}
            >
              <Link to={project.path} className="project-title">
                {project.title}
              </Link>
              <div className="project-meta">{project.meta}</div>
            </div>
          ))}
        </div>

        <div className="hover-preview">
          {hoveredProject && (
            hoveredProject.type === 'image' ? (
              <motion.div 
                key={hoveredProject.title}
                className="hover-image"
                style={{ backgroundImage: `url(${hoveredProject.media})` }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ) : (
              <motion.video
                key={hoveredProject.title}
                src={hoveredProject.media}
                autoPlay
                muted
                loop
                playsInline
                className="hover-video"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )
          )}
        </div>

      </div>
    </Loader>
  );
}
