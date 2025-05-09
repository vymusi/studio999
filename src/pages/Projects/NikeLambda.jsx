import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Loader from '../../components/Loader';
import lambdaImage from '../../assets/nikelambda.jpg';
import Marquee from '../../components/Marquee/Marquee';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './NikeLambda.css';

export default function NikeLambda() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const correctPassword = 'NikeLambda';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) setAuthenticated(true);
    else {
      alert('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };

  if (!authenticated) {
    return (
      <Loader>
        <div className="lock-screen">
          <h2>Protected Page</h2>
          <form onSubmit={handleSubmit} className="form">
            <input 
              type="password" 
              placeholder="Enter password..." 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">Unlock</button>
          </form>
        </div>
      </Loader>
    );
  }

  return (
    <Loader>
      <div className="lambda-page">
        <section className="hero-intro">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            NIKE LAMBDA / CAPACITY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-meta"
          >
            2024 · PLATFORM ENGINEER · 6 WEEKS
          </motion.p>
        </section>

        <ScrollParallax image={lambdaImage} title="Scaling with Precision" subtitle="Proactive infrastructure tuning for SNKRS launches." />

        <div className="case-study-content">
          <CaseSection title="Overview">
            <p>
              The Nike Lambda Scaling Function is a mission-critical service enabling auto-scaling of SNKRS infrastructure during launch events. It works in tandem with the Scheduled Scaler system to provision AWS Fargate containers in advance of demand, drastically improving performance, reducing costs, and eliminating manual intervention during high-traffic drops.
            </p>
            <p>
              This serverless Lambda-based solution ensures traffic thresholds dynamically match the resource allocations needed to support millions of users, utilizing logic derived from historical patterns and scaling strategies that optimize both cost and uptime.
            </p>
          </CaseSection>

          <CaseSection title="The Problem">
            <ul>
              <li>Manual scaling of AWS resources was operationally taxing and error-prone.</li>
              <li>High-traffic product launches would frequently lead to latency or outages.</li>
              <li>Pre-scaling was either excessive (wasteful) or insufficient (risky).</li>
            </ul>
          </CaseSection>

          <CaseSection title="Solution">
            <ul>
              <li>Developed an AWS Lambda function to receive traffic estimates and declare scaling levels.</li>
              <li>Integrated with Scheduled Scaler to proactively provision AWS Fargate containers.</li>
              <li>Implemented thresholds derived from historical launch data to control scaling granularity.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Architecture & Logic">
            <p>
              The Lambda function calculates traffic levels using a simple but effective switch-case logic:
            </p>
            <pre className="code-block">
              {`function getTrafficLevel(totalTraffic) {
                if (totalTraffic >= 1000000) return "LEVEL4";
                if (totalTraffic >= 500000) return "LEVEL3";
                if (totalTraffic >= 300000) return "LEVEL2";
                if (totalTraffic >= 50000)  return "LEVEL1";
                return "BASELINE";
              }`}
            </pre>
            <p>
              Based on the traffic level, the function declares the number of containers needed for both SNKRS and Launch Checkout services. This is returned as a JSON payload to the Scheduled Scaler.
            </p>
          </CaseSection>

          <CaseSection title="Key Results">
            <ul>
              <li>Reduced operational on-call load by 90% during major releases.</li>
              <li>Enabled scalable, declarative provisioning across global services.</li>
              <li>Improved load predictability and response time consistency during SNKRS launches.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Reflection">
            <p>
              Working on Nike's Lambda Scaling Function showed me the power of proactive infrastructure design. I saw firsthand how a well-crafted serverless function could replace hours of manual labor, increase platform resilience, and scale with confidence. If given more time, I’d explore integrating ML-based traffic predictions and further observability tooling to sharpen this system’s efficiency.
            </p>
          </CaseSection>
        </div>
      </div>
           <Marquee />
           <FooterCTA />
    </Loader>
  );
}

// Scroll-sync section with parallax
function ScrollParallax({ image, title, subtitle }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="scroll-parallax">
      <motion.img src={image} alt="Scroll visual" className="parallax-img" style={{ y, scale }} />
      <div className="parallax-caption">
        <motion.h2 className="parallax-title">{title}</motion.h2>
        <motion.p className="parallax-subtitle">{subtitle}</motion.p>
      </div>
    </section>
  );
}

// Section wrapper
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
