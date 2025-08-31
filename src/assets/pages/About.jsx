import React from 'react'
import '../pages/About.css'
import rohit from '../Rohitpatil.png';


function About() {
  return (
    <div className='main-about-container'>
      <div className="about-right">
        <h2>Rohit Patil</h2>
        <p> I’m a MERN Stack Developer passionate about building modern, scalable, and user-friendly web applications. I specialize in React.js, Node.js, Express.js, and MongoDB, and love crafting interactive UIs with Tailwind CSS and Framer Motion.

          🚀 From backend APIs to frontend design, I enjoy working across the full stack to deliver complete solutions. Currently, I’m sharpening my skills in authentication, REST APIs, and database integration, while exploring ways to make web apps faster and more engaging.

           My goal is to create digital experiences that are not only functional but also visually appealing and performance-driven.</p>
           
      </div>
      <div className="about-left">
        <div className="image-container">
          <img src={rohit} alt="" />
        </div>

      </div>
    </div>
  )
}

export default About