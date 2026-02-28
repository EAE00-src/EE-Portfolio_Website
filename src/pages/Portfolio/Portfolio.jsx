import './portfolio.scss'

import { useState, useEffect } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';
import projectData from '../../data/projects.json';
import RenderProjects from '../../components/ProjectCards/ProjectCards';


const Portfolio = () => {
    console.log('projectData:', projectData);
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const [disabledState, setDisabledState] = useState(false);
    //Animation class swap delay
        useEffect(() => {
            const timeoutId = setTimeout(() =>{
                setLetterClass('text-animate-hover')
                setDisabledState(true)
                //x second delay (milliseconds)
                }, 3000);
                //timeout cleanup
                return () => {clearTimeout(timeoutId)}
            //fire once upon rendering
        }, []);

    
    return (
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                    letterClass={letterClass} 
                    text={`Portfolio`} 
                    startIdx={12} 
                    disableDelay={disabledState} 
                />
            </h1>
            <div> <RenderProjects project={projectData.projects} /> </div>
        </div>
    )
};

export default Portfolio;