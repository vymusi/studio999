import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Loader from '../../components/Loader';
import heroImage from '../../assets/hero-image.JPG';
import probotImage from '../../assets/probot.jpg';
import './Probot.css';
import Marquee from '../../components/Marquee/Marquee';
import FooterCTA from '../../components/FooterCTA/FooterCTA';

export default function ProBot() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  return (
    <Loader>
      <div className="probot-page">

        {/* Hero Section */}
        <section className="hero-intro">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="hero-title">ProBot</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="hero-meta">2024 · UX Engineer & AI Designer · 6 Weeks</motion.p>
        </section>

        {/* Scroll Visual */}
        <ScrollParallax image={probotImage} title="Your Personal AI Learning Companion" subtitle="Encouraging curiosity-led learning through LLMs." />

        {/* Case Study Sections */}
        <div className="case-study-content">
          <CaseSection title="Overview">
            <p>
              ProBot is an interactive AI Chat Bot Tutor designed to support students and early-career professionals. Unlike typical answer-generating bots, ProBot was developed to spark deeper thinking, inspire curiosity, and guide learners to reframe their questions. Built using Language Learning Models (LLMs), the project intersects advanced AI, educational psychology, and intuitive UX to create a human-like learning experience.
            </p>
          </CaseSection>

          <CaseSection title="Problem">
            <p>
              Traditional education systems often fail to provide individualized support, leaving users to face information overload and outdated learning models. Learners lack access to customized guidance, especially in self-directed environments. Our challenge was to create a tool that not only answers questions but also cultivates long-term learning skills, critical thinking, and motivation.
            </p>
          </CaseSection>

          <CaseSection title="Challenges">
            <ul>
              <li>Combating information overload while surfacing relevant knowledge</li>
              <li>Designing for a wide range of learning preferences and literacy levels</li>
              <li>Addressing skepticism about AI’s educational role</li>
              <li>Balancing assistive features with fostering autonomy</li>
              <li>Ensuring accessibility and equitable digital access</li>
            </ul>
          </CaseSection>

          <CaseSection title="Discover Phase">
            <p>
              We conducted in-depth qualitative interviews with students and professionals across the country via Zoom. Sessions averaged 30–45 minutes, with user consent and a mix of video/audio feedback. We captured both emotional cues and cognitive pain points. Simultaneously, a broad user survey reached over 50 participants, uncovering behavior patterns, frustrations, and wishlists.
            </p>
            <p>
              Competitive analysis revealed gaps in empathy and personalization within existing tools like Khan Academy, Google Bard, and Duolingo. These insights formed the groundwork for a differentiated solution grounded in accessibility and conversational design.
            </p>
          </CaseSection>

          <CaseSection title="Define Phase">
            <p>
              Using affinity diagramming, we synthesized recurring insights from interviews and surveys. Emerging themes included adaptability, resource fatigue, fear of AI misunderstanding, and lack of motivation. We created personas like “Alice,” a junior engineer at TikTok balancing remote work and rapid skill acquisition, to embody our target audience.
            </p>
            <p>
              Empathy maps and journey flows revealed moments of confusion, hesitation, and learning breakthroughs—guiding our design toward simplicity, encouragement, and feedback.
            </p>
          </CaseSection>

          <CaseSection title="Ideation Phase">
            <p>
              Leveraging these insights, we mapped a product ecosystem highlighting moments of intervention—from initial query to conceptual reinforcement. We sketched over 20 task flows to visualize user behavior and inform our system architecture. The core goal? Make asking questions feel like a collaboration rather than a transaction.
            </p>
          </CaseSection>

          <CaseSection title="Design Phase">
            <p>
              We began with low-fidelity paper wireframes, transitioning to interactive mid-fidelity flows using Figma. Feedback loops with test users helped us refine typography, color contrast, and conversational UI tone. Components were built using React and a custom Material Design-based system for consistency.
            </p>
            <p>
              The final design focused on clarity and curiosity, with a minimalist interface that invites questions while gently nudging users toward deeper inquiry.
            </p>
          </CaseSection>

          <CaseSection title="Solution">
            <ul>
              <li>LLM-powered chatbot tailored for curiosity and critical thinking</li>
              <li>Minimalist UI optimized for speed and emotional clarity</li>
              <li>Fully responsive design system prioritizing accessibility</li>
              <li>Integrated feedback loop to flag confusion or frustration</li>
            </ul>
          </CaseSection>

          <CaseSection title="Results">
            <ul>
              <li>93% of test users preferred ProBot over FAQ-style resources</li>
              <li>2.5x increase in session time compared to standard chatbot tools</li>
              <li>5 key UX learnings used to refine future AI tools</li>
            </ul>
          </CaseSection>

          <CaseSection title="Reflection">
            <p>
              ProBot challenged me to think beyond traditional product roles—to become an educator, psychologist, and technologist at once. This project reminded me that design is most powerful when it amplifies human curiosity. The future of AI isn't in giving answers, it's in helping us ask better questions.
            </p>
          </CaseSection>
        </div>

       <Marquee />
       <FooterCTA />
      </div>
    </Loader>
  );
}

// Scroll-Parallax Visual
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

// Reusable Section Block
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
