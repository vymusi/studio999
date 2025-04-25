// Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';
import editorialImage from '../assets/hero-image.JPG';

export default function Home() {
  const [count, setCount] = useState(0);
  const [showThirdDigit, setShowThirdDigit] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (count < 99) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 40);
      return () => clearInterval(interval);
    } else {
      const thirdDigitTimeout = setTimeout(() => setShowThirdDigit(true), 600);
      const navRevealTimeout = setTimeout(() => setShowNav(true), 2300);
      const doneTimeout = setTimeout(() => setLoadingComplete(true), 2800);

      return () => {
        clearTimeout(thirdDigitTimeout);
        clearTimeout(navRevealTimeout);
        clearTimeout(doneTimeout);
      };
    }
  }, [count]);

  const navigate = useNavigate();
  const handleAllPagesClick = () => {
    navigate('/', { state: { startInGrid: true } });
  };


  return (
    <div className="home-container">
      {showNav && (
        <nav className="home-nav fade-in">
          <img src={logo} alt="Logo" className="home-logo" />
          <ul className="home-nav-links">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Resume</a></li>
            <li><a href="#portfolio">Work</a></li>
            <button className="all-pages-button" onClick={handleAllPagesClick}>
        View All Pages
      </button>

          </ul>
        </nav>
      )}

      <div className="hero-center-wrapper">
        <div className={`loader ${showThirdDigit ? 'with-third-digit' : ''}`}>
          <span className="digit">{count < 10 ? '0' : Math.floor(count / 10)}</span>
          <span className="digit">{count % 10}</span>
          {showThirdDigit && <span className="digit dimmed">9</span>}
        </div>

        {loadingComplete && (
          <p className="editorial-subtitle fade-in-subtitle">
            NOT A FINISH LINE.<br />
            NOT PERFECTION.<br />
            BUT A SACRED IN-BETWEEN.
          </p>
        )}
      </div>

      {loadingComplete && (
        <section className="editorial-section">
          <img src={editorialImage} alt="Editorial Visual" />
          <div className="editorial-text">
            <p>
              In numerology, 999 symbolizes completion and rebirth—the closing of one chapter and the gentle unfolding of the next.
              It’s the moment between inhale and exhale, the space where reflection turns into growth.
            </p>
            <p>
              For me, it’s a creative marker—a pulse point on the ever-expanding arc of my work.
            </p>
            <p>
              Not always at 100%. Never stagnant. Always evolving.
            </p>
            <p>
              The third 9 is quiet for a reason. It’s the unseen effort, the quiet grit, the lessons you don’t post but feel in your bones.
            </p>
            <p>
              It’s the echo of everything I’ve made so far—and a whisper toward what’s still coming.
            </p>
            <p>
              This site isn’t a portfolio. It’s a living archive of reinvention, reflection, and wild curiosity.
              Welcome to the work-in-progress.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
