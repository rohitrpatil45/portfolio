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
        description="This fancy name generator spins out unique, stylish, and eye-catching names for your next project, game character, business, or social profile."
        demoLink="https://ffstylishname.vercel.app/"
        githubLink="https://github.com/rohitrpatil45/ffstylishname"
      />
     
      
    </div>
  );
}

export default GridContainer;
