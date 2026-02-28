import { Link, NavLink } from 'react-router-dom';

import logoInit from '../../assets/images/e-initial-logo-transparent.png';
import logoName from '../../assets/images/EAE-logo.png';
import './sidebar.scss'
import { FaEnvelope, FaHome, FaLaptopCode, FaUser } from 'react-icons/fa';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';

const Sidebar = () =>{
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                {/*Logo Initial E? as <img>*/}
                <img src={logoInit} alt='E' />
                {/*Subtitle <img>, full name*/}
                <img className='sub-logo' src={logoName} alt='Edwin A. Edouard' />
            </Link>
            <nav>
                {/*Home Nav*/}
                <NavLink 
                    to='/' end 
                    className={({isActive}) => 
                    isActive ? 'active' : ''
                    }
                    aria-label='Go to Home Page'
                >
                    <FaHome size={20} aria-hidden='true' />
                </NavLink>

                {/*About Nav*/}
                <NavLink 
                    to='/about'
                    className={({isActive}) =>
                    `about-link ${isActive ? 'active' : ''}`
                    }
                    aria-label='Go to About Page'
                >
                    <FaUser size={20} aria-hidden='true' />
                </NavLink>

                {/*Portfolio Nav*/}
                <NavLink 
                    to='/portfolio'
                    className={({isActive}) =>
                    `portfolio-link ${isActive ? 'active' : ''}`
                    }
                    aria-label='Go to Portfolio Page'
                >
                    <FaLaptopCode size={20} aria-hidden='true' />
                </NavLink>

                {/*Contact Nav*/}
                <NavLink 
                    to='/contact'
                    className={({isActive}) =>
                     `contact-link ${isActive ? 'active' : ''}`
                    }
                    aria-label='Go to Contacts Page'
                >
                    <FaEnvelope size={20} aria-hidden='true' />
                </NavLink>
            </nav>
            <ul>
                {/*LinkedIn anchor*/}
                <li>
                    <a target='_blank' rel='noreferrer' aria-label='Go to LinkedIn' href='#'>
                        <FaLinkedin size={20} aria-hidden='true' />
                    </a>
                </li>
                
                {/*Github anchor*/}
                <li>
                    <a target='_blank' rel='noreferrer' aria-label='Go to GitHub' href='#'>
                        <FaSquareGithub size={20} aria-hidden='true' />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;