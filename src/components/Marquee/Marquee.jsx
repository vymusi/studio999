import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Marquee.css';

export default function Marquee() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  return (
    <section
      className="marquee-section"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
    >
      <div className="marquee-track">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="marquee-text">THE VAULT</span>
        ))}
      </div>
      {cursorVisible && (
        <Link
          to="/work"
          className="view-cursor"
          style={{ left: cursorX, top: cursorY }}
        >
          VIEW MORE ARCHIVES
        </Link>
      )}
    </section>
  );
}
