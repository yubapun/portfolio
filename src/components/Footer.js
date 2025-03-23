import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="name">Yuba Raj Pun</span>
          <span className="title">Data Portfolio</span>
        </div>
        
        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/yuba-pun/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            LinkedIn
          </a>
          <a href="https://github.com/yubapun" target="_blank" rel="noopener noreferrer" className="social-link github">
            GitHub
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Yuba Raj Pun</p>
      </div>
    </footer>
  );
};

export default Footer;