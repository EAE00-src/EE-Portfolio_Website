import './portfolio.scss'

import { useState, useEffect } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';
import projectData from '../../data/projects.json';
import RenderProjects from '../../components/ProjectCards/ProjectCards';
import { Helmet } from 'react-helmet-async';


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
                }, 2800);
                //timeout cleanup
                return () => {clearTimeout(timeoutId)}
            //fire once upon rendering
        }, []);

    
    return (
        <>
        <Helmet>
            <title>Edwin Edouard | Portfolio</title>
            <meta name='description' content="Here are the projects I've worked on so far..." />
        </Helmet>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                    letterClass={letterClass} 
                    text={`Portfolio`} 
                    startIdx={11} 
                    disableDelay={disabledState} 
                />
            </h1>
            <div> <RenderProjects project={projectData.projects} /> </div>
        </div>
        </>
    )
};

export default Portfolio;