import React from 'react'
import Typewriter from "typewriter-effect";
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle,AiFillGithub } from "react-icons/ai";
import heroImage from "../Assets/Capture2.PNG";
import "../Component/HeroStyles.css";

export default function Hero() {
    const links = [
        {
          to: '//www.linkedin.com/in/yatharth-thakur',
          icon: <AiFillLinkedin />
        },{
          to: '//https://www.facebook.com/',
          icon: <AiFillFacebook />
        },{
          to: '//twitter.com/yatharththakur8',
          icon: <AiFillTwitterCircle />
        },
        {
          to: '//github.com/YatharthThakur',
          icon: <AiFillGithub/>
        }
      ];
      
  return (
    <div>
      <div className='hero-section' id='hero'>
        <div className='container'>
            <div className='container-left'>
                <div className='container-heading'>
                    <div className="hello">
                        <Typewriter
                        options={{
                          loop:true,
                        }}
                        onInit={(typewriter)=> { 
                        typewriter
                        .typeString("Hello World")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I am Yatharth Thakur")
                        .pauseFor(2000)
                        .start();
                        }}
                        />
                    </div>
                    <br/>
                    <p>I'm a Developer, Innovator and an Engineer!</p>
                    <p>Working as an Application Developer in Unisys</p>
                    {links.map((link)=>
                        {
                            console.log(link.to)
                            return(
                                <a href={link.to} target = "_blank" className="nav-link" rel="noreferrer">
                                <span className="icon">{link.icon}</span>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
            <div className='container-right'>
              <img src={heroImage} alt='hero'></img>
            </div>   
        </div>
      </div>
    </div>
  )
}
