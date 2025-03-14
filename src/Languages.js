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

function Languages() {
    const logos = {
        'FRE01': FRE01,
        'FRE021': FRE021,
        'ENG': ENG,
        'HIN': HIN,
        'PUN': PUN
    };

    return (
        <div className='languages' id="lang">
            <h1 className='languages__title'>Languages</h1>
            <div className='languages__row'>
                {Constants.languages?.map((activity, idx) => (
                    <LangCard   
                        key={idx}
                        name={activity.name} 
                        logo={logos[activity.logo]}
                        proficiency={activity.proficiency}
                    />
                ))}
            </div>
        </div>
    )
}

export default Languages