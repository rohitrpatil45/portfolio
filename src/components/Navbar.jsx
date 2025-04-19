import React, { useState } from "react";
import "../components/navbar.css";
import { HiMenu } from "react-icons/hi";

// import form the react router dom
import { Link } from "react-router-dom";

// import the image
import myImage from "../assets/navbar.png";

function Navbar() {

const [isopen , setisopen] = useState(false)


const toggleMenu = () => {
  setisopen(!isopen);
};

  return (
    <>
      <div className="contianer">
        <Link to="/">
          <img src={myImage} alt="" className="image"/>
        </Link>

        <div className={`menu-contianer ${isopen ? 'active' : ''}`}>
          <Link to="/about" className="nav-btn-wrapper">
            <span className="nav-btn">About</span>
          </Link>
          <Link to="/about" className="nav-btn-wrapper">
            <span className="nav-btn">Resume</span>
          </Link>

          <Link to="/contact" className="nav-btn-wrapper">
            <span className="nav-btn">Contact</span>
          </Link>
        </div>
        <HiMenu size={24} color="white" className="menu-icon" onClick={toggleMenu} />
      </div>
    </>
  );
}

export default Navbar;
