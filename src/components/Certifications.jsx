import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import BigCard from './BigCard.jsx';
import certifications from '../data/certifications.js';
import '../styles/Certifications.scss';

export default function Certifications() {
    return (
        <>
            <Nav />
            <h2 className='title'>Certifications</h2>
            <div className='certifications'>
                <div className='images'>
                    {certifications?.map(certification => {
                        return <BigCard key={certification?.name} image={certification?.image} link={certification?.link} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
