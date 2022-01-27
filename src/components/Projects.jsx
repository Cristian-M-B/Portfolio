import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import MediumCard from './MediumCard.jsx';
import projects from '../data/projects.js';
import '../styles/Projects.scss';

export default function Projects() {
    return (
        <>
            <Nav />
            <h2 className='title'>Projects</h2>
            <div className='projects'>
                <div className='images'>
                    {projects?.map(project => {
                        return <MediumCard key={project?.name} image={project?.image} name={project?.name} link={project?.link} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
