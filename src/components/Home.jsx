import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import '../styles/Home.scss';

export default function Home() {
    return (
        <>
            <Nav />
            <div className='home'>
                Home
            </div>
            <Footer />
        </>
    )
}
