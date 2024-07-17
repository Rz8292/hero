import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Import the CSS file
import { useSpring, animated } from 'react-spring';

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

  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 1000 },
  });

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
        <div className="logo-placeholder">GrapplTech</div>
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
          {['Home', 'Browse', 'Apply', 'Community', 'Workshops', 'Resume', 'Contact'].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                aria-label={`Go to ${item}`}
                className={activeLink === item.toLowerCase() ? "active" : ""}
                onClick={() => handleLinkClick(item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <animated.div style={fadeIn} className="hero-content" aria-labelledby="hero-description">
                <h1 className="headline" id="hero-description">Unlock Your Potential with GrappleTech</h1>
                <p className="subheadline">Explore top-tier bootcamps and resources designed to elevate your skills and career.</p>
                <button className="cta-button">Get Started</button>
            </animated.div>
    </div>
  );
};

export default HeroSection;
