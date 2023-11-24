import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
    const journalStyle = {
        backgroundImage: "url('/images/homepage/sunset_noPeople.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        /* Additional background properties as needed */
        minHeight: "100vh", // Ensure the container covers the entire viewport height
    };

    return (
        <div className="journal-layout" style={journalStyle}>
            <button className="back-to-journal-btn">
                <Link to={"/my-journal"}>My Journal</Link>
            </button>

            <div className="journal-layout__content">
                <Outlet />
            </div>
        </div>
    );
}
