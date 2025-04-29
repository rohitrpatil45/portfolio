import React from "react";
import SkillBox from "./SkillBox";
import "./SkillBox.css";
import reactimage from "./react.svg";
import nodeimage from "./nodejs-icon.svg";

function MainSkill() {
  return (
    <>
      <div className="skill-mainContainer">
        <div className="title">
          <h2>Skills & Services</h2>
          <p>This is My Skill </p>
        </div>
        <div className="Skill-box-container">
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
        </div>
      </div>
    </>
  );
}

export default MainSkill;
