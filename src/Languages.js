import React from 'react'
import './Languages.css'
import LangCard from './LangCard';
import * as Constants from './Constants';
import FRE01 from './images/fre01.jpeg';
import FRE021 from './images/fre021.jpg';
import ENG from './images/eng.jpeg';
import HIN from './images/hindi.jpeg';
import PUN from './images/punjabi.png';
// import ProjectModal from './ProjectModal';
import { useState } from 'react';
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

function Languages() {
    const cardPerRow = 5;
    const [numOfCardVis, setNumOfCardVis] = useState(cardPerRow);
  
    const logos = {
        'FRE01': FRE01,
        'FRE021': FRE021,
        'ENG': ENG,
        'HIN': HIN,
        'PUN': PUN
    };
    return (
        <div className='lang' id="lang">
            <h1>Languages</h1>
            <div className='lang__row'>
                {
                    Constants.languages?.slice(0, numOfCardVis)?.map((activity, idx) => (
                        <LangCard   
                            key={idx}
                            name={activity.name} 
                            logo={logos[activity.logo]}
                        />
                    ))
                }
            </div>
            {
                Constants.languages.length > cardPerRow && Constants.languages.length > numOfCardVis 
                ?    <>
                        <div className='lang__showMore__button' onClick={() => setNumOfCardVis(numOfCardVis+cardPerRow)}>
                                                            <IoIosArrowDropdown className='lang__showMore' />
                        </div> 
                        <div className='lang--fadeButton'/>
                    </>
                    : Constants.languages.length > cardPerRow && Constants.languages.length <= numOfCardVis 
                    ?   <div className='lang__showMore__button' onClick={() => setNumOfCardVis(cardPerRow)}>
                            <IoIosArrowDropup className='lang__showMore' />
                        </div> 
                    : <></>
            }
        </div>
    )
}

export default Languages