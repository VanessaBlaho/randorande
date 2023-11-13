// import '../../../scss/app.scss'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-col">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/date-search">Date Search</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
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
                    <li>Follow Us</li>
                    <li>
                        <a href="#">#</a>
                    </li>
                    <li>
                        <a href="#">#</a>
                    </li>
                    <li>
                        <a href="#">#</a>
                    </li>
                </ul>
            </div>

            <div className="copyright">&copy; RandoRande 2023</div>
        </footer>
    );
}
