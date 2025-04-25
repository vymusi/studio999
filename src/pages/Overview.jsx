import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Overview.css';

const pages = [
  { name: 'Home', route: '/home', number: '01' },
  { name: 'About', route: '/about', number: '02' },
  { name: 'Resume', route: '/resume', number: '03' },
  { name: 'Work', route: '/work', number: '04' },
];

export default function Overview() {
  // const [view, setView] = useState('stacked');
  const location = useLocation();
  const [view, setView] = useState(location.state?.startInGrid ? 'grid' : 'stacked');

  return (
    <div className={`overview-container ${view}`}>
      {view === 'stacked' && (
        <div className="stacked-wrapper">
          {pages.map((page, index) => (
            <Link
              key={page.name}
              to={page.route}
              className={`tab-card ${view}`}
              style={{
                top: `-${index * 100}px`,
                // backgroundColor: page.color,
                zIndex: pages.length - index
              }}
            >
              <div className="fake-url-bar">
                <div className="circles">
                  <span className="circle red"></span>
                  <span className="circle yellow"></span>
                  <span className="circle green"></span>
                </div>
                <div className="url-text">https://muskan.dev/{page.name.toLowerCase()}</div>
              </div>

              <div className="tab-card-content">
                <div className="tab-number">{page.number}</div>
                <div className="tab-title">{page.name}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {view === 'grid' &&
        pages.map((page) => (
          <Link
            key={page.name}
            to={page.route}
            className={`tab-card ${view}`}
            // style={{ backgroundColor: page.color }}
          >
            <div className="tab-card-content">
              <div className="tab-number">{page.number}</div>
              <div className="tab-title">{page.name}</div>
            </div>
          </Link>
        ))}

      <button
        className="toggle-button"
        onClick={() => setView(view === 'grid' ? 'stacked' : 'grid')}
      >
        {view === 'grid' ? 'Switch to Stacked View' : 'Switch to Grid View'}
      </button>
    </div>
  );
}
