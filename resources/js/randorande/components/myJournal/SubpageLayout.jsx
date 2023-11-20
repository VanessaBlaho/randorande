import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
    return (
        <div className="journal-layout">
            <button className="back-to-journal-btn">
                <Link to={"/my-journal"}>My Journal</Link>
            </button>

            <div className="journal-layout__content">
                <Outlet />
            </div>
        </div>
    );
}
