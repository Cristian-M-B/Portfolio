import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import SmallCard from './SmallCard.jsx';
import technologies from '../assets/technologies.js';
import '../styles/Technologies.scss';

export default function Technologies() {
    return (
        <>
            <Nav />
            <div className='technologies'>
                <div className='logos'>
                    {technologies?.map(tech => {
                        return <SmallCard image={tech?.image} name={tech?.name} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
