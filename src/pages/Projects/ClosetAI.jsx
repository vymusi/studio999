import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Loader from '../../components/Loader';
import closetImage from '../../assets/closetai.jpeg';
import Marquee from '../../components/Marquee/Marquee';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './ClosetAI.css';

export default function ClosetAI() {
  return (
    <Loader>
      <div className="closetai-page">
        {/* Hero */}
        <section className="hero-intro">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Closet.AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-meta"
          >
            2022 · Founder & Designer · Full POC
          </motion.p>
        </section>

        {/* Scroll Synced Visual */}
        <ScrollParallax
          image={closetImage}
          title="Virtual Try-On for Real-World Confidence"
          subtitle="Merging luxury, identity, and immersive tech to reshape how we style ourselves"
        />

        {/* Case Study Sections */}
        <div className="case-study-content">
          <CaseSection title="Overview">
            Closet.AI is an experimental AI x fashion concept that explores how virtual try-on, body scanning, and 3D avatars can empower self-expression. It integrates style theory, user psychology, and high-fidelity visuals to deliver personal, immersive fashion experiences in the virtual realm.
          </CaseSection>

          <CaseSection title="The Problem">
            Most virtual try-on solutions today are limited to basic overlays or filters. They fail to capture realism, body diversity, and the full expressive potential of clothing in context.
          </CaseSection>

          <CaseSection title="My Role">
            <ul>
              <li>Led product ideation and UX strategy</li>
              <li>Designed interface wireframes and interaction flows</li>
              <li>Researched and sourced industry-grade 3D scanning methods</li>
              <li>Developed a proof-of-concept for the virtual mirror</li>
              <li>Conducted persona research and user journey mapping</li>
            </ul>
          </CaseSection>

          <CaseSection title="Process">
            <ul>
              <li><strong>Discover:</strong> Market analysis, luxury consumer personas, trend research</li>
              <li><strong>Define:</strong> Created flowcharts, ecosystem diagrams, feature requirements</li>
              <li><strong>Design:</strong> Figma wireframes, avatar interactions, POC styling prototype</li>
              <li><strong>Refine:</strong> Collaborated with engineers to integrate AR mirror interaction concepts</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Considerations">
            <ul>
              <li>Body scanning with Artec3D, Size Stream, and Unity-compatible avatar mesh exports</li>
              <li>Real-time rendering via Unity with PBR materials + lighting</li>
              <li>Gesture and voice-based controls (Google Assistant style)</li>
              <li>Modular system for AR overlays, virtual catalogues, and animated garments</li>
            </ul>
          </CaseSection>

          <CaseSection title="Reflection">
            Building Closet.AI helped me dive into fashion as a medium for storytelling through tech. It reshaped how I view identity, fit, and luxury — not as static categories, but as dynamic tools for confidence and culture.
          </CaseSection>
        </div>
      </div>

     <Marquee />
     <FooterCTA />
    </Loader>
  );
}

// Scroll-pinned visual
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

// Reusable case section
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
