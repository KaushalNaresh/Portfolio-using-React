import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import "./Nav.css";
import logo from "./images/resume_logo.png";
import {AiOutlineDownload} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Tooltip } from 'react-tooltip';

function Nav() {

    const [show, handleShow] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${sidebarOpen ? "nav__sidebar-open" : ""} ${show && "nav__black"}`} id='nav'>
                <button className={`nav__hamburger-icon ${sidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>
                    <GiHamburgerMenu/>
                </button>
                <div className={`nav__sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className={`nav__cancel ${sidebarOpen ? "open" : "close"}`} onClick={toggleSidebar}><RxCross2/></div>
                    <div className = {`nav__hyperlinks ${sidebarOpen ? "open" : "close"}`}>
                        <a href = "#nav">Home</a>
                        <a href = "#education">Education</a>
                        <a href = "#work__experience">Work Experience</a>
                        <a href = "#projects">Projects</a>
                        {/* <a href = "">Message Me!</a> */}
                    </div>
                    <div className = {`nav__buttons  ${sidebarOpen ? "open" : "close"}`}>
                        <a className = {`nav__download  ${sidebarOpen ? "open" : "close"}`} 
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
        </div>
    )
}

export default Nav