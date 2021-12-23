import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import avatar from '../assets/images/avatar/avatar.png';
import '../styles/Home.scss';

export default function Home() {
    return (
        <>
            <Nav />
            <div className='home'>
                <div className='avatar'>
                    <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer'>
                        <img src={avatar} alt='Cristian Baronetto' />
                    </a>
                </div>
                <div className='text'>
                    <h1>Cristian Baronetto</h1>
                    <h1>Full Stack Developer</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}
