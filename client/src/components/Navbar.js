import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li><NavLink to="/form">Entry Form</NavLink></li>
            <li><NavLink to="/entries">All Entries</NavLink></li>
            {/* <li><NavLink to="/pdf">PDF DUMMY</NavLink></li> */}
        </ul>
    )
}

export default Navbar;
