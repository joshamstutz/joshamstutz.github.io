import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isDarkBackground }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <nav className={`navbar ${isDarkBackground ? 'dark-background' : 'light-background'}`}>
            <h1
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="first-name">josh</span>
                <span className="middle-name">
                    {hovered ? "(ua) amstutz" : ""}
                </span>
                <span className="last-name">amstutz</span>
            </h1>
            <ul>
                <li><Link to="/site/">home</Link></li>
                <li><Link to="/resumé">resumé</Link></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/life">life</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
