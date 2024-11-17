import React from 'react';
import './home.css';
import pic from '../../images/image_about_me.webp';

const Home = () => {
  const handleConnectClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">I'm <span>Sonpal Parmar</span></h1>
          <h2 className="about-subtitle">Python Developer & GenAI Engineer</h2>
          <p className="about-description">
            Specializing in developing innovative solutions using Python and Generative AI technologies.
            With a passion for creating intelligent systems and solving complex problems.
          </p>
          <button className="connect-btn" onClick={handleConnectClick}>
            Let's Connect
          </button>
        </div>
        
        <div className="about-image">
          <img 
            src={pic}
            alt="Sonpal Parmar" 
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
