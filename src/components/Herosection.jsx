import React, { useEffect, useState } from "react";
import "../components/herosection.css";

// import form the react router dom
import { Link } from "react-router-dom";
// import icon form the react icon
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Herosection() {
  const words = ["Javascript", "Nodejs", "React", "Frontend", "backend"];
  const [correntWord, setCurrentWord] = useState(words[0]);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prevalue) => (prevalue + 1) % words.length);
      setCurrentWord(words[index]);
      // console.log(correntWord)
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [words]);
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
              and Development, and more. I am passionate about learning new
              technologies and building solutions that make a difference. Thank
              you for visiting my portfolio! I hope you like my work. Happy
              coding!
            </span>
          </div>
          <div className="social-median-contianer">
            <Link to="https://github.com/rohitrpatil45">
              <FaGithub className="icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/rohit-patil-56a634247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin className="icon" />
            </Link>
            <Link to="https://x.com/RohitPatil82428?s=09">
              <BsTwitterX className="icon" />
            </Link>
          </div>
          <div className="btn -container">

          </div>
        </div>

        <div className="mainright">
          <h2>roih</h2>
        </div>
      </div>
    </>
  );
}

export default Herosection;
