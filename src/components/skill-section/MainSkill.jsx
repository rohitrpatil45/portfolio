import React from "react";
import SkillBox from "./SkillBox";
import "../skill-section/Skillbox.css";
import reactimage from "./svg/react.svg";
import nodeimage from "./svg/nodejs-icon.svg";
import js from "./svg/js.svg";
import mongodb from "./svg/MongoDB.svg";
import redux from "./svg/redux-original.svg";
import tailwind from "./svg/tailwind.svg";
import github from "./svg/gihub.svg";
import express from "./svg/express.svg";

function MainSkill() {
  return (
    <>
      <div className="skill-mainContainer">
        <div className="title">
          <h2>My Toolkit</h2>
          {/* <p>This is My Skill </p> */}
        </div>
        <div className="Skill-box-container">
          <SkillBox
            image={mongodb}
            name="MongoDB"
            details="Flexible NoSQL database to store data in JSON-like documents"
          />
          <SkillBox
            image={express}
            name="Express"
            details="Minimal and fast Node.js backend framework for APIs and web apps."
          />
          <SkillBox
            image={reactimage}
            name="React"
            details="React.js for Frontend and User-Interface Development."
          />
          <SkillBox
            image={nodeimage}
            name="NodeJs"
            details="Next.js for Frontend and Backend Both Development."
          />
          <SkillBox
            image={js}
            name="JavaScript"
            details="Builds the logic behind every interactive website feature"
          />
          <SkillBox
            className="name"
            image={redux}
            name="Redux"
            forredux="redux-image"
            details="Redux is a predictable state container for JavaScript apps."
          />{" "}
          <SkillBox
            image={tailwind}
            name="tailwind"
            details="Utility-first CSS framework for building custom designs rapidly"
          />
          <SkillBox
            image={github}
            name="Github"
            details="Manages code versions, collaborations, and project workflows"
          />
        </div>
       <div className="btn-container">
       <button className="see-more-btn">See More</button>
       </div>
      </div>
    </>
  );
}

export default MainSkill;
