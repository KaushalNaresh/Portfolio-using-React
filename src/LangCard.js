import React from 'react'
import './LangCard.css'

function LangCard({name, logo, proficiency}) {
    return (
        <div className='LangCard'>
            <div className='LangCard__content'>
                <div className='LangCard__icon-wrapper'>
                    <div className='LangCard__img' style={{
                        backgroundImage: `url(${logo})`
                    }} />
                </div>
                <div className='LangCard__info'>
                    <h3 className='LangCard__name'>{name}</h3>
                    <span className='LangCard__proficiency'>{proficiency}</span>
                </div>
            </div>
        </div>
    )
}

export default LangCard;