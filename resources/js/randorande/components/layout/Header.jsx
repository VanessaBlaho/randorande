import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import "../../../../scss/app.scss";
import UserContext from "../../UserContext";

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, setUser } = useContext(UserContext);

    const handleLogout = async (event) => {
        event.preventDefault()
        // console.log(values);

        // clear the errors
        // setErrors({});

        // fetch with axios
        try {
            // make the AJAX request
            const response = await axios.post('/logout', values);
            // get the (already JSON-parsed) response data
            // const response_data = response.data; // use later for console.log()
            setUser(null);
            // ADD NAVIGATE TO MY JOURNAL HERE
            navigate("/my-journal");
            
        } catch (error) {
            // if the response code is not 2xx (success)
            console.log("Error Response:", error.response.data.errors);
            if (error.response.status === 422) {
                // handle validation errors here
                setErrors(error.response.data.errors);
            } else if (error.response.status === 500) {
                console.log("UNKNOWN ERROR", error.response.data);
            }
        }
    };


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
                {!user ? (
                        <>
                            <li className="auth-button">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="auth-button">
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    ) : (
                        <li className="auth-button">
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
