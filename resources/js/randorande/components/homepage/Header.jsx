import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../scss/app.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={menuOpen ? "open" : ""}>
            <div className="burger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav-links">
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/date-search">Date Search</Link>
                        </li>
                        <li>
                            <Link to="/my-journal">My Journal</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="auth-buttons">
                <ul>
                    <li className="auth-button">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="auth-button">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
