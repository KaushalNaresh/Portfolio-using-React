import React, { useState } from 'react'
import './TACard.css'
import {BsPlayCircle} from "react-icons/bs"
import {IoMdTime} from "react-icons/io"
// import {IoIosArrowDropdown} from "react-icons/io";

function TACard({name, timeline, description, logo, link}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    const toggleDescription = (e) => {
        e.stopPropagation(); // Prevent card click when clicking toggle
        setIsExpanded(!isExpanded);
    };

    const renderDescription = () => {
        if (typeof description === 'object') {
            return (
                <ul>
                    {Object.entries(description).map(([key, value], idx) => (
                        <li key={idx}>
                            {key && <strong>{key}:</strong>} {value}
                        </li>
                    ))}
                </ul>
            );
        }
        
        return (
            <>
                <p>{description}</p>
                {description.length > 150 && (
                    <span 
                        className="TACard__info__toggle"
                        onClick={toggleDescription}
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </span>
                )}
            </>
        );
    };

    return (
        <div className={`TACard ${isHovered ? 'hovered' : ''}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={handleClick}>
            <div className='TACard__img-wrapper'>
                <div className='TACard__img' style={{
                    backgroundImage: `url(${logo})`
                }}>
                    <div className='TACard__overlay'>
                        <BsPlayCircle className="TACard__play-icon"/>
                    </div>
                </div>
            </div>
            <div className='TACard__content'>
                <h3 className='TACard__name'>{name}</h3>
                <div className='TACard__timeline'>
                    <IoMdTime className="icon" />
                    {timeline}
                </div>
                <div className={`TACard__info ${!isExpanded ? 'truncated' : ''}`}>
                    {renderDescription()}
                </div>
            </div>
        </div>
    )
}

export default TACard