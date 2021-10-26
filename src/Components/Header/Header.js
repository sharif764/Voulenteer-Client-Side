import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/donation">Donation</NavLink>
            <NavLink to="blogs">Blogs</NavLink>
        </div>
    );
};

export default Header;