import React, { useState } from 'react';
import './header.css';
import logo from "../../images/icon_p.png";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = document.querySelector('.header-wrapper').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <div className="container">
        <header className="header">
          <div className="logo-container">
            <img 
              src={logo}
              alt="Logo" 
              className="logo animate__animated animate__bounceIn"
            />
          </div>
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
            <nav className="nav-links">
              <a 
                href="#about" 
                className="nav-item"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="nav-item"
                onClick={(e) => handleNavClick(e, 'portfolio')}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="nav-item"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </nav>
            
            <div className="actions">
              <a href="https://drive.google.com/file/d/16dOqTMOcwZzgtyuYCQr79iDHl13H5-f6/view?usp=sharing" className="download-btn">
                Download CV
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;