import React from 'react';
import './About.css';

const About = ({ profile, isActive }) => {
  return (
    <section id="about" className={`about-section ${isActive ? 'active' : ''}`}>
      <h2 className="section-title">About <span className="highlight">Me</span></h2>
      
      <div className="about-container">
        <div className="about-content">
          <p className="about-bio">{profile.bio}</p>
          
          <div className="experience-section">
            <h3>Experience</h3>
            {profile.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4>{exp.role}</h4>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="education-section">
            <h3>Education</h3>
            {profile.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <p>
                  {edu.institution} <span className="year">• {edu.year}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default About;