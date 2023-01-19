import React from 'react'
import './WorkExRow.css'
import {BsPlayCircle} from "react-icons/bs";

function WorkExRow({idx, name, description, address, timeline, role, skills, logo, webSite}) {
  return (
    <div className='WorkExRow'>
        <div className='WorkExRow__idx'><p>{idx}</p></div>
        <div className="WorkExRow__img">
            <a href={webSite}>
                <div className='WorkExRow__imgWrapper'>
                    <img src={logo} alt=''/>
                    <div className='WorkExRow__playButton'><BsPlayCircle color='white' size={50}/></div>
                </div>
            </a>
        </div>
        <div className='WorkEx__info'>
            <div className='WorkEx__header'>
                <div className='WorkEx__name'>
                    <span>{name}</span> &nbsp;
                    <span>| {role}</span>
                </div>
                <div className='WorkEx__timeAddress'>
                    <span>{timeline}</span>
                    <span>{address}</span>
                </div>
            </div>
            <div className='WorkEx__skills'>Skills : {skills}</div>
            <div className='WorkEx__description'>
               {
                <ul>{
                        Object.entries(description).map(([key, value]) => (
                            <li key={key}><span>{key} {key !== "" ? ":" : ""} </span>{value}</li>
                        ))
                    }
                </ul>
               }
            </div>
        </div>
    </div>
  )
}

export default WorkExRow