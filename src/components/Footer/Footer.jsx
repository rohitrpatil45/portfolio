import React from 'react'
import '../Footer/Footer.css'
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

import logo from '../../assets/navbar.png';
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
                        <a href="https://x.com/RohitPatil82428?s=09" target='_blank'>
                            <img src={x} alt="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/rohit-patil-56a634247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                            <img src={linkedin} alt="linkedin" />
                        </a>

                        <a href=" https://github.com/rohitrpatil45" target='_blank'>
                            <img src={git} alt="github" />

                        </a>
                       
                       <a href="https://www.instagram.com/rohit__patil_096/?utm_source=ig_web_button_share_sheet">
                         <img src={insta} alt="instagram" />
                       </a>
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