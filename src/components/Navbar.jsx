import React from 'react';
import './styles.css';
import Resume from '../assets/rout_resume.pdf'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-link">Home</a>
        </div>
        <div className="navbar-right">
          <a href="#portfolio" className="navbar-link">Portfolio</a>
          <a href={Resume} className="navbar-link" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
