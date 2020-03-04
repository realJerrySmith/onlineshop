import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{ //we just want the effect of the image getting bigger, not the actual image getting bigger
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Jetzt einkaufen</span>
        </div>
    </div>
)

export default MenuItem;