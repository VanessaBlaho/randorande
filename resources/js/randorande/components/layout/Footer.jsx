// import '../../../scss/app.scss'
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../UserContext";

export default function Footer() {
    const { user, setUser } = useContext(UserContext);


    return (
        <footer className="footer">
            <div className="footer-col">
                <ul className="footer-nav__container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {!user ? (
                        <>
                            <li>
                                {" "}
                                <Link
                                    to="/login"
                                    className="tooltip_login__footer"
                                >
                                    Date Search
                                </Link>{" "}
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className="tooltip_login__footer"
                                >
                                    My Journal
                                </Link>{" "}
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to="/date-search"
                                >
                                    Date Search
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-journal">My Journal</Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-col-contactUs">
                <ul>
                    <li className="follow-us">Follow Us</li>
                    <div className="social-media__container">
                        <li className="social-media__circle">
                            <a href="#">
                                <img
                                    className="social-media__image"
                                    src="/images/footer-icons/twitter.svg"
                                    alt="twitter"
                                />
                            </a>
                        </li>
                        <li className="social-media__circle">
                            <a href="#">
                                <img
                                    className="social-media__image"
                                    src="/images/footer-icons/instagram.svg"
                                    alt="instagram"
                                />
                            </a>
                        </li>
                        <li className="social-media__circle">
                            <a href="#">
                                <img
                                    className="social-media__image"
                                    src="/images/footer-icons/github.svg"
                                    alt="github"
                                />
                            </a>
                        </li>
                    </div>
                </ul>
            </div>

            <div className="copyright">&copy; RandoRande 2023</div>
        </footer>
    );
}
