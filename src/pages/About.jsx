import React from 'react';
import Loader from '../components/Loader';
import './About.css';
import AboutImage from '../assets/about-portrait.jpg'; // or correct image path

export default function About() {
  return (
    <Loader> 
      <div className="about-page">
        <div className="about-left">
          <h1 className="about-heading">ABOUT</h1>
          <div className="about-divider"></div> {/* NOT self-closed */}

          <div className="about-description">
            <p>Hi, I’m <strong>Muskan</strong> — a <strong>Creative Engineer</strong> and multidisciplinary artist based in NYC.</p>
            <p>With a background spanning UX/UI design, front-end development, and consumer tech, I specialize in weaving thoughtful, forward-thinking web experiences that unveil brand identity and integrity.</p>
            <p>I have a wide-eyed curiosity for building across disciplines — blending design systems, user psychology, and modern web architecture into immersive digital stories. When I'm not engineering interfaces or crafting visuals, I’m usually chasing inspiration through music, art, and city streets — camera in hand, capturing the beauty of the details hidden in everyday moments.</p>
            <p>As a creative technologist, I thrive at the intersection of structure and intuition. My expertise stretches from UX research and high-fidelity UI design to frontend web & native development — along with a passion for creating experiences that feel as alive as they are functional.</p>
            <p>At the heart of it all, I care about crafting work that reflects individuality, exploration, and the quiet, unseen effort that real growth demands.</p>
            <p><em>Studio999 is my living archive of that journey — not a finish line, but a pulse point along the way. Always evolving. Always unfolding.</em></p>
          </div>
        </div>

        <div className="about-right">
          <img src={AboutImage} alt="About Muskan" className="about-image" />
        </div>
      </div>
    </Loader>
  );
}
