import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Loader from '../../components/Loader';
import mapImage from '../../assets/nikesnkrs.jpg';
import heroImage from '../../assets/hero-image.JPG';
import './NikeSNKRS.css';
import Marquee from '../../components/Marquee/Marquee';
import FooterCTA from '../../components/FooterCTA/FooterCTA';

export default function NikeSNKRS() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const correctPassword = 'NikeSNKRS';

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

const handleMouseMove = (e) => {
  const offsetX = e.clientX;
  const offsetY = e.clientY;
  setCursorX(offsetX);
  setCursorY(offsetY);
};  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) setAuthenticated(true);
    else {
      alert('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };

  if (!authenticated) {
    return (
      <Loader>
        <div className="lock-screen">
          <h2>Protected Page</h2>
          <form onSubmit={handleSubmit} className="form">
            <input 
              type="password" 
              placeholder="Enter password..." 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">Unlock</button>
          </form>
        </div>
      </Loader>
    );
  }
  

  return (
    <Loader>
      <div className="snkrs-page">

        {/* Hero Fullscreen */}
        <section className="hero-intro">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            SNKRS MAPS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-meta"
          >
            2025 · Creative Frontend Engineer · 6 Weeks
          </motion.p>
        </section>

        {/* Scroll-Pinned Section */}
        <ScrollParallax image={mapImage} title="A City Map Reimagined" subtitle="Turning sneaker drops into interactive maps." />

        {/* Case Study Blocks */}
        <div className="case-study-content">
          <CaseSection title="Overview">
            SNKRS Maps is a location-driven experience inside the Nike SNKRS platform that visualizes exclusive sneaker drops, city stories, and real-world events on a map. I led web development, integrating Apple Maps into SNKRS Web for the first time.
          </CaseSection>

          <CaseSection title="The Problem">
            Sneakerheads wanted to feel connected to drops in their city, but SNKRS lacked a local storytelling layer. The team needed a scalable way to bring location-based content to life.
          </CaseSection>

          <CaseSection title="Solution">
            <ul>
              <li>First-ever Apple Maps integration for SNKRS Web</li>
              <li>City-specific drop pins with editorial cards</li>
              <li>Custom React hooks for geolocation & fallback logic</li>
              <li>Design system implementation using Podium</li>
            </ul>
          </CaseSection>

          <CaseSection title="My Role">
            <ul>
              <li>Owned frontend architecture</li>
              <li>Built responsive map layout and hook ecosystem</li>
              <li>Collaborated with design, iOS, and backend platform teams</li>
              <li>Enabled internationalization via Bodega + flag-based rollout with Cerebro</li>
            </ul>
          </CaseSection>

          <CaseSection title="Results">
            <ul>
              <li>MVP shipped in 6 weeks</li>
              <li>90+ Lighthouse score</li>
              <li>Framework reused for future scavenger hunts & local drops</li>
            </ul>
          </CaseSection>

          <CaseSection title="Reflection">
            This was one of the most creatively fulfilling launches I’ve led. I designed with emotion, built with performance, and shipped with speed.
          </CaseSection>
        </div>

        <Marquee />
        <FooterCTA />
      </div>
    </Loader>
  );
}

// Scroll-parallax visual section
function ScrollParallax({ image, title, subtitle }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="scroll-parallax">
      <motion.img src={image} alt="" className="parallax-img" style={{ y, scale }} />
      <div className="parallax-caption">
        <motion.h2 className="parallax-title">{title}</motion.h2>
        <motion.p className="parallax-subtitle">{subtitle}</motion.p>
      </div>
    </section>
  );
}

// Reusable content section
function CaseSection({ title, children }) {
  return (
    <motion.section
      className="case-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="case-title">{title}</h2>
      <div className="case-content">{children}</div>
    </motion.section>
  );
}
