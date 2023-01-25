import React from 'react'
import Navbar from "./Navbar.js";
import Hero from "./Hero";
import About from "./About";
import MyWork from './MyWork.js';
import Numberof from './Numberof.js';
import Contact from './Contact.js';
import Footer from "./Footer.js";
import "./LandingPage.css";

export default function LandingPage() {
  
  return (
    <div>
      <div className='navbar-com'>
        <Navbar/>
      </div>
      <Hero/>
      <About/>
      <MyWork/>
      <Numberof/>
      <Contact/>
      <Footer/>
    </div>
  )
}
