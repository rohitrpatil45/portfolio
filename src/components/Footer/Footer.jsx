import React from 'react'
import '../Footer/Footer.css'
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

import logo  from '../../assets/navbar.png';
import x from '../../components/Footer/social-icons/x.svg'
import linkedin from '../../components/Footer/social-icons/linkedin.svg'
import insta from '../../components/Footer/social-icons/insta.svg'
import git from '../../components/Footer/social-icons/github.svg'

function Footer() {
  return (
   <>
<div className="footer-main-div">
        <div className='upperdiv'>
        <div className="image-div">
            <img src={logo} alt="logo" />
        </div>
        <div className="social-media">
            <img src={x} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={git} alt="github" />
            <img src={insta} alt="instagram" />
        </div>
    </div>
    <div className="lowerdiv">
        <h2>Contact</h2>
       <span className='flex'>💌 <p>rohitpatil1229@gmail.com</p></span>
      <span className='flex'> 📞 <p>+91 9373329153</p></span>
    </div>
</div>
   </>
  )
}

export default Footer