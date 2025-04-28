// Home.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';
import editorialImage from '../assets/hero-image.JPG';

export default function Home() {
  const [count, setCount] = useState(0);
  const [showThirdDigit, setShowThirdDigit] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  // NEW: Use sessionStorage instead of localStorage
  useEffect(() => {
    const loaderAlreadySeen = sessionStorage.getItem('loaderSeen') === 'true';

    if (loaderAlreadySeen) {
      setCount(99);
      setShowThirdDigit(true);
      setShowNav(true);
      setLoadingComplete(true);
    }
  }, []);

  useEffect(() => {
    if (count < 99) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 40);
      return () => clearInterval(interval);
    } else {
      const thirdDigitTimeout = setTimeout(() => setShowThirdDigit(true), 600);
      const navRevealTimeout = setTimeout(() => setShowNav(true), 2300);
      const doneTimeout = setTimeout(() => {
        setLoadingComplete(true);
        sessionStorage.setItem('loaderSeen', 'true'); // Use sessionStorage
      }, 2800);

      return () => {
        clearTimeout(thirdDigitTimeout);
        clearTimeout(navRevealTimeout);
        clearTimeout(doneTimeout);
      };
    }
  }, [count]);

  // const handleAllPagesClick = () => {
  //   navigate('/overview', { state: { startInGrid: true } });
  // };

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-container">
      {showNav && (
        <nav className="home-nav fade-in">
          <img src={logo} alt="Logo" className="home-logo" />
          <ul className="home-nav-links">
            <li><Link to="/about" className="home-nav-link">About</Link></li>
            <li><Link to="/resume" className="home-nav-link">Resume</Link></li>
             {/* <li><button className="all-pages-button" onClick={handleAllPagesClick}>
              View All Pages
            </button></li> */}
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
            NOT A MEASURE OF PERFECTION.<br />
            BUT A SACRED IN-BETWEEN.
          </p>
        )}
      </div>

      {loadingComplete && (
        <>
          <section className="home-main">
            <Link to="/work" className="home-side-text portfolio-link">
              PORTFOLIO
            </Link>

            <div 
              className="home-image-wrapper"
              onClick={handleImageClick}
            >
              <img src={editorialImage} alt="Muskan" className="home-image" />
              <div className="image-hover-text">Uncover Our Ethos</div>
            </div>

            <Link to="/playground" className="home-side-text playground-link">
              PLAYGROUND
            </Link>
          </section>

          {showPopup && (
            <div className="popup-overlay" onClick={handleClosePopup}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={handleClosePopup}>✕</button>
                <div className="home-text-block">
                <p>IN NUMEROLOGY, 999 SYMBOLIZES COMPLETION AND REBIRTH—THE CLOSING OF ONE CHAPTER AND THE GENTLE UNFOLDING OF THE NEXT. IT’S THE MOMENT BETWEEN INHALE AND EXHALE, THE SPACE WHERE REFLECTION TURNS INTO GROWTH.</p>
                <p>FOR ME, IT’S A CREATIVE MARKER—A PULSE POINT ON THE EVER-EXPANDING ARC OF MY WORK.</p>
                <p>NOT ALWAYS AT 100%. NEVER STAGNANT. ALWAYS EVOLVING.</p>
                <p>THE THIRD 9 IS QUIET FOR A REASON. IT’S THE UNSEEN EFFORT, THE QUIET GRIT, THE DEPTHS WHERE REAL TRANSFORMATION TAKES ROOT.</p>
                <p>IT’S THE ECHO OF EVERYTHING I’VE MADE SO FAR—AND A WHISPER TOWARD WHAT’S STILL COMING.</p>
                <p>THIS SITE ISN’T A PORTFOLIO. IT’S A LIVING ARCHIVE OF REINVENTION, REFLECTION, AND WILD CURIOSITY. WELCOME TO THE WORK-IN-PROGRESS.</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
