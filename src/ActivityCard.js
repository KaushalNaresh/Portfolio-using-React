import React from 'react'
import './ActivityCard.css'
import {BsPlayCircle} from "react-icons/bs"

function ActivityCard({name, timeline, skills, description, logo, link}) {
  return (
    
        <div className='activityCard'>
            <a href={link}>
                <div className='activityCard__img' style={{
                    backgroundImage: `url(${logo})`
                }}>
                    <div className='activityCard__shade'></div>
                    <div className='activityCard__playButton'><BsPlayCircle color='white'/></div>
                </div>
            </a>
            <div className='activityCard__description'>
                <div className='activityCard__name'>{name}</div>
                <div className='activityCard__timeline'>{timeline}</div>
                <div className='activityCard__skills'>Skills: {skills}</div>
                <div className='activityCard__info'>
                    <ul>
                        {
                            Object.entries(description).map(([key, value]) => (
                                <li key={key}><span>{key}{key !== "" ? ":" : ""}</span>{value}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ActivityCard