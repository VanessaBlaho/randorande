import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

import axios from "axios";

export default function Journal(props) {
    const { user } = useContext(UserContext);

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

    return (
        <>
            <div className="journal-parent">
                {user ? (
                    <>
                        <div className="journal-child">
                            <div className="user-detail-box">
                                <img
                                    src="/images/profile_image.png"
                                    alt="Sample Photo"
                                    className="user-detail-box__image"
                                />
                                <div className="user-detail-list">
                                    <h3 className="user-detail-list__username">
                                        {user.username}
                                    </h3>
                                    <p className="user-detail-list__info">
                                        First Name: {user.first_name}
                                    </p>
                                    <p className="user-detail-list__info">
                                        Last Name: {user.last_name}
                                    </p>
                                    <p className="user-detail-list__info">
                                        email: {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="randes-box">
                                {entries.length > 0 ? (
                                    <ul className="randes-list">
                                        {entries.map((entry) => (
                                            <li
                                                key={entry.id}
                                                className="randes-list__item"
                                            >
                                                <Link
                                                    to={`/my-journal/entry/${entry.id}`}
                                                    className="randes-list__link"
                                                >
                                                    {entry.rande.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="randes-box__empty-message">
                                        You don't have any randes in your
                                        journal yet
                                    </p>
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
