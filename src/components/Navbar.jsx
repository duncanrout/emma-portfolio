import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-link">Home</a>
        </div>
        <div className="navbar-right">
          <a href="portfolio" className="navbar-link">Portfolio</a>
          <a href="about" className="navbar-link">About + Resume</a>
          <a href="contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
