import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, title, description, demoLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
