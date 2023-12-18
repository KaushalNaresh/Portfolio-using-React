import React from 'react'
import './Education.css'
import {FaGraduationCap} from 'react-icons/fa'
import * as Constants from './Constants'
import Modal from './Modal';
import { useState } from 'react';

function Education() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedEdu, setSelectedEdu] = useState(null);

    const openModal = (eduItem) => {
        setSelectedEdu(eduItem);
        setModalOpen(true);        
    };
       
    const closeModal = () => setModalOpen(false);

    return (

    <div className='education' id='education'>
            <div className='education__contents'>
                <div className='education__header'>
                    <span>Education </span> &nbsp;<FaGraduationCap size={20} color='white'/>
                </div>
                <div className='education__chronology'>
                    {Constants.education.map((edu) => (
                        <div key={edu.id} className="education__section">
                            {/* Replace the below content with your actual education details structure */}
                            
                            <div className='education__card' onClick={()=>openModal(edu)}>
                                <div className='education__details'>
                                    <div className='education__info'>
                                        <h1>{edu.school}</h1>
                                        <div><span>{edu.degree},</span>&nbsp;
                                        <span>{edu.department}</span></div>
                                        <span>GPA: {edu.gpa}</span>
                                        <span>{edu.description}</span>
                                    </div>
                                    <div className='education__timeline'>
                                        <div>{edu.address}</div> 
                                        <div>{edu.timeline}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>     
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} eduData={selectedEdu}></Modal>
        </div>
    );
}

export default Education