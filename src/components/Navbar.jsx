import React from "react";
import "../components/navbar.css";

import Contact from "../assets/pages/Contact";
import About from "../assets/pages/About";

// import form the react router dom
import { Link } from "react-router-dom";

// import the image
import myImage from "../assets/navbar.png";

function Navbar() {
  return (
    <>
      <div className="contianer">
        <img src={myImage} alt="" />
        <div className="menu-contianer">
          <Link to="/about" className="navlink"> About</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
