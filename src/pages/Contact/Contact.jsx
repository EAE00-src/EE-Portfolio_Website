import './contact.scss'

import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [disabledState, setDisabledState] = useState(false);
    //State management for send button
    const [isSending, setIsSending] = useState(false);

    //Form reference
    const formRef = useRef();
    //EmailJS config
    //Initialize EmailJS
    useEffect(() => {
        if(import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        }
    }, [])

    const sendEmail = async (e) =>{
        e.preventDefault()
        setIsSending(true)

        try {
            //Send form via EmailJS
           await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            )
            alert('Message sent succesfully!')
            formRef.current.reset();
        } catch(error) {
            console.error(error)
            alert('Failed to send message, please try again.')
            
        } finally {
            setIsSending(false)
        };
        
    };
    //Animation class swap delay
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
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} text={`Contact Me`} startIdx={15} disableDelay={disabledState} />
                </h1>

                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input
                                    type='submit' 
                                    value={isSending ? 'SENDING...' : 'SEND'} 
                                    className='flat-button' 
                                    disabled={isSending} 
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info'>
                Edwin Edouard
                <br />
                Orlando, Florida
                <br />
                <span>Or reach out directly to: edwin.edouard00@gmail.com</span>
            </div>
        </div>
        </>
    )
};

export default Contact;