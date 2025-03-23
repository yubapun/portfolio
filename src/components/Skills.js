import React from 'react';
import './Skills.css';

const Skills = ({ skills, isActive }) => {
  // Combining Technical Skills and Data Science into one "Technical Skills" category
  const technicalSkills = [...skills.technical, ...skills.datascience];
  
  // Keep Soft Skills as they are
  const softSkills = skills.softskills;

  return (
    <section id="skills" className={`skills-section ${isActive ? 'active' : ''}`}>
      <h2 className="section-title">My <span className="highlight">Skills</span></h2>
      <p className="section-subtitle">
        Technical abilities and expertise that I possess
      </p>
      
      <div className="skills-container two-column">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <div className="skill-tags">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <div className="skill-tags">
            {softSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;