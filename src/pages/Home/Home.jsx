import './Home.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoInit from '../../assets/images/e-initial-logo-transparent.png';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';
import Logo from '../../components/Animated_Logo/Logo';
import Test from '../../components/Animated_Logo/test';
import TestTwo from '../../components/Animated_Logo/Test2';




const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const [disabledState, setDisabledState] = useState(false);
    const name = 'dwin,';
    const profession = 'a web developer.'

    useEffect(() => {
        const timeoutId = setTimeout(() =>{
            setLetterClass('text-animate-hover')
            setDisabledState(true)
            //4 second delay 
        }, 4000);
        //timeout cleanup
        return () => {clearTimeout(timeoutId)}
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} text={`Hi,`} startIdx={12} disableDelay={disabledState} />
                    
                <br /> 
                    <AnimatedLetters letterClass={letterClass} text={`I'm`} startIdx={15} disableDelay={disabledState} />
                <img src={logoInit} alt='developer'/>
                
                <AnimatedLetters letterClass={letterClass} text={name} startIdx={18} disableDelay={disabledState} />
                <br />
                
                <AnimatedLetters letterClass={letterClass} text={profession} startIdx={24} disableDelay={disabledState} />
                </h1>
                <h2>
                    Frontend developer / JavaScript / React
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <TestTwo />
        </div>
    )
}

export default Home;