import React from 'react';
import './Project.css';

function Project({ name = 'Project Name', description = 'Description', subDescription = 'Sub-description', image }) {
  return (
    <div className="project-container">
      <div className="project-info-grid">
        <div className="project-name">{name.toUpperCase()}</div>
        <div className="project-description">{description}</div>
        <div className="project-sub-description">{subDescription}</div>
        <div className="project-more">More</div>
      </div>
      <div className="project-image">
        <img src={image || 'https://via.placeholder.com/300'} alt="Project" />
      </div>
      <div className="project-divider"></div>
    </div>
  );
}

export default Project;
