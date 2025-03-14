import React, { useState, useEffect } from 'react';
import './Banner.css';
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import profilePhoto from './images/personal_headshot.jpeg';
import backgroundImage from "./images/naresh_background.JPG";

function Banner() {
    const [isVisible, setIsVisible] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        // Add a small delay before showing the content for a smooth entrance
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Start typing effect after content is visible
            setTimeout(() => setStartTyping(true), 400);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header 
            className='banner' 
            id="banner" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={`banner__contents ${isVisible ? 'visible' : ''}`}>
                <div className="banner__text-content">
                    <h1 className="banner__title">
                        <div className="banner__name">
                            {startTyping ? (
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .changeDelay(70)
                                            .typeString('Naresh Kumar Kaushal')
                                            .start();
                                    }}
                                    options={{
                                        cursor: '',
                                        delay: 70
                                    }}
                                />
                            ) : <span style={{ opacity: 0 }}>Naresh Kumar Kaushal</span>}
                        </div>
                        <span className="banner__pronouns">(he/him)</span>
                    </h1>
                    
                    <div className='banner__buttons'>
                        <a 
                            href="mailto:kaushalnaresh2689@gmail.com" 
                            className='banner__button'
                            aria-label="Email"
                        >
                            <MdEmail />
                        </a>
                        <a 
                            href="https://github.com/KaushalNaresh" 
                            className='banner__button'
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <AiFillGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/nareshkumarkaushal" 
                            className='banner__button'
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>

                <div className='banner__profilePhoto'>
                    <div className="banner__photo-container">
                        <img src={profilePhoto} alt="Naresh Kumar Kaushal" />
                    </div>
                </div>
            </div>

            <div className='banner--fadeBottom' />
        </header>
    );
}

export default Banner;
