
import React, { useState } from 'react';
import './contact.css';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare, User, AtSign, PenTool, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formState);
    setSending(false);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Keeping the original contact-info section unchanged */}
        <div className="contact-info">
          <div className="contact-header">
            <h2 className="contact-title">
              Let's Connect! <span className="wave-emoji">👋</span>
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <p className="contact-description">
            I'm excited to collaborate on your next project! Let's turn your ideas into reality. 
            <span className="rocket-emoji">🚀</span>
          </p>

          <div className="contact-cards">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-item-content">
                <span className="contact-label">Email</span>
                <a href="mailto:sonpalparmar20@gmail.com" className="contact-value">
                  sonpalparmar20@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-item-content">
                <span className="contact-label">Location</span>
                <span className="contact-value">Jaipur, Rajasthan 📍</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-item-content">
                <span className="contact-label">Phone</span>
                <a href="tel:+1234567890" className="contact-value">
                  +91 (900) 105-2305
                </a>
              </div>
            </div>
          </div>

          <div className="social-container">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              <a href="https://github.com/sonpalparmar" className="social-link github" aria-label="Github">
                <Github size={20} />
                <span className="social-label">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/sonpalparmar" className="social-link linkedin" aria-label="LinkedIn">
                <Linkedin size={20} />
                <span className="social-label">LinkedIn</span>
              </a>
              <a href="https://twitter.com/sonpalparmar" className="social-link twitter" aria-label="Twitter">
                <Twitter size={20} />
                <span className="social-label">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="form-container">
          <div className="form-wrapper">
            <div className="form-header">
              <MessageSquare className="form-icon" />
              <h3 className="form-title">Send Message ✨</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-body">
                <div className="input-group">
                  <label className="input-label">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-input"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <span className="input-focus-effect"></span>
                </div>

                <div className="input-group">
                  <label className="input-label">
                    <AtSign size={18} className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-input"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <span className="input-focus-effect"></span>
                </div>

                <div className="input-group">
                  <label className="input-label">
                    <PenTool size={18} className="input-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="form-textarea"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </label>
                  <span className="input-focus-effect"></span>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${sending ? 'sending' : ''}`}
                  disabled={sending}
                >
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  <Send className="btn-icon" size={18} />
                  <Sparkles className="sparkle-icon" size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
