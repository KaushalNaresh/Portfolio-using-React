import React, {useState, useEffect} from 'react'
import './WorkExperience.css'
import * as Constants from './Constants'
import WorkExRow from './WorkExRow'
import wooqer_logo from "./images/wooqer_logo_transparent.png";
import planful_logo from "./images/planful_logo_transparent.png";
import cmb_logo from "./images/cmb.jpeg";
import Icd from './images/ICD.png';
import wayfair_logo from "./images/wayfair_logo.jpg"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function WorkExperience() {
  const workExCount = 2;
  const [numOfVisWorkEx, setnumOfVisWorkEx] = useState(workExCount);
  const [isExpanding, setIsExpanding] = useState(false);

  const logos = {
    "wooqer": wooqer_logo,
    "planful": planful_logo,
    "cmb": cmb_logo,
    "icd": Icd,
    "wayfair": wayfair_logo
  }

  const handleShowMore = () => {
    setIsExpanding(true);
    setnumOfVisWorkEx(prev => prev + workExCount);
  };

  const handleShowLess = () => {
    setIsExpanding(true);
    setnumOfVisWorkEx(workExCount);
  };

  useEffect(() => {
    if (isExpanding) {
      const timer = setTimeout(() => {
        setIsExpanding(false);
      }, 300); // Match this with CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [isExpanding]);

  return (
    <div className='work__experience' id='work__experience'>
      <h1>Work Experience</h1>
      <div className={`work__experience__content ${isExpanding ? 'animating' : ''}`}>
        {Constants.work_experiences.slice(0, numOfVisWorkEx).map((workExp, i) => (
          <WorkExRow key={i} 
            idx={i+1}
            name={workExp.name} 
            description={workExp.description}
            address={workExp.address}
            timeline={workExp.timeline}
            role={workExp.role}
            skills={workExp.skills}
            logo={logos[workExp.logo]}
            webSite={workExp.website}/>
        ))}
      </div>
      {Constants.work_experiences.length > workExCount && (
        <div className="work__experience__controls">
          {numOfVisWorkEx < Constants.work_experiences.length ? (
            <button 
              className='work__experience__showMore__button'
              onClick={handleShowMore}
              aria-label="Show more work experience"
            >
              <IoIosArrowDown className='work__experience__showMore' />
              <span>Show More</span>
            </button>
          ) : (
            <button 
              className='work__experience__showMore__button'
              onClick={handleShowLess}
              aria-label="Show less work experience"
            >
              <IoIosArrowUp className='work__experience__showMore' />
              <span>Show Less</span>
            </button>
          )}
        </div>
      )}
      {numOfVisWorkEx < Constants.work_experiences.length && (
        <div className='work__experience--fadeButton' />
      )}
    </div>
  )
}

export default WorkExperience