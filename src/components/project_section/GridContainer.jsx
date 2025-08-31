import React from 'react';
import ProjectCard from './ProjectCard';
import projectdp from '../../assets/homepage.png';
import "../project_section/GridContainer.css";


function GridContainer() {
  return (
    <div className='grid-container'>
      <ProjectCard
        image={projectdp}
        title="Real Estate Agent "
        description="A free AI-powered image editor with tools for background removal, recoloring, aspect ratio resizing, and image generation."
        demoLink="https://kokan-ratnadevelopers.vercel.app/"
        githubLink="https://github.com/rohitrpatil45/kokanRatnadevelopers"
      />
     
      
    </div>
  );
}

export default GridContainer;
