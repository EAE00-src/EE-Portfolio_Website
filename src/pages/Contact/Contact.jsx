import './contact.scss'

import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/animation_helper';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [disabledState, setDisabledState] = useState(false);
    
    //State management for send button
    const [isSending, setIsSending] = useState(false);

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
        
    //Form reference
    const formRef = useRef();
    //EmailJS config
    //Initialize EmailJS
    useEffect(() => {
        if(import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        }
    }, []);
    //Send Email Function
    const sendEmail = async (e) =>{
        e.preventDefault();
        setIsSending(true);

        //create a timestamp for the email being sent
        const timestamp = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        //Attach this to the form prior to sending
        formRef.current.date_sent.value = `${timestamp} (${timezone})`;


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
    

    return (
        <>
        <Helmet>
            <title>Edwin Edouard | Contact Me</title>
            <meta name='description' content="I'm currently looking for my next challenge! Whether you need a freelance collaborator
                    or a dedicated full-time developer, I'm ready to jump in and create something wonderful!
                    Feel free to reach out!" />
        </Helmet>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} text={`Contact Me`} startIdx={13} disableDelay={disabledState} />
                </h1>

                <p>
                    I'm currently looking for my next challenge! Whether you need a freelance collaborator
                    or a dedicated full-time developer, I'm ready to jump in and create something wonderful!
                    Feel free to reach out!
                </p>
                <div className='contact-form'>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' autoComplete='given-name' aria-label='name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' autoComplete='email' aria-label='email' required />
                            </li>
                            <li>
                                <input type='text' name='company' placeholder='Company (Optional)' aria-label='company (optional)' />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' aria-label='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' aria-label='message' required></textarea>
                            </li>
                            <li>
                                <input type='hidden' name='date_sent' aria-label='timestamp (hidden)' />
                                <input
                                    type='submit' 
                                    value={isSending ? 'SENDING...' : 'SEND'} 
                                    className='flat-button' 
                                    disabled={isSending} 
                                    aria-label='Send button'
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