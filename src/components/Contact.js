import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ isActive }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({ submitted: true, error: false, message: 'Sending your message...' });
    
    try {
      
      const response = await fetch('https://formspree.io/f/xwplozrz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      
      // For demo purposes (comment this out when using a real service)
      // This simulates a successful form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error sending your message. Please try again.'
      });
    }
  };

  const handleTryAgain = () => {
    setFormStatus({
      submitted: false,
      error: false,
      message: ''
    });
  };

  return (
    <section id="contact" className={`contact-section ${isActive ? 'active' : ''}`}>
      <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
      <p className="section-subtitle">
        Have a question or want to work together? Send me a message!
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Singapore</p>
          </div>
          <div className="contact-item">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/yuba-pun" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                LinkedIn
              </a>
              <a href="https://github.com/yubapun" target="_blank" rel="noopener noreferrer" className="social-link github">
                GitHub
              </a>
             
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {formStatus.submitted && !formStatus.error ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>{formStatus.message}</p>
              <button className="secondary-button" onClick={handleTryAgain}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className="form-error-message">
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message here..."
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              
              <button type="submit" className="primary-button" disabled={formStatus.submitted && !formStatus.error}>
                {formStatus.submitted && !formStatus.error ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;