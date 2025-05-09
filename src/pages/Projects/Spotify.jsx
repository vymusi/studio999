import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Loader from '../../components/Loader';
import heroImage from '../../assets/hero-image.JPG';
import spotifyHero from '../../assets/spotify-project-image.png'; // update if needed
import Marquee from '../../components/Marquee/Marquee';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './Spotify.css';

export default function Spotify() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  return (
    <Loader>
      <div className="spotify-page">

        {/* Hero */}
        <section className="hero-intro">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Spotify Reimagined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-meta"
          >
            2023 · Brand Analysis & UX Redesign · Solo
          </motion.p>
        </section>

        {/* Scroll Visual */}
        <ScrollParallax image={spotifyHero} title="Reimagining Music Discovery" subtitle="Making Spotify more social, serendipitous, and human." />

        {/* Case Study */}
        <div className="case-study-content">
          <CaseSection title="Overview">
            Spotify’s strength lies in its immersive, intuitive UI—but I noticed an opportunity to elevate music discovery beyond algorithmic predictability. This redesign explores how human connection, social curation, and storytelling can reshape the platform’s UX.
          </CaseSection>

          <CaseSection title="The Problem">
            As algorithms refined themselves, the surprise element of discovery slowly faded. Users, especially long-time listeners like myself, began craving the unexpected—music outside of known preferences and within community contexts.
          </CaseSection>

          <CaseSection title="Research">
            I conducted a deep-dive into Spotify’s Information Architecture, ran empathy interviews with college students, and used frameworks like empathy mapping and storyboarding. The research revealed pain points in personalization, music sharing, and social UX, especially during moments of cultural connection, study, and workouts.
          </CaseSection>

          <CaseSection title="Solution">
            <ul>
              <li>Spotify Collab: Shared listening zones where friends could queue and react to songs in real-time.</li>
              <li>Discovery Duo: A feature that pairs you with a friend or curated user to introduce mutual recommendations weekly.</li>
              <li>Social Circles: Integrated community playlists with voting and annotations, encouraging group discovery.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Design Process">
            <ul>
              <li>Ran a user persona-based UX audit on existing Spotify app.</li>
              <li>Sketched early wireframes, mapped flow across various interaction zones.</li>
              <li>Built low-to-high fidelity wireframes using Adobe XD and Illustrator.</li>
              <li>Developed a story-centered UI using Spotify's design guidelines and spacing system.</li>
            </ul>
          </CaseSection>

          <CaseSection title="User Insights">
            <ul>
              <li>Users associate deep identity with music—there's vulnerability in sharing.</li>
              <li>Discovery works best when it's tied to emotion, not just data.</li>
              <li>Friends and playlists are the most underutilized UX vectors in the app.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Reflection">
            This project reinforced the role of storytelling in product design. I learned that building delight in platforms like Spotify isn’t just about cleaner UI—it’s about designing for belonging, surprise, and emotional resonance.
          </CaseSection>
        </div>
      </div>
                 <Marquee />
                 <FooterCTA />
    </Loader>
  );
}

function ScrollParallax({ image, title, subtitle }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="scroll-parallax">
      <motion.img src={image} alt="Spotify Scroll" className="parallax-img" style={{ y, scale }} />
      <div className="parallax-caption">
        <motion.h2 className="parallax-title">{title}</motion.h2>
        <motion.p className="parallax-subtitle">{subtitle}</motion.p>
      </div>
    </section>
  );
}

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
