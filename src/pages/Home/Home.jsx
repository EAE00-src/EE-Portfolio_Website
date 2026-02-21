import './Home.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoInit from '../../assets/images/e-initial-logo-transparent.png';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';


const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['d', 'w', 'i', 'n'];
    const profArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        const timeoutId = setTimeout(() =>{
            setLetterClass('text-animate-hover')
            //4 second delay 
        }, 4000);
        //timeout cleanup
        return () => {clearTimeout(timeoutId)}
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} `}>H</span>
                    <span className={`${letterClass} _10`}>i</span>
                    <span className={`${letterClass} _11`}>,</span>
                    
                <br /> 
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _13`}>'</span>
                    <span className={`${letterClass} _14`}>m</span>
                <img src={logoInit} alt='developer'/>
                
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                
                <AnimatedLetters letterClass={letterClass} strArray={profArray} idx={22} />
                </h1>
                <h2>
                    Frontend developer / JavaScript / React
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;