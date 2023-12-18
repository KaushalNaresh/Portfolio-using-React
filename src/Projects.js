import React from 'react'
import ActivityCard from './ActivityCard'
import './Projects.css'
import * as Constants from './Constants';
import Omdena from './images/Omdena.gif';
import Netflix from './images/Netflix.gif';
import Btech from './images/Btech.gif';
import Genre from './images/Genre.gif';
import Covid from './images/covid.gif';
import { useState } from 'react';
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

function Projects() {

  const cardPerRow = 3;
  const [numOfCardVis, setNumOfCardVis] = useState(cardPerRow);
  
  const logos = {'Omdena': Omdena,
                 'Btech': Btech,
                 'Netflix': Netflix,
                 'Genre': Genre,
                 'Covid': Covid};
  return (
    <div className='projects' id="projects">
        <h1>Projects</h1>
        <div className='projects__row'>
            {
                Constants.activities?.slice(0, numOfCardVis)?.map((activity, idx) => (
                    <ActivityCard   key={idx}
                                    name={activity.name} 
                                    timeline={activity.timeline}
                                    skills={activity.skills}
                                    description={activity.description}
                                    logo={logos[activity.logo]}
                                    link={activity.link}/>
                ))
            }
        </div>
        {
            Constants.activities.length > 3 && Constants.activities.length > numOfCardVis 
            ?    <>
                    <div className='projects__showMore__button' onClick={() => setNumOfCardVis(numOfCardVis+cardPerRow)}>
                                                        <IoIosArrowDropdown className='projects__showMore' />
                    </div> 
                    <div className='projects--fadeButton'/>
                </>
                : Constants.activities.length > 3 && Constants.activities.length <= numOfCardVis 
                ?   <div className='projects__showMore__button' onClick={() => setNumOfCardVis(cardPerRow)}>
                        <IoIosArrowDropup className='projects__showMore' />
                    </div> 
                : <></>
        }
    </div>
  )
}

export default Projects