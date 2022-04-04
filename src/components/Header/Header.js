import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='sticky top-0 py-6 flex gap-6 font-bold text-xl justify-center'>
            <CustomLink className='border-b-4' to='/'>Home</CustomLink>
            <CustomLink className='border-b-4' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='border-b-4' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='border-b-4' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='border-b-4' to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;