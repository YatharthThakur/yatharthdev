import React from 'react'
import logo from "../Assets/logo.PNG";
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle,AiFillGithub,AiOutlineCopyright } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
    const links = [
        {
          to: "www.linkedin.com/in/yatharth-thakur",
          icon: <AiFillLinkedin />
        },{
          to: "www.linkedin.com/in/yatharth-thakur",
          icon: <AiFillFacebook />
        },{
          to: "www.linkedin.com/in/yatharth-thakur",
          icon: <AiFillTwitterCircle />
        },
        {
          to: "www.linkedin.com/in/yatharth-thakur",
          icon: <AiFillGithub/>
        }
      ];
    return (
    <div >
        <div className='footer-container'>
            <hr></hr>
            <div className='footer-logo'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='footer-info'>
                {links.map((link)=>
                        {
                            return(
                                <NavLink to={link.to} className="nav-link">
                                <span className="icon">{link.icon}</span>
                                </NavLink>
                            );
                        })
                }
                <p><span className='copyright'><AiOutlineCopyright/></span>Copyright YatharthThakur | All rights reserved</p>
            </div>
        </div>
    </div>
    )
}
