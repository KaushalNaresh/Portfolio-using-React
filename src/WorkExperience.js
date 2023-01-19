import React, {useState} from 'react'
import './WorkExperience.css'
import * as Constants from './Constants'
import WorkExRow from './WorkExRow'
import wooqer_logo from "./images/wooqer_logo_transparent.png";
import planful_logo from "./images/planful_logo_transparent.png";
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io";

function WorkExperience() {

  const workExCount = 2;
  const [numOfVisWorkEx, setnumOfVisWorkEx] = useState(workExCount);

  const logos = {
    "wooqer": wooqer_logo,
    "planful": planful_logo
  }

  return (
    <div className='work__experience'>
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

        {
            Constants.work_experiences.length > workExCount && Constants.work_experiences.length > numOfVisWorkEx 
            ?    <div className='work__experience__showMore__button' onClick={() => setnumOfVisWorkEx(numOfVisWorkEx+workExCount)}>
                                                    <IoIosArrowDropdown style={{
                                                                        position:'absolute',
                                                                        left:0,
                                                                        right:0,
                                                                        margin: '0 auto',
                                                                        bottom: '0.6em'
                                                    }}/>
                </div> 
                : Constants.work_experiences.length > 3 && Constants.work_experiences.length <= numOfVisWorkEx 
                ?   <div className='work__experience__showMore__button' onClick={() => setnumOfVisWorkEx(workExCount)}>
                        <IoIosArrowDropup style={{
                                            position:'absolute',
                                            left:0,
                                            right:0,
                                            margin: '0 auto',
                                            bottom: '0.6em'
                        }}/>
                    </div> 
                : <></>
        }
    </div>
  )
}

export default WorkExperience