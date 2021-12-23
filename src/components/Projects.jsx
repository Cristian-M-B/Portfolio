import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import BigCard from './BigCard.jsx';
import images from '../assets/projects.js';
import '../styles/Projects.scss';

export default function Projects() {
    return (
        <>
            <Nav />
            <div className='projects'>
                <div className='images'>
                    {images?.map(project => {
                        return <BigCard image={project?.image} name={project?.name} link={project?.link} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
