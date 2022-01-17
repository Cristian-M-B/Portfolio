import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import MediumCard from './MediumCard.jsx';
import images from '../data/projects.js';
import '../styles/Projects.scss';

export default function Projects() {
    return (
        <>
            <Nav />
            <div className='projects'>
                <div className='images'>
                    {images?.map(project => {
                        return <MediumCard key={project?.name} image={project?.image} name={project?.name} link={project?.link} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
