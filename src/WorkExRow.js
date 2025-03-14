import React, { useState } from 'react'
import './WorkExRow.css'
import {BsPlayCircle} from "react-icons/bs"
import {IoMdTime} from "react-icons/io"
import {IoLocationSharp} from "react-icons/io5"

function WorkExRow({idx, name, description, address, timeline, role, skills, logo, webSite}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const skillsList = skills.split(',').map(skill => skill.trim());

  const handleClick = (e) => {
    // If clicking on a skill tag, don't navigate
    if (e.target.classList.contains('skill-tag')) {
      return;
    }
    window.open(webSite, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`WorkEx__wrapper ${isExpanded ? 'expanded' : ''}`} 
         onClick={handleClick}>
        <div className='WorkEx__header'>
            <div className='WorkEx__name'>
                <span>{name}</span>
                <span>{role}</span>
            </div>
            <div className='WorkEx__timeAddress'>
                <div><IoMdTime className="icon" /> {timeline}</div>
                <div><IoLocationSharp className="icon" /> {address}</div>
            </div>
        </div>
        <div className='WorkExRow'>
            <div className='WorkExRow__idx'><p>{idx}</p></div>
            <div className="WorkExRow__img">
                <div className='WorkExRow__imgWrapper'>
                    <img src={logo} alt={`${name} logo`}/>
                    <div className='WorkExRow__playButton'>
                        <BsPlayCircle className="play-icon"/>
                    </div>
                </div>
            </div>
            <div className='WorkEx__info'>
                <div className='WorkEx__skills' onClick={(e) => e.stopPropagation()}>
                    {skillsList.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
                <div className='WorkEx__description'>
                    <ul>
                        {Object.entries(description).map(([key, value]) => (
                            <li key={key}>
                                {key && <strong>{key}:</strong>} {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkExRow