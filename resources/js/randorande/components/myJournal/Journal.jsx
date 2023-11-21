import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

import axios from "axios";

export default function Journal(props) {
    const { user, setUser } = useContext(UserContext);

    //const [entryId, setEntryId] = useState(null);
    const [entries, setEntries] = useState([]);

    const fetchEntries = async () => {
        try {
            const response = await axios.get(`/api/my-journal`);

            setEntries(response.data);
        } catch (error) {
            console.log(error);
            console.log(error.response); // the response object from the failed request
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    //
    return (
        <>
            <div className="my-journal-parent">
                {user ? (
                    <>
                        <div className="my-journal-child">
                            <div className="user-detail-box">
                                <img
                                    src="/images/profile_image.png"
                                    alt="Sample Photo"
                                    style={{ width: "30%", margin: "5%" }}
                                />
                                <div className="user-detail-list">
                                    <h3>{user.username}</h3>
                                    <p>First Name: {user.first_name}</p>
                                    <p>Last Name: {user.last_name}</p>
                                    <p>email: {user.email}</p>
                                </div>
                            </div>
                            <div className="randes-box">
                                {entries.length > 0 ? (
                                    <ul className="randes-list__list">
                                        {entries.map((entry) => {
                                            return (
                                                <li
                                                    key={entry.id}
                                                    className="randex-list__rande-name"
                                                >
                                                    <Link
                                                        to={
                                                            "/my-journal/entry/" +
                                                            entry.id
                                                        }
                                                    >
                                                        {entry.rande.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    "You don't have any randes in your journal yet"
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="edit-loader">&#9203;</div>
                )}
            </div>
        </>
    );
}
