import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => {
    return (
    <div className = 'headerContainer'>
        <div className = 'ImageThumbnail'>
            <ImageThumbnail />
        </div>
        <div className='flex-wrapper'>
            <div className = 'HeaderTitle'>
                <HeaderTitle />
            </div>

            <div className = 'HeaderContent'>
                <HeaderContent />
            </div>
        </div>
    
    </div>
    
    
    );
};

export default HeaderContainer;