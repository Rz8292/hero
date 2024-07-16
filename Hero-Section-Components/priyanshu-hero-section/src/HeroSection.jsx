// src/HeroSection.jsx
import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close dropdown on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-container">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="logo-placeholder">Logo</div>
        <div
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          ☰ {/* Hamburger Icon */}
        </div>
        <ul
          className={`nav-menu ${isMenuOpen ? "open" : ""}`}
          role="menu"
          aria-label="Main Navigation"
        >
          <li>
            <a
              href="#home"
              aria-label="Go to Home"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#browse"
              aria-label="Browse All Bootcamps"
              className={activeLink === "browse" ? "active" : ""}
              onClick={() => handleLinkClick("browse")}
            >
              Browse All Bootcamps
            </a>
          </li>
          <li>
            <a
              href="#apply"
              aria-label="Apply For A Bootcamp"
              className={activeLink === "apply" ? "active" : ""}
              onClick={() => handleLinkClick("apply")}
            >
              Apply For A Bootcamp
            </a>
          </li>
          <li>
            <a
              href="#community"
              aria-label="Visit GT Community"
              className={activeLink === "community" ? "active" : ""}
              onClick={() => handleLinkClick("community")}
            >
              GT Community Component
            </a>
          </li>
          <li>
            <a
              href="#workshops"
              aria-label="Check Workshops And Hackathons"
              className={activeLink === "workshops" ? "active" : ""}
              onClick={() => handleLinkClick("workshops")}
            >
              Workshops And Hackathons
            </a>
          </li>
          <li>
            <a
              href="#resume"
              aria-label="Use Grapple Tech's Resume Maker"
              className={activeLink === "resume" ? "active" : ""}
              onClick={() => handleLinkClick("resume")}
            >
              Grapple Tech's Resume Maker
            </a>
          </li>
          <li>
            <a
              href="#contact"
              aria-label="Contact Us"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#about"
              aria-label="Learn About Us"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1 className="headline">Transform Your Vision into Reality</h1>
        <p className="subheadline">
          Professional web development services for your business.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
