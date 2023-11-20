import React, { useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
//import "../../../../scss/app.scss";
import UserContext from "../../UserContext";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async ev => {
        ev.preventDefault();
      
        try {
           
            const response = await axios.post('/logout');
       
            setUser(null);
            // ADD NAVIGATE TO MY JOURNAL HERE
            // navigate("/my-journal");
            navigate("/");
            
        } catch (error) {
           
            console.log("Error Response:", error.response.data.errors);
            if (error.response.status === 422) {
                
                setErrors(error.response.data.errors);
            } else if (error.response.status === 500) {
                console.log("UNKNOWN ERROR", error.response.data);
            }
        }
    };


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const checkAuthenticationStatus = async () => {
            try {
                const response = await axios.get('/login'); // Replace with your authentication check endpoint
                const authenticatedUser = response.data.user;
                setUser(authenticatedUser);
            } catch (error) {
                // Handle error (e.g., user not authenticated)
            }
        };

        checkAuthenticationStatus();
    }, [setUser]); 

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
                        {!user? (
                            <>
                        <li>
                            My Journal
                            </li>
                        </>
                        ): ( 
                            <Link to="/my-journal">My Journal</Link>
                        )}
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
                            <Link to="/logout" onClick={handleLogout}>Logout</Link>

                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
