import React from 'react';
import './Banner.css';
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import useTypewriter from 'react-typewriter-hook';
import profilePhoto from './images/personal_headshot.jpg'
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

function Banner() {
    const name = "Naresh Kumar Kaushal";

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://tinyurl.com/mrh4jpe5)`,
                backgroundPosition: "center center",
            }}>

            <div className='banner__contents'>
                <h1 className="banner__title">
                    <div>
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Naresh Kumar Kaushal').start();
                        }}
                        />
                    </div>
                    <span>(he/him)</span>
                </h1>
                <div className='banner__buttons'>
                    <a href="mailto:nkkaushal@ucdavis.edu" className='banner__button'><MdEmail /></a>
                    <a href="https://github.com/KaushalNaresh" className='banner__button'><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/nareshkumarkaushal" className='banner__button'><AiFillLinkedin /></a>
                </div>
                <div className='banner__profilePhoto'>
                    <img src={profilePhoto} alt="Profile" />
                </div>
            </div>

            <div className='banner--fadeButton' />
        </header>
    );
}

export default Banner;
