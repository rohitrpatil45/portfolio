import React from "react";
import "./box.css";
// import reactimage from "./react.svg";

function SkillBox({ image, name, details }) {
  return (
    <>
      <div className="box">
        <img className="image-tag" src={image} alt="" />
       <div className="name-tag">
       <h2>{name}</h2>
       </div>
        <div>
          <p className="detail-tag">{details}</p>
        </div>
      </div>
    </>
  );
}

export default SkillBox;
