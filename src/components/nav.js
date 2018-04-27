import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/users/signup'>Sign Up</Link></li>
                    <li><Link to='/users/signin'>Sign In</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;