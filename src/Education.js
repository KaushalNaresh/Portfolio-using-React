import React from 'react'
import './Education.css'
import {FaGraduationCap} from 'react-icons/fa'
import * as Constants from './Constants'

function Education() {
  return (
    <div className='education'>
        <div className='education__contents'>

            <div className='education__header'>
                <span>Education </span> &nbsp;<FaGraduationCap size={20} color='white'/>
            </div>

            {/* <div className='education__chronology'>

                <div className='education one'>
                    <div className='education__details'>
                        <div className='education__info'>
                            <h1>University Of California Davis</h1>
                            <span>{Constants.ucdavis_degree_and_gpa}</span>
                            <span>{Constants.ucdavis_description}</span> 
                        </div>
                        <div className='education__timeline'>
                            <span>{Constants.ucdavis_address}</span>&nbsp;
                            <span>{Constants.ucdavis_timeline}</span>
                        </div>
                    </div>
                </div>

                <div className='education two'>
                    <div className='education__details'>
                        <div className='education__info'>
                            <h1>Indian Institute Of Technology Goa</h1>
                            <span>{Constants.iitgoa_degree_and_gpa}</span>
                            <span>{Constants.iitgoa_description}</span> 
                        </div>
                        <div className='education__timeline'>
                            <span>{Constants.iitgoa_address}</span>&nbsp; 
                            <span>{Constants.iitgoa_timeline}</span>
                        </div>
                    </div>
                </div>

            </div> */}

            <div className='education__chronology'>
                <div className='education'>
                    <div className='education__details'>
                    <div className='education__info'>
                        <h1>University Of California Davis</h1>
                        <span>{Constants.ucdavis_degree_and_gpa}</span>
                        <span>{Constants.ucdavis_description}</span>
                    </div>
                    <div className='education__timeline'>
                        <div>{Constants.ucdavis_address}</div> 
                        <div>{Constants.ucdavis_timeline}</div>
                    </div>
                    </div>
                </div>

                <div className='education'>
                    <div className='education__details'>
                    <div className='education__info'>
                        <h1>Indian Institute Of Technology Goa</h1>
                        <span>{Constants.iitgoa_degree_and_gpa}</span>
                        <span>{Constants.iitgoa_description}</span>
                    </div>
                    <div className='education__timeline'>
                        <div>{Constants.iitgoa_address}</div> 
                        <div>{Constants.iitgoa_timeline}</div>
                    </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Education