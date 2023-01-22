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
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <img 
                    onClick={() => navigate('/')}
                    className='nav__logo'
                    src={logo}
                    alt=""
                />

                <a className = "nav__download" 
                   href="NareshKumarKaushal_Resume.pdf" 
                   download="NareshKumarKaushal_Resume.pdf">
                    <AiOutlineDownload id = "nav__download" 
                                       data-tooltip-content="Download Resume"/>
                </a>
                <Tooltip anchorId="nav__download" arrow/>
                <img 
                    onClick={() => navigate("/profile")}
                    className='nav__avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav