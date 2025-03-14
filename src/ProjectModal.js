import React, { useEffect } from 'react';
import './ProjectModal.css';
import Omdena from './images/Omdena.gif';
import Netflix from './images/Netflix.gif';
import Btech from './images/Btech.gif';
import Genre from './images/Genre.gif';
import Covid from './images/covid.gif';
import Icd from './images/ICD.png';
import USPolitics from './images/USPolitics.gif';
import { BsPlayCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ isOpen, onClose, projData }) => {
    const logos = {
        'Omdena': Omdena,
        'Btech': Btech,
        'Netflix': Netflix,
        'Genre': Genre,
        'Covid': Covid,
        'Icd': Icd,
        'USPolitics': USPolitics
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const skillsList = projData?.skills ? projData.skills.split(', ') : [];

    return (
        <>
            <div className="project-modal-overlay" onClick={onClose}>
                <div className="project-modal" onClick={e => e.stopPropagation()}>
                    <button className="project-modal-close" onClick={onClose}>
                        <IoClose />
                    </button>

                    <div className="project-modal-img-banner">
                        <img src={logos[projData.logo]} alt={projData.name} />
                        <div className="project-modal-project-overlay"></div>
                        {projData.link && (
                            <a 
                                href={projData.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-modal-github-link"
                            >
                                <FaGithub />
                                <span>View on GitHub</span>
                            </a>
                        )}
                    </div>

                    <div className="project-modal-content">
                        <div className="project-modal-header">
                            <h1 className="project-modal-project-name">{projData?.name}</h1>
                            <div className="project-modal-project-timeline">{projData?.timeline}</div>
                        </div>

                        <div className="project-modal-skills">
                            {skillsList.map((skill, index) => (
                                <span key={index} className="project-modal-skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="project-modal-description">
                            <h3>Description</h3>
                            <ul>
                                {Object.entries(projData?.description || {}).map(([role, description], index) => (
                                    <li key={index}>
                                        <strong>{role}:</strong>
                                        <p>{description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;