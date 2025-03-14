import React from 'react';
import './Modal.css';
import ucdavis_logo from "./images/uc_davis.jpeg";
import iitgoa_logo from "./images/iit_goa.jpeg";

const Modal = ({ isOpen, onClose, eduData }) => {
    const logos = {
        "ucdavis_logo": ucdavis_logo,
        "iitgoa_logo": iitgoa_logo
    }

    if (!isOpen || !eduData) return null;

    const hasExtracurricular = eduData.extracurricular && Object.keys(eduData.extracurricular).length > 0;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>&times;</button>

                    <div className="modal-img-banner">
                        <img src={logos[eduData.logo]} alt={eduData.school} />
                        <div className="modal-university-name-overlay">
                            <h1 className="modal-university-name">{eduData.school}</h1>
                        </div>
                    </div>

                    <div className='modal-education__details'>
                        <div className='modal-education__info'>
                            <div>
                                <strong>{eduData.degree}</strong>
                                {eduData.department && <span>, {eduData.department}</span>}
                            </div>
                            {eduData.gpa && <span><strong>GPA:</strong> {eduData.gpa}</span>}
                            {eduData.skills && <span><strong>Skills:</strong> {eduData.skills}</span>}
                            {eduData.transcriptLink && (
                                <a href={eduData.transcriptLink} download className="download-transcript-button">
                                    <strong>Download Transcript</strong>
                                </a>
                            )}
                            
                            <div className='modal-education__courses'>
                                <h3>Relevant Courses</h3>
                                <ul>
                                    {eduData.courses.map((course, index) => (
                                        <li key={index}>{course}</li>
                                    ))}
                                </ul>
                            </div>                    
                        </div>
                        <div className='modal-education__timeline'>
                            <div>{eduData.address}</div> 
                            <div>{eduData.timeline}</div>
                        </div>
                    </div>

                    <div className='modal-extracurr__achvmnts'>
                        {hasExtracurricular && (
                            <div className='modal-education__extracurricular'>
                                <h3>Extracurricular Activities</h3>
                                <ul>
                                    {Object.entries(eduData.extracurricular).map(([role, description], index) => (
                                        <li key={index}><strong>{role}:</strong> {description}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {eduData.achievements && eduData.achievements.length > 0 && (
                            <div className='modal-education__achievements'>
                                <h3>Achievements</h3>
                                <ul>
                                    {eduData.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;


{/* <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/kI0HYB0rzovEsWHeBU" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/ucdavis-davis-uc-ucd-kI0HYB0rzovEsWHeBU">via GIPHY</a></p> */}
