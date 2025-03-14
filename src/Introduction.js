import React from 'react';
import './Introduction.css';
import { MdOutlineWavingHand } from "react-icons/md";
import * as Constants from './Constants';

function Introduction() {
    return (
        <div className='introduction' id="introduction">
            <div className='introduction__contents'>
                <div className='introduction__header'>
                    <span>Introduction</span>
                    <MdOutlineWavingHand />
                </div>
                <div className='introduction__text'>
                    <p className='introduction__greeting'>
                        {Constants.introduction.greeting}
                    </p>
                    {Constants.introduction.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <p className='introduction__connect'>
                        {Constants.introduction.connect}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction; 