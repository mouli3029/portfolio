import React from 'react';
import Image from "../images/myphoto.jpg"
import Fade from "react-reveal/Fade"
import "./About.css"
import { Divider } from '@material-ui/core';
function About() { 
    return (
        <div id="about" >
            <Fade left>
            <div className="title">
                ABOUT ME
            </div>
            </Fade>

            <div className="about" >
                <Fade left>
                <div className="about__image_div">
                   <img 
                   className="about__image"
                   src={Image}
                   /> 
                </div>
                </Fade>
                <Fade right>
                <div className="about__matter_div">
                    <div className="about__matter">
                       <div className="matter">
                           Hi there! I am
                            <strong> Venkata Mouli.K</strong>
                            <br/>
                            <br/>
                            A passionate programmer who love tech,
                            born and brought up in India.I am a Frontend
                            Developer with React.js.I am currently pursuing
                            my B.Tech at KL University.
                            <br/>
                            <br/>
                            I always admired to create Data Science projects
                            and deploy them to web applications using cloud 
                            infrastructure.
                       </div>
                    </div>    
                </div>
                </Fade>
            </div>
            <Divider/>
        </div>
    )
}
export default About
