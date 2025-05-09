import React from 'react';
import './FooterCTA.css';
import heroImage from '../../assets/hero-image.JPG';

export default function FooterCTA() {
  return (
    <section className="contact-cta-section">

      <h2 className="cta-title">LET’S WORK <br />TOGETHER</h2>

      {/* Floating button above image */}
      <div className="cta-button-wrapper">
        <a href="mailto:musi.vyas@gmail.com" className="cta-button">CONTACT NOW</a>
      </div>

      <div className="cta-horizontal-wrapper">
        <div className="cta-side-left">BASED IN NYC</div>
        <div className="cta-image-centered">
            <img src={heroImage} alt="Muskan Vyas" className="cta-image" />
        </div>
        <div className="cta-side-right">
            <div>
            <div className="cta-label-primary">CREATIVE DEVELOPER</div>
            <div className="cta-label-secondary">+ DESIGNER</div>
            </div>
        </div>
       </div>

      <div className="cta-description-block">
        <p className="cta-description">
          I’M MUSKAN VYAS — A MULTIDISCIPLINARY CREATIVE ENGINEER AND DIGITAL ARTIST.
          I CRAFT THOUGHTFUL, EXPRESSIVE INTERFACES THAT MERGE DESIGN, STORYTELLING, AND PERFORMANCE.
          FROM STUDIO999 IN NYC, I BLEND FASHION, MUSIC, AND CODE TO CREATE INTERACTIVE WORLDS.
        </p>

        <div className="cta-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">DRIBBBLE ↗</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER ↗</a>
        </div>
      </div>

      <footer className="cta-footer">
        <span>©2025 STUDIO999</span>
        <span className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO TOP
        </span>
      </footer>
    </section>
  );
}
