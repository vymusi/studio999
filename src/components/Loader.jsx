import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Loader.css';

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [moveToCorner, setMoveToCorner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveToCorner(true);
      const hideLoader = setTimeout(() => {
        setLoading(false);
      }, 800); // transition before page loads
      return () => clearTimeout(hideLoader);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAllPagesClick = () => {
    navigate('/overview', { state: { startInGrid: true } });
  };

  return (
    <div className="loader-wrapper">
      {loading ? (
        <div className={`loader-999 ${moveToCorner ? 'move-corner' : ''}`}>
          <span>9</span>
          <span>9</span>
          <span className="dimmed-nine">9</span>
        </div>
      ) : (
        <>
          <div className="loader-topbar">
            <Link to="/" className="loader-999 fixed-corner clickable-999">
              <span>9</span>
              <span>9</span>
              <span className="dimmed-nine">9</span>
            </Link>
            <button className="all-pages-button" onClick={handleAllPagesClick}>
              View All Pages
            </button>
          </div>
          {children}
        </>
      )}
    </div>
  );
}
