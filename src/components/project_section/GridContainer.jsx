import React from 'react';
import ProjectCard from './ProjectCard';
import projectdp from '../../assets/homepage.png';
import fancynamedp from '../../assets/fancyname.png';
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

         <ProjectCard
        image={fancynamedp}
        title="FF FancyName Generator"
        description="A lightweight name generator that produces elegant, fancy, and creative names for branding, apps, and personal use."
        demoLink="https://ffstylishname.vercel.app/"
        githubLink="https://github.com/rohitrpatil45/ffstylishname"
      />
     
      
    </div>
  );
}

export default GridContainer;
