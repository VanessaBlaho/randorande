import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//{ entryId, setEntryId }
export default function EditRandeLog({ entryId = 3 }) {
    const [entry, setEntry] = useState(null);
    const [message, setMessage] = useState(null);

    //load existing data
    const fetchEntry = async () => {
        try {
            // '/api/entries/{entryId}/edit'
            const response = await axios.get(`/api/entries/${entryId}/edit`);
            //const data = response.data;
            //console.log("DATA: ", response.data);
            setEntry(response.data);
        } catch (error) {
            console.log(error);
            console.log(error.response); // the response object from the failed request
        }
    };

    //send inserted data
    const sendData = async (e) => {
        e.preventDefault();

        try {
            // '/entries/{entry_id}/edit'
            const response = await axios.post(
                `/api/entries/${entryId}/store`,
                entry
            );
            setMessage(response.data["message"]);
        } catch (error) {
            console.log(error);
        }
    };

    //handling entry update
    const handleChange = (e) => {
        setEntry((previousValues) => {
            return { ...previousValues, [e.target.name]: e.target.value };
        });
    };

    useEffect(() => {
        fetchEntry();
    }, []);

    return (
        <>
            <div className="edit-page-main-container">
                {entry ? (
                    <div className="edit-container">
                        <button className="edit-container__back-btn">
                            <Link to={"/my-journal"}>My Journal</Link>
                        </button>

                        {/* rande name */}
                        <h1 className="edit-container__title">
                            {entry.rande_name}
                        </h1>

                        {message ? <span>{message}</span> : ""}

                        <div className="edit-form">
                            <form
                                className="edit-form__form"
                                action=""
                                onSubmit={sendData}
                            >
                                <input
                                    className="edit-form__input edit-form__input--date"
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={entry.date ?? ""}
                                    onChange={handleChange}
                                ></input>
                                <input
                                    className="edit-form__input edit-form__input--location"
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="Enter location"
                                    value={entry.location ?? ""}
                                    onChange={handleChange}
                                ></input>
                                <textarea
                                    className="edit-form__textarea"
                                    id="entry_text"
                                    name="entry_text"
                                    placeholder="Add a memorable note about your rande here"
                                    rows="4"
                                    cols="50"
                                    value={entry.entry_text ?? ""}
                                    onChange={handleChange}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="edit-form__button"
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="edit-loader">&#9203;</div>
                )}
            </div>
        </>
    );
}
