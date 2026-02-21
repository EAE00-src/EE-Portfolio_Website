import { Link, NavLink } from 'react-router-dom';

import logoInit from '../../assets/images/e-initial-logo-transparent.png';
import logoName from '../../assets/images/EAE-logo.png';
import './sidebar.scss'
import { FaEnvelope, FaGitSquare, FaHome, FaUser } from 'react-icons/fa';
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
                >
                    <FaHome size={20} />
                </NavLink>

                {/*About Nav*/}
                <NavLink 
                    to='/about'
                    className={({isActive}) =>
                    `about-link ${isActive ? 'active' : ''}`
                    }
                >
                    <FaUser size={20} />
                </NavLink>

                {/*Contact Nav*/}
                <NavLink 
                    to='/contact'
                    className={({isActive}) =>
                     `contact-link ${isActive ? 'active' : ''}`
                    }
                >
                    <FaEnvelope size={20} />
                </NavLink>
            </nav>
            <ul>
                {/*LinkedIn anchor*/}
                <li>
                    <a target='_blank' rel='noreferrer' href='#'>
                        <FaLinkedin size={20} />
                    </a>
                </li>
                
                {/*Github anchor*/}
                <li>
                    <a target='_blank' rel='noreferrer' href='#'>
                        <FaSquareGithub size={20} />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;