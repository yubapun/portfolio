import React from 'react';
import './Hero.css';
import selfie from '../image/Professional_Pic.jpg'

const Hero = ({ profile, isActive, setActiveSection }) => {
  return (
    <section id="hero" className={`hero-section ${isActive ? 'active' : ''}`}>
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">{profile.name}</span></h1>
        <h2>Research Assistant & Analytics Professional</h2>
        {/* Text under the title has been removed */}
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
          {/* New button to the About page */}
          <button 
            className="secondary-button"
            onClick={() => {
              setActiveSection('about');
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About Me
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


