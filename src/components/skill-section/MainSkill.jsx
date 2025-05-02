import React from "react";
import SkillBox from "./SkillBox";
import "./SkillBox.css";
import reactimage from "./svg/react.svg";
import nodeimage from "./svg/nodejs-icon.svg";
import js from "./svg/js.svg";
import mongodb from "./svg/MongoDB.svg";
import redux from "./svg/redux2.png";
import tailwind from "./svg/tailwind.svg";
import github from "./svg/gihub.svg";
import express from "./svg/express.svg";

function MainSkill() {
  return (
    <>
      <div className="skill-mainContainer">
        <div className="title">
          <h2>Skills & Services</h2>
          {/* <p>This is My Skill </p> */}
        </div>
        <div className="Skill-box-container">
          <SkillBox
            image={mongodb}
            name="JavaScript"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
          <SkillBox
            image={express}
            name="Express"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
          <SkillBox
            image={reactimage}
            name="react"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
          <SkillBox
            image={nodeimage}
            name="NodeJs"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
          <SkillBox
            image={js}
            name="JavaScript"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
          <SkillBox
            className="name"
            image={redux}
            name="Redux"
            forredux="redux-image"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />{" "}
          <SkillBox
            image={tailwind}
            name="tailwind"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
          <SkillBox
            image={github}
            name="Github"
            details="lorem1 wefjh wiufeg iwufg iuwf iuwgfe iuwgef iuwghef"
          />
        </div>
      </div>
    </>
  );
}

export default MainSkill;
