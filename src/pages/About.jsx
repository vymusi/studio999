import React, { useState } from 'react';
import Loader from '../components/Loader';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <ul>
            <li><span>Web Developer/Engineer</span><br />Web App Development</li>
            <li><span>Designer</span><br />Designing Web/App Interfaces</li>
            <li><span>Artist</span><br />Multimedia Art</li>
          </ul>
        );
      case 'experience':
        return (
          <ul>
            <li><span>2024</span><br />Lead Designer at GovEagle (YC Startup)</li>
            <li><span>2023-Current</span><br />Software Engineer at SNKRS</li>
            <li><span>2021-2023</span><br />Associate Software Engineer at Nike</li>
            <li><span>2020</span><br />Creative Engineer Intern at Nike</li>
            <li><span>2019-2021</span><br />Web Developer at Vintage Vinyl Records</li>
            <li><span>2019-2020</span><br />Research Assistant at Rutgers University-New Brunswick</li>
            <li><span>2019</span><br />UX Designer at Hydrotechnology Consultants, Inc</li>
          </ul>
        );
      case 'education':
        return (
          <ul>
            <li><span>2023</span><br />User Experience Design at Cornell University</li>
            <li><span>2017-2021</span><br />B.A. in Information Technology & Informatics from Rutgers University</li>
            <li><span>2017-2021</span><br />B.A. in Cognitive Science from Rutgers University</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <Loader> 
    <div className="about-container">
      <h1 className="sub-title">About</h1>
      <p className="bio">
        MUSKAN /MUHS-KAWN/ (NOUN) - SMILE<br />
        Muskan Vyas, a name synonymous with a wide-eyed curiosity, is working towards weaving unique narratives that unveil brand identity and integrity through forward-thinking Web Design—powering through her expertise in UX/UI & FrontEnd Engineering. With every project, she plunges into the depths of individuality, exploration, and formulaic intent, orchestrating meaningful work, keeping her clients happy with a Muskan (smile).
      </p>

      <div className="tab-titles">
        <p className={`tab-link ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
        <p className={`tab-link ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>Experience</p>
        <p className={`tab-link ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</p>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
    </Loader>
  );
}
