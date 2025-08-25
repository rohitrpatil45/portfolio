import React, { useEffect, useState } from "react";
import "../components/herosection.css";
import Btn from "./Buttons/Btn";
import PorjectGrid from "./project_section/PorjectGrid";

// import form the react router dom
import { Link } from "react-router-dom";
// import icon form the react icon
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

// image import
import rohitimage from "../assets/Rohitpatil.png";
import MainSkill from "./skill-section/MainSkill";
import Gitgraph from "./GitHubContribution/Gitgraph";

function Herosection() {
  const words = ["TailwindCSS", "JavaScript", "React", "Node.js", "ExpressJS", "MongoDB", "Frontend", "backend"];
  const [correntWord, setCurrentWord] = useState(words[0]);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setCurrentWord(words[nextIndex]);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="heromainsection">
        <div className="mainleft">
          <span className="hey-here-text">hey here</span>
          <div className="main-heading-container">
            <span className="iam-span">
              I ‘m <span className="rohit-span">Rohit Patil</span>
            </span>
          </div>
          <div className="web-app-developer">
            <span className="iamdev-container">
              I am a Web App Developer in
              <span className="changing-text-container"> {correntWord}</span>
            </span>
          </div>
          <div className="paragraph-container">
            <span className="details-span">
              Welcome to my portfolio! I hope you enjoy your visit. I specialize
              in Back-End development with Node.js and Front-End development
              with React.js. I have worked on various projects, including a
              Real Link-Shortener, E-Commerce APIs, React-based Website Design
              and Development, and more.I am passionate about learning new
              technologies and building solutions that make a difference. Thank
              you for visiting my portfolio! I hope you like my work. Happy
              coding!
            </span>
          </div>
          <div className="social-median-contianer">
            <a
              href="https://github.com/rohitrpatil45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-patil-56a634247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>

            <a
              href="https://x.com/RohitPatil82428?s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="icon" />
            </a>
          </div>
          <div className="btn-container">
            <Btn btntext="Resume" icon={<IoMdDownload />} />
            <Btn btntext="Contact Me" />
          </div>
        </div>
        <div className="mainright">
          <div className="image-cotnainer">
            <img src={rohitimage} alt="" />
          </div>
        </div>
      </div>
      <MainSkill />
      <Gitgraph />
      <PorjectGrid />
      
    </>
  );
}

export default Herosection;
