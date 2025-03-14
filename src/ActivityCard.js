import React from 'react'
import './ActivityCard.css'
import {BsPlayCircle} from "react-icons/bs"
import {IoIosArrowDropdown} from "react-icons/io"
import {FaGithub} from "react-icons/fa"

function ActivityCard({onClick, name, timeline, skills, description, logo, link}) {
    const skillsList = skills ? skills.split(', ') : [];

    return (
        <div className='activityCard'>
            <div className='activityCard__img' style={{
                backgroundImage: `url(${logo})`
            }}>
                <div className='activityCard__shade'></div>
                <div className='activityCard__content-overlay'>
                    <div className='activityCard__header'>
                        <h3 className='activityCard__name'>{name}</h3>
                        <div className='activityCard__timeline'>{timeline}</div>
                    </div>
                    <div className='activityCard__actions'>
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" className='activityCard__github'>
                                <FaGithub />
                            </a>
                        )}
                        <div className='activityCard__showMore__button' onClick={onClick}>
                            <IoIosArrowDropdown className='activityCard__showMore' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='activityCard__description'>
                <div className='activityCard__skills'>
                    {skillsList.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ActivityCard