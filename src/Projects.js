import React, { useState, useEffect } from 'react'
import ActivityCard from './ActivityCard'
import './Projects.css'
import * as Constants from './Constants';
import Omdena from './images/Omdena.gif';
import Netflix from './images/Netflix.gif';
import Btech from './images/Btech.gif';
import Genre from './images/Genre.gif';
import Covid from './images/covid.gif';
import Icd from './images/ICD.png';
import USPolitics from './images/USPolitics.gif';
import ProjectModal from './ProjectModal';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Projects() {
    const cardPerRow = 3;
    const [numOfCardVis, setNumOfCardVis] = useState(cardPerRow);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProj, setSelectedProj] = useState(null);
    const [isExpanding, setIsExpanding] = useState(false);

    const logos = {
        'Omdena': Omdena,
        'Btech': Btech,
        'Netflix': Netflix,
        'Genre': Genre,
        'Covid': Covid,
        'Icd': Icd,
        'USPolitics': USPolitics
    };

    const openModal = (projItem) => {
        setSelectedProj(projItem);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleShowMore = () => {
        setIsExpanding(true);
        setNumOfCardVis(prev => prev + cardPerRow);
    };

    const handleShowLess = () => {
        setIsExpanding(true);
        setNumOfCardVis(cardPerRow);
    };

    useEffect(() => {
        if (isExpanding) {
            const timer = setTimeout(() => {
                setIsExpanding(false);
            }, 300); // Match this with CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [isExpanding]);

    return (
        <div className='projects' id="projects">
            <h1>Projects</h1>
            <div className={`projects__row ${isExpanding ? 'animating' : ''}`}>
                {Constants.activities?.slice(0, numOfCardVis)?.map((activity, idx) => (
                    <ActivityCard
                        key={idx}
                        name={activity.name}
                        timeline={activity.timeline}
                        skills={activity.skills}
                        description={activity.description}
                        logo={logos[activity.logo]}
                        link={activity.link}
                        onClick={() => openModal(activity)}
                    />
                ))}
            </div>
            {Constants.activities.length > cardPerRow && (
                <div className="projects__controls">
                    {numOfCardVis < Constants.activities.length ? (
                        <button 
                            className='projects__showMore__button'
                            onClick={handleShowMore}
                            aria-label="Show more projects"
                        >
                            <IoIosArrowDown className='projects__showMore' />
                            <span>Show More</span>
                        </button>
                    ) : (
                        <button 
                            className='projects__showMore__button'
                            onClick={handleShowLess}
                            aria-label="Show less projects"
                        >
                            <IoIosArrowUp className='projects__showMore' />
                            <span>Show Less</span>
                        </button>
                    )}
                </div>
            )}
            {numOfCardVis < Constants.activities.length && (
                <div className='projects--fadeButton' />
            )}
            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                projData={selectedProj}
            />
        </div>
    );
}

export default Projects;