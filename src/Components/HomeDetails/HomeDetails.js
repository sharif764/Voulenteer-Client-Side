import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeDetails = (props) => {
    const { id, img, key, headline } = props.details;
    return (

        <div className="position-relative">
            <div>
                <img src={img} alt="img" />
            </div>
            <NavLink to="/home/key">Details</NavLink>
        </div>

    );
};

export default HomeDetails;