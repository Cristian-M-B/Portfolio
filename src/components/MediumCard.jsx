import React from 'react';
import '../styles/MediumCard.scss';

export default function BigCard({ image, name, link }) {
    return (
        <div className='medium-card'>
            <a href={link} target='_blank' rel='noreferrer'><img src={image} alt={name} /></a>
            {name &&
                <h2>{name}</h2>
            }
        </div>
    )
}
