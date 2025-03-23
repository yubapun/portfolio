import React from 'react';
import './Hero.css';
import selfie from '../image/Professional_Pic.jpg';

const Hero = ({ profile, isActive, setActiveSection }) => {
  return (
    <section id="hero" className={`hero-section ${isActive ? 'active' : ''}`}>
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">{profile.name}</span></h1>
        <h2>{profile.title}</h2>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-cta">
          <button 
            className="primary-button"
            onClick={() => {
              setActiveSection('projects');
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Projects
          </button>
          <button 
            className="secondary-button"
            onClick={() => {
              setActiveSection('contact');
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={selfie} alt="Your Name - Professional headshot" />
      </div>
    </section>
  );
};

export default Hero;