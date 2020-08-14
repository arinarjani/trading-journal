import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li>
                    <Link to="/">Show All</Link>
                </li>
                <li className="logo">My Playbook</li>
                <li>
                    <Link to="/trades/new"> Add New Trade </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;