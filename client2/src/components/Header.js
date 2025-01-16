import React from 'react';
import myPhoto from '../images/My photo_page-0001.jpg';

const Header = () => {
    return (
        <div className='p-3 bg-primary flex justify-between items-center header'>
            <h1 className='text-secondary text-3xl font-bold'>
                Shivangi Agrawal
                <br/><span className='text-white text-sm'>Full Stack Developer</span>
            </h1>

            <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-secondary'>
                <img
                    src={myPhoto}
                    alt='Shivangi Agrawal'
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    );
};

export default Header;
