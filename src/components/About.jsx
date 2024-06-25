// src/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-title">
          <h1>Emma Rout, mixed-media.</h1>
        </div>
        <div className="about-subtext">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet lacinia ligula, ac aliquam sapien tempor sed.</p>
        </div>
        <div className="about-subtext">
          <p>Nullam euismod tortor et purus volutpat, at efficitur odio viverra. Vivamus bibendum diam vitae eros fermentum, sed tincidunt nisl accumsan.</p>
        </div>
      </div>
      <div className="about-right">
        <img src="https://via.placeholder.com/400" alt="About Image" />
      </div>
      
      {/* New row */}
      <div className="about-extra-row">
        <div className="about-extra-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-extra-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
