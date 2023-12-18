import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import "./Nav.css";
import logo from "./images/resume_logo.png";
import {AiOutlineDownload} from "react-icons/ai"
import { Tooltip } from 'react-tooltip';

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`} id='nav'>
                {/* <img 
                    onClick={() => navigate('/')}
                    className='nav__logo'
                    src={logo}
                    alt=""
                /> */}
                <div className = "nav__hyperlinks">
                    <a href = "#nav">Home</a>
                    <a href = "#education">Education</a>
                    <a href = "#work__experience">Work Experience</a>
                    <a href = "#projects">Projects</a>
                    <a href = "">Message Me!</a>
                </div>
                <div className = "nav__buttons">
                    <a className = "nav__download" 
                    id="nav__download__id"
                    href="NareshKumarKaushal_Resume.pdf" 
                    download="NareshKumarKaushal_Resume.pdf">
                        <AiOutlineDownload id = "nav__download" 
                                        data-tooltip-content="Download Resume"/>
                        <span>Download Resume</span>
                    </a>
                    <Tooltip anchorId="nav__download" arrow/>
                </div>
        </div>
    )
}

export default Nav