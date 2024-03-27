import React from 'react'
import './TACard.css'
// import {BsPlayCircle} from "react-icons/bs"
// import {IoIosArrowDropdown} from "react-icons/io";

function TACard({name, timeline, description, logo, link}) {
    return (
        <div className='TACard'>
            <a href={link}>
                <div className='TACard__img' style={{
                    backgroundImage: `url(${logo})`
                }}>
                    <div className='TACard__shade'></div>
                </div>
            </a>
            <div className='TACard__description'>
                <div className='TACard__row1'>
                    <div className='TACard__name'>{name}</div>
                    <div className='TACard__timeline'>{timeline}</div>
                    <div className='TACard__info'>{description}</div>
                </div>
            </div>
        </div>
  )
}

export default TACard