// App.js
import React from 'react';
import './app.css'
import Header from './components/header/header';
import Home from './components/home/home';
import Portfolio from './components/home/portfolio';
import Contact from './components/home/contact';
import Footer from './components/footer/footer';
import Skills from './components/home/skills';

// Add smooth scrolling behavior to the document
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
