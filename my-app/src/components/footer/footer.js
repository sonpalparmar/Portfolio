import React from 'react';
import './footer.css';  // Changed filename to avoid conflicts
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  Code,
  Brain,
  Database,
  Server
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const skills = [
    { icon: <Code size={20} />, text: 'Python Development' },
    { icon: <Brain size={20} />, text: 'GenAI Engineering' },
    { icon: <Database size={20} />, text: 'Data Science' },
    { icon: <Server size={20} />, text: 'MLOps' }
  ];

  return (
    <footer className="sp-footer">
      <div className="sp-footer-content">
        <div className="sp-footer-section sp-main-section">
          <h3 className="sp-footer-title">
            <span className="sp-highlight">Sonpal Parmar</span> 
            <span className="sp-wave">👋</span>
          </h3>
          <p className="sp-footer-description">
            Passionate Python Developer & GenAI Engineer crafting innovative solutions 
            and building the future with code. Specialized in AI/ML applications and 
            scalable systems.
          </p>
          <div className="sp-skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="sp-skill-item">
                {skill.icon}
                <span>{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sp-footer-section">
          <h3 className="sp-footer-title">Quick Links</h3>
          <nav className="sp-footer-links">
            <a href="#about" className="sp-link-item">
              <span>🎯</span> About Me
            </a>
            <a href="#portfolio" className="sp-link-item">
              <span>💼</span> Portfolio
            </a>
            <a href="#services" className="sp-link-item">
              <span>⚡</span> Services
            </a>
            <a href="#blog" className="sp-link-item">
              <span>📝</span> Blog
            </a>
            <a href="#contact" className="sp-link-item">
              <span>📬</span> Contact
            </a>
          </nav>
        </div>
        
        <div className="sp-footer-section sp-contact-section">
          <h3 className="sp-footer-title">Get in Touch</h3>
          <div className="sp-contact-info">
            <div className="sp-contact-item">
              <Mail size={18} />
              <a href="mailto:sonpalparmar20@gmail.com">sonpalparmar20@gmail.com</a>
            </div>
            <div className="sp-contact-item">
              <Phone size={18} />
              <span>+91 (900) 105-2305</span>
            </div>
            <div className="sp-contact-item">
              <MapPin size={18} />
              <span>Jaipur, India</span>
            </div>
          </div>
          <div className="sp-social-links">
            <a href="https://linkedin.com/in/sonpalparmar" className="sp-social-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/sonpalparmar" className="sp-social-link" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/sonpalparmar" className="sp-social-link" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="sp-footer-bottom">
        <p>
          &copy; {currentYear} Sonpal Parmar. All rights reserved. 
          <span className="sp-heart">❤️</span> 
          Crafted with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;