import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

function Project({ name = 'Project Name', description = 'Description', subDescription = 'Sub-description', image, path }) {
  return (
    <div className="project-container">
      <div className="project-info-grid">
        <div className="project-name">{name.toUpperCase()}</div>
        <div className="project-description">{description}</div>
        <div className="project-sub-description">{subDescription}</div>
        <Link to={`/project/${path}`} className="project-link">
          <div className="project-more">More</div>
        </Link>
      </div>
      <div className="project-image">
        <img src={image || 'https://via.placeholder.com/300'} alt="Project" />
      </div>
      <div className="project-divider"></div>
    </div>
  );
}

export default Project;
