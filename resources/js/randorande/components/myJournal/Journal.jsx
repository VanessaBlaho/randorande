import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

import axios from "axios";

export default function Journal(props) {
    const { user, setUser } = useContext(UserContext);

    const journalId = 1;

    const [entryId, setEntryId] = useState(null);
    const [entries, setEntries] = useState([]);

    const dataToSend = {
        prop1: "entryId",
        prop2: "setEntryId",
    };

    const fetchEntries = async () => {
        try {
            //'/api/my-journal/{id}'
            const response = await axios.get(`/api/my-journal/${journalId}`);
            //const data = response.data;
            console.log("DATA: ", response.data);
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
                                                    key={entry.entry_id}
                                                    className="randex-list__rande-name"
                                                >
                                                    <Link
                                                        to={
                                                            "/my-journal/entry/" +
                                                            entry.entry_id
                                                        }
                                                    >
                                                        {entry.rande_name}
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
