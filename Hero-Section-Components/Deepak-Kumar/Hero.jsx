import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpeg";
import "./hero.css";
import open from "../assets/open.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;
      if (
        !target.closest(".hamburger-menu") &&
        !target.closest(".open-menu-btn")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-navbar">
        <div className="hero-logo">
          <h2 className="quicksand">IQLIPSE</h2>
        </div>

        <img
          src={open}
          alt="open menu"
          className="open-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        />

        <nav className="hero-nav quicksand">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div
          className={`hamburger-menu ${
            isOpen ? "hamburger-menu-open" : "hamburger-menu-closed"
          }`}
        >
          <h1 className="menu-header julius">LOST YOUR WAY?</h1>
          <div className="menu-close">
            <img
              src={close}
              alt="close menu"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8 cursor-pointer m-2"
            />
          </div>
          <div className="menu-links julius">
            <Link to="/home" className="menu-link">
              Home
            </Link>
            <Link to="/search" className="menu-link">
              Search
            </Link>
            <Link
              to="https://www.iqlipse.studio/"
              className="menu-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link>
            <Link to="/profile" className="menu-profile-link">
              <button>Profile</button>
            </Link>
            <Link href="/login" className="menu-logout-link">
              <button>Logout</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-content">
        <div>
          <h1 className="hero-title julius">IQLIPSE'S MARKETPLACE</h1>
          <p className="hero-subtitle quicksand">
            Everything you need, right here!
          </p>
        </div>
        <div className="hero-buttons">
          <button className="hero-button">EXPLORE</button>
          <button className="hero-button">CART</button>
        </div>
        <div className="hero-image-container">
          <img src={hero1} alt="hero1" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
