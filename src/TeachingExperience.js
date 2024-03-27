import React from 'react'
import TACard from './TACard'
import './TeachingExperience.css'
import * as Constants from './Constants';
import CHE2B from './images/CHE2B.jpg';
import PSC001 from './images/PSC001.gif'
import PSC12Y from './images/PSC12Y.gif'
// import ProjectModal from './ProjectModal';
import { useState } from 'react';
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

function TeachingExperience() {
    const cardPerRow = 3;
    const [numOfCardVis, setNumOfCardVis] = useState(cardPerRow);

    // const [isModalOpen, setModalOpen] = useState(false);
    // const [selectedProj, setSelectedProj] = useState(null);

    // const openModal = (projItem) => {
    //     setSelectedProj(projItem);
    //     setModalOpen(true);        
    // };
        
    // const closeModal = () => setModalOpen(false);
  
    const logos = {
        'CHE2B': CHE2B,
        'PSC001': PSC001,
        'PSC12Y': PSC12Y
    };
    return (
        <div className='ta' id="ta">
            <h1>Teaching Experience</h1>
            <div className='ta__row'>
                {
                    Constants.teaching_experiences?.slice(0, numOfCardVis)?.map((activity, idx) => (
                        <TACard   key={idx}
                                        name={activity.course_name} 
                                        timeline={activity.timeline}
                                        description={activity.description}
                                        logo={logos[activity.logo]}
                                        link={activity.link}/>
                    ))
                }
            </div>
            {
                Constants.teaching_experiences.length > 3 && Constants.teaching_experiences.length > numOfCardVis 
                ?    <>
                        <div className='ta__showMore__button' onClick={() => setNumOfCardVis(numOfCardVis+cardPerRow)}>
                                                            <IoIosArrowDropdown className='ta__showMore' />
                        </div> 
                        <div className='ta--fadeButton'/>
                    </>
                    : Constants.teaching_experiences.length > 3 && Constants.teaching_experiences.length <= numOfCardVis 
                    ?   <div className='ta__showMore__button' onClick={() => setNumOfCardVis(cardPerRow)}>
                            <IoIosArrowDropup className='ta__showMore' />
                        </div> 
                    : <></>
            }
        </div>
    )
}

export default TeachingExperience