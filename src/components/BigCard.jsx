import React from 'react';
import '../styles/BigCard.scss';

export default function BigCard({ image, name, link }) {
    return (
        <div className='big-card'>
            <a href={link} target='_blank' rel='noreferrer'><img src={image} alt={name} /></a>
            {name &&
                <h2>{name}</h2>
            }
        </div>
    )
}
