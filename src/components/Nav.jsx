import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GiDiploma } from 'react-icons/gi';
import { TiContacts } from 'react-icons/ti';
import '../styles/Nav.scss';

export default function Nav() {
    return (
        <>
            <div className='nav'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/technologies'>
                    <button>Technologies</button>
                </Link>
                <Link to='/projects'>
                    <button>Projects</button>
                </Link>
                <Link to='/certifications'>
                    <button>Certifications</button>
                </Link>
                <Link to='/contact'>
                    <button>Contact</button>
                </Link>
            </div>
            <div className='responsive'>
                <Link to='/'>
                    <button><HiHome size={25} /></button>
                </Link>
                <Link to='/technologies'>
                    <button><FaLaptopCode size={25} /></button>
                </Link>
                <Link to='/projects'>
                    <button><BsBriefcaseFill size={25} /></button>
                </Link>
                <Link to='/certifications'>
                    <button><GiDiploma size={30} /></button>
                </Link>
                <Link to='/contact'>
                    <button><TiContacts size={30} /></button>
                </Link>
            </div>
        </>
    )
}
