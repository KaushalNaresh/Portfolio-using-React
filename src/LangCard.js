import React from 'react'
import './LangCard.css'

function LangCard({name, logo}) {
  return (
    <div className='LangCard'>
            <div className='LangCard__img' style={{
                backgroundImage: `url(${logo})`
            }}>
                <div className='LangCard__shade'></div>
            </div>
            <div className='LangCard__description'>
                <div className='LangCard__row1'>
                    <div className='LangCard__name'>{name}</div>
                </div>
            </div>
    </div>
  )
}

export default LangCard;