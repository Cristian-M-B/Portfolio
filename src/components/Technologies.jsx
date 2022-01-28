import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import SmallCard from './SmallCard.jsx';
import technologies from '../data/technologies.js';
import '../styles/Technologies.scss';

export default function Technologies() {
    return (
        <>
            <Nav />
            <h2 className='title'>Technologies</h2>
            <div className='technologies'>
                <div className='logos'>
                    {technologies?.map(technology => {
                        return <SmallCard key={technology?.name} image={technology?.image} name={technology?.name} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
