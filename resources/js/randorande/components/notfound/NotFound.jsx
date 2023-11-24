import { Link } from "react-router-dom";

export default function NotFound() {
    const notFoundStyle = {
        backgroundImage: "url('/images/homepage/sunset_noPeople.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        /* Additional background properties as needed */
        minHeight: "100vh", // Ensure the container covers the entire viewport height
    };
    return (
        <>
            <div className="homepage" style={notFoundStyle}>
                <div className="not-found-page">
                    <h1 className="not-found-page__heading">Page not found</h1>
                    <div className="not-found-page__text">
                        <p>
                            Whoopsy daisy! The page you're looking for does not
                            exist.
                        </p>
                        <p>We suggest you rendezvous back to the home page.</p>
                    </div>
                    <div className="not-found-page__button">
                        <button>
                            <Link to={"/"} className="not-found-page__link">
                                Back to Home
                            </Link>
                        </button>
                    </div>
                    <div className="not-found-page__img">&#128148;</div>
                </div>
            </div>
        </>
    );
}
