import React from 'react';
import ProTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({title, icon}) =>{
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon}/>{title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title:ProTypes.string.isRequired,
    icon:ProTypes.string
};

Navbar.defaultProps ={
    title :'Contact Keeper',
    icon:'fas fa-id-card-alt'
}

export default Navbar;