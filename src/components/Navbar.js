import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => { (window.scrollY >= 1) ? (setColor(true)) : (setColor(false)) };

    window.addEventListener("scroll", changeColor);

    return (
        <div class={(color) ? ("header header-bg") : ("header")}>
            <Link to="/">
                <h1>portfolio</h1>
            </Link>
            <ul class={click ? ("nav-menu active") : ("nav-menu")}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/project">
                        Project
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <div class="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#3fff" }} />) :
                    (<FaBars size={20} style={{ color: "#3fff" }} />)}
            </div>
        </div >
    )
}

export default Navbar
