// src/HeroSection.jsx
import React, { useState } from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero-container">
      <nav className="navbar">
        <h1 className="logo-placeholder">Your Logo</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Hamburger Icon */}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#browse">Browse All Bootcamps</a></li>
          <li><a href="#apply">Apply For A Bootcamp</a></li>
          <li><a href="#community">GT Community Component</a></li>
          <li><a href="#workshops">Workshops And Hackathons</a></li>
          <li><a href="#resume">Grapple Tech's Resume Maker</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1 className="headline">Transform Your Vision into Reality</h1>
        <p className="subheadline">Professional web development services for your business.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
