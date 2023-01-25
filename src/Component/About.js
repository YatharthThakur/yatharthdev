import React from 'react'
import "./AboutStyles.css";
import { AiFillHtml5} from "react-icons/ai";
import { DiCss3,DiReact,DiJava,DiBootstrap,DiWordpress} from "react-icons/di";
import { IoLogoJavascript} from "react-icons/io";
import {SiFirebase} from "react-icons/si";
import './Numberof.css';

export default function About() {
  return (
    <div className='about-container' id='about'>
        <div className='about-heading'>
            <p className='my-about'>ABOUT</p>
            <hr></hr>
            <p>Let me tell you a little about myself</p>
        </div>
        <div className='about-content'>
            <div className='about-lang-tool'>
                <div className='lang'>
                    <span className='lab'>Languages known</span>
                    <span className='html'><AiFillHtml5/></span>
                    <span className='css'><DiCss3/></span>
                    <span className='js'><IoLogoJavascript/></span>
                    <span className='react'><DiReact/></span>
                    <span className='java'><DiJava/></span>
                </div>
                <div className='soft-tool'>
                    <span className='tool'>Softwares & Tools</span>
                    <span className='bs'><DiBootstrap/></span>
                    <span className='wp'><DiWordpress/></span>
                    <span className='firebase'><SiFirebase/></span>
                </div>
            </div>
            <div className='about-dec'>
                <p>
                Hi, I am Yatharth.
                <br></br>
                I live to learn. I believe that there is a learning experience in every failure. I strive to learn from my personal losses & seek out for advice to gain a broader understanding of the world.

                Apart from my academics, I have completed various online courses on Web development and Java which helped me getting a couple of internships.

                I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem.

                I’m highly motivated and am extremely passionate about developing something which directly impacts people around you.
                </p>
            </div>
        </div>
    </div>
  )
}
