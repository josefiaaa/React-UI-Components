import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => {
    return (
        <div className = 'cardContainer'>
            <a href='https://www.reactjs.org'>
                <div className = 'cardBanner'>
                    <CardBanner />
                </div>

                <div className = 'cardContent'>
                    <CardContent />
                </div>
            </a>
        </div>    
    );
};

export default CardContainer;