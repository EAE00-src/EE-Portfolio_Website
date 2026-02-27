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
            }, 3000);
            //timeout cleanup
            return () => {clearTimeout(timeoutId)}
        }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} text={`About me`} startIdx={15} disableDelay={disabledState} />
                </h1>

                <p>
                    I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit quaerat ea, architecto voluptate rem, a amet corporis exercitationem neque quam dolorum! Ratione harum ut blanditiis doloremque vitae! Quasi, similique.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a tech-enthusiast!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
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