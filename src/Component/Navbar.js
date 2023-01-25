import React from 'react'
import logo from "../Assets/logo.PNG";
import "../Component/NavbarStyles.css"
import {Link} from 'react-scroll';
// import {NavLink} from 'react-router-dom';
// import {GiHamburgerMenu} from 'react-icons/gi';
export default function Navbar() {
  return (
    <div>
      <nav id='nav'>
          <img src={logo} alt='logo'/>
          <ul>
          
            <li>
              <Link to="hero" offset={0} spy={true} smooth={true} duration={500} >HOME</Link>
            </li>
            <li>
              <Link to="about" offset={1} spy={true} smooth={true} duration={500} >ABOUT</Link>
            </li>
            <li>
              <Link to="work" offset={-110} spy={true} smooth={true} duration={500} >WORK</Link>
            </li>
            <li>
              <Link to="contact" offset={-200} spy={true} smooth={true} duration={500}>CONTACT</Link>
            </li>
          </ul>
      </nav>
    </div>
  )
}
