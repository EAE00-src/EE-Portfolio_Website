import './About.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';
import { FaCss3Alt, FaHtml5, FaReact, FaNode } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [disabledState, setDisabledState] = useState(false);

    useEffect(() => {
            const timeoutId = setTimeout(() =>{
                setLetterClass('text-animate-hover')
                setDisabledState(true)
                //x second delay (milliseconds)
            }, 3300);
            //timeout cleanup
            return () => {clearTimeout(timeoutId)}
        }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} text={`About`} startIdx={15} disableDelay={disabledState} />
                </h1>

                <p>
                    👋Hi, I'm <span className='about-span'>Edwin</span>, an emerging Front-End Developer excited to build intuitive, accessible, and remarkable digital user experiences.
                </p>

                <p>
                    My journey began with a lifelong fascination with how technology shapes our modern world, 
                    leading me to a simple realization: <span className='about-span'>I would love to be one of the people driving the industry forward!</span> 
                    {' '}I've spent quite some time as a student of OpenClassrooms' Web Developer training program, 
                    refining my ability to turn complex problems and designs into clean, functional code.
                </p>
                    <ul>
                        <li>
                            <p> 
                                <span style={{fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}>Skills:</span>
                                <span style={{color:'#5ED4F4', fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}> React </span> / 
                                <span style={{color:'#68a063', fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}> Node.js </span> / 
                                <span style={{color:'#E6E6E6', fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}> Express </span>/ 
                                <span style={{color:'#589636', fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}> MongoDB </span>/ 
                                <span style={{color:'#EFD81D', fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}> JavaScript (ES6+) </span>/ 
                                <span style={{color:'#CD6799', fontStyle: 'italic', fontFamily:'Jetbrains Mono'}}> Sass </span>/ 
                                <span style={{fontFamily:'Jetbrains Mono', fontStyle:'italic'}}> Agile</span>
                            </p>
                        </li>
                        
                    </ul>
                <p>
                    I'm always looking for opportunities to grow as <span className='about-span'>I believe that technology should be a bridge,
                    not a barrier.</span> {' '} So with that said, let's build something that makes a difference!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner' aria-label='Animated cube showing my tech stack: HTML, CSS, JavaScript, React, MongoDB, and Node.js'>
                    <div className='face1'>
                        <div className='icon'>
                            <FaHtml5 color='#F06529' />
                        </div>
                    </div>
                    <div className='face2'>
                        <div className='icon'>
                            <FaCss3Alt color='#28A4D9' />
                        </div>
                    </div>
                    <div className='face3'>
                        <div className='icon'>
                            <IoLogoJavascript color='#EFD81D' />
                        </div>
                    </div>
                    <div className='face4'>
                        <div className='icon'>
                            <FaReact color='#5ED4F4' />
                        </div>
                    </div>
                    <div className='face5'>
                        <div className='icon'>
                            <FaNode color='#68a063' />
                        </div>
                    </div>
                    <div className='face6'>
                        <div className='icon'>
                            <DiMongodb color='#589636' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;