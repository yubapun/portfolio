import React, { useState, useRef } from 'react';
import './Projects.css';
import VideoModal from './VideoModal';

const Projects = ({ projects, isActive }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [lastClickTime, setLastClickTime] = useState(0);
  const clickTimeoutRef = useRef(null);

  const handleProjectClick = (id) => {
    const currentTime = new Date().getTime();
    const timeSinceLastClick = currentTime - lastClickTime;
    
    // Clear any existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    // Double click detection (time between clicks less than 300ms)
    if (activeProject === id && timeSinceLastClick < 300) {
      setActiveProject(null); // Close the project on double-click
      setActiveImage(null);   // Reset active image
    } 
    // Single click
    else if (activeProject !== id) {
      setActiveProject(id); // Open a different project
      setActiveImage(null); // Reset active image
    }
    
    // Update the last click time
    setLastClickTime(currentTime);
  };

  const handleImageClick = (e, imageIndex) => {
    e.stopPropagation(); // Prevent the project card click
    if (activeImage === imageIndex) {
      setActiveImage(null);
    } else {
      setActiveImage(imageIndex);
    }
  };

  const openVideoModal = (e, src) => {
    e.stopPropagation(); // Prevent the project card from toggling
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setVideoSrc('');
  };

  const hasMultipleImages = (project) => {
    return Array.isArray(project.images) && project.images.length > 1;
  };

  const getProjectImage = (project) => {
    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images[0];
    }
    return project.image;
  };

  return (
    <section id="projects" className={`projects-section ${isActive ? 'active' : ''}`}>
      <h2 className="section-title">My Data <span className="highlight">Projects</span></h2>
      <p className="section-subtitle">
        Explore my portfolio of data science and analytics projects
      </p>
      
      <div className="projects-container">
        {projects.map(project => (
          <div 
            key={project.id} 
            className={`project-card ${activeProject === project.id ? 'expanded' : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-card-inner">
              {/* Non-expanded view shows first/main image */}
              {activeProject !== project.id && (
                <div className="project-image">
                  <img src={getProjectImage(project)} alt={project.title} />
                </div>
              )}
              
              {/* Expanded view with multiple images */}
              {activeProject === project.id && hasMultipleImages(project) && (
                <div className="image-gallery">
                  {project.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`gallery-image ${activeImage === index ? 'active' : ''}`}
                      onClick={(e) => handleImageClick(e, index)}
                    >
                      <img src={image} alt={`${project.title} - Example ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Expanded view with single image */}
              {activeProject === project.id && !hasMultipleImages(project) && (
                <div className="project-image">
                  <img src={getProjectImage(project)} alt={project.title} />
                </div>
              )}
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {activeProject === project.id && (
                  <div className="project-details">
                    <h4>Key Highlights</h4>
                    <ul>
                      {project.highlights.map((highlight, index) => (
                        <li 
                          key={index}
                          dangerouslySetInnerHTML={{ __html: highlight }}
                        ></li>
                      ))}
                    </ul>
                    <div className="project-links">
                      {project.videoFile && (
                        <button 
                          className="project-link video"
                          onClick={(e) => openVideoModal(e, project.videoFile)}
                        >
                          Watch Demo
                        </button>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link github"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Analysis
                        </a>
                      )}
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.type === 'tableau' ? 'View on Tableau Public' : 'Live Demo'}
                        </a>
                      )}
                    </div>
                    <div className="double-click-hint">Double-click to close</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={closeVideoModal} 
        videoSrc={videoSrc} 
      />
    </section>
  );
};

export default Projects;