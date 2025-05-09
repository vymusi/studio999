// GovEagle.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Loader from '../../components/Loader';
import govEagleImage from '../../assets/GovEagle-project-image.jpg';
import Marquee from '../../components/Marquee/Marquee';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './GovEagle.css';

export default function GovEagle() {
  return (
    <Loader>
      <div className="goveagle-page">
        <section className="hero-intro">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            GovEagle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-meta"
          >
            2024 · Freelance UI/UX Frontend Engineer · Y Combinator Startup
          </motion.p>
        </section>

        <ScrollParallax
          image={govEagleImage}
          title="Government Contracting, Reinvented"
          subtitle="Designing clarity into AI-powered compliance tools"
        />

        <div className="case-study-content">
          <CaseSection title="Project Overview">
            GovEagle is an AI-powered proposal builder for government contractors. As a freelance UI/UX Frontend Engineer, I was brought in to refine the platform’s interface and frontend experience—enhancing usability, aligning the visual system with federal standards, and ensuring that interaction with AI-generated proposal components felt responsive, clear, and intuitive.
          </CaseSection>

          <CaseSection title="The Problem">
            While GovEagle’s backend AI tools were powerful, the user interface presented several friction points. There was an overuse of white space, unclear navigation cues, and key actions like requirement validation and document annotation were not intuitive. Users struggled with locating relevant proposal text and confirming compliance effectively.
          </CaseSection>

          <CaseSection title="My Role">
            <ul>
              <li>Designed and implemented responsive UI components in React</li>
              <li>Improved layout and visual hierarchy using Figma before development</li>
              <li>Enhanced the PDF viewer with scroll-sync and intelligent text highlighting</li>
              <li>Redesigned button placement, spacing, and progress interactions</li>
              <li>Applied UX best practices from my Cornell certification in responsive design</li>
            </ul>
          </CaseSection>

          <CaseSection title="Design Process">
            I kicked off the design process with a UX audit of the existing product, identifying areas of friction. I sketched low-fidelity mockups, refined them in Figma, and translated those into reusable, accessible React components. Through ongoing stakeholder meetings, I iterated on feature sets like the dynamic requirement list, hover-based feedback, and AI-aligned tagging filters. This ensured user flows were minimal, clear, and visually informative.
          </CaseSection>

          <CaseSection title="UX Improvements & Highlights">
            <ul>
              <li>Added PDF viewer enhancements that scroll to the selected requirement</li>
              <li>Color-coded highlights for better cognitive mapping between AI suggestions and proposal text</li>
              <li>Repositioned progress indicators and buttons for intuitive tabbed navigation</li>
              <li>Enabled smart filtering of requirements using metadata from AI</li>
              <li>Proposed collapsing panels and hover opacity states to reduce visual clutter</li>
            </ul>
          </CaseSection>

          <CaseSection title="Impact">
            My improvements streamlined how users interacted with their compliance data and AI-generated suggestions. The UI changes led to clearer alignment between proposal sections and government RFPs, improved usability for non-technical users, and better feature adoption during red-team reviews. GovEagle stakeholders responded positively to the polished design, and my work set the foundation for future scalable UI design practices.
          </CaseSection>

          <CaseSection title="Reflection">
            GovEagle was a chance to bridge cutting-edge AI tooling with thoughtful frontend design. Working with constraints in the GovCon space pushed me to prioritize clarity, precision, and trust in the user experience. This freelance engagement helped me refine my eye for interaction detail—and validated how powerful design is when paired with well-scoped engineering.
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
      <motion.img src={image} alt="GovEagle Hero" className="parallax-img" style={{ y, scale }} />
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
