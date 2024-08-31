import React, {useState} from 'react'
import './WorkExperience.css'
import * as Constants from './Constants'
import WorkExRow from './WorkExRow'
import wooqer_logo from "./images/wooqer_logo_transparent.png";
import planful_logo from "./images/planful_logo_transparent.png";
import cmb_logo from "./images/cmb.jpeg";
import Icd from './images/ICD.png';
import wayfair_logo from "./images/wayfair_logo.jpg"
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

function WorkExperience() {

  const workExCount = 2;
  const [numOfVisWorkEx, setnumOfVisWorkEx] = useState(workExCount);

  const logos = {
    "wooqer": wooqer_logo,
    "planful": planful_logo,
    "cmb": cmb_logo,
    "icd": Icd,
    "wayfair": wayfair_logo
  }

  return (
    <div className='work__experience' id='work__experience'>
        <h1>Work Experience</h1>

        {
            Constants.work_experiences.slice(0, numOfVisWorkEx).map((workExp, i) => (
                <WorkExRow key={i} 
                    idx={i+1}
                    name={workExp.name} 
                    description={workExp.description}
                    address = {workExp.address}
                    timeline = {workExp.timeline}
                    role = {workExp.role}
                    skills = {workExp.skills}
                    logo={logos[workExp.logo]}
                    webSite={workExp.website}/>
            ))
        }
wa
        {
            Constants.work_experiences.length > workExCount && Constants.work_experiences.length > numOfVisWorkEx 
            ?    <>
                    <div className='work__experience__showMore__button' onClick={() => setnumOfVisWorkEx(numOfVisWorkEx+workExCount)}>
                                                    <IoIosArrowDropdown className = "work__experience__showMore"/>
                    </div> 
                    <div className='WorkEx--fadeButton'/>
                </>
                : Constants.work_experiences.length > 2 && Constants.work_experiences.length <= numOfVisWorkEx 
                ?   <div className='work__experience__showMore__button' onClick={() => setnumOfVisWorkEx(workExCount)}>
                        <IoIosArrowDropup className = "work__experience__showMore" />
                    </div> 
                : <></>
        }
    </div>
  )
}

export default WorkExperience