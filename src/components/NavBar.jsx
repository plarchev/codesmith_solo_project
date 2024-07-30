/**
 * ************************************
 *
 * @module  NavBar Component
 * @author Peter Larcheveque
 * @date 7/30/24
 * @description navbar component
 *
 * ************************************
 */

import React from 'react';

const NavBar = () => {
    return (
        <div>
            <ul id = "navbar">
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar;