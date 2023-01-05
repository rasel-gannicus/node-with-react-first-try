import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-body'>
            <Link to='/'>Home</Link>
            <Link to='/secondTry'>2nd Phase</Link>
        </div>
    );
};

export default Header;