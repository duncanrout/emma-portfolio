import React from 'react';
import './About.css';

function About() {

  const mainSkills = "Team management, relationship building, attention to detail, art handling, Email communication, project management, market analysis, online production"
  const softwareSkills = "Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects, Canva, Figma, ZBrush, ClipStudio, Maya, Unreal Engine"
  const about1 = "Drawing from personal struggles and study of others around me, I use my art as a platform to promote conversations surrounding mental wellness and human experiences."
  const about2 = "I aim to continue to create throughout my life and provide a path for others to find a sense of self-representation and a safe space of their own."

  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-title">
          <h1>Emma Rout, mixed-media.</h1>
        </div>
        <div className="about-subtext">
          <p>{about1}</p>
        </div>
        <div className="about-subtext">
          <p>{about2}</p>
        </div>
      </div>
      <div className="about-right">
        <img src="/assets/emmaid.jfif" alt="About" />
      </div>
      <div className="software-grid">
        <div className="software-title">Main Software:</div>
        <div className="software-description">
          {softwareSkills}
        </div>
        <div className="software-title">Main Skills:</div>
          {mainSkills}
        <div className="software-description">
        </div>
      </div>
    </div>
  );
}

export default About;
