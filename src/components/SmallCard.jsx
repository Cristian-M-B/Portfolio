import React from 'react';
import '../styles/SmallCard.scss';

export default function SmallCard({ image, name }) {
    return (
        <div className='small-card'>
            <img src={image} alt={name} />
            {name &&
                <h4>{name}</h4>
            }
        </div>
    )
}
