import React from 'react';
import './Body.css';
import Section1 from './Section1';
import Section2 from './Section2';

const Body = () => {
  return (
    <div className="body-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Explore endless possibilities with our user-friendly and innovative solutions.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    
      <Section1/>
      <Section2/>
    </div>
  );
};

export default Body;