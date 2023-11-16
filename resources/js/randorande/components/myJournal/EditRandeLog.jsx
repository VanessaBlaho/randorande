import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//{ entryId, setEntryId }
export default function EditRandeLog() {
    let entryId = 1;
    const [entry, setEntry] = useState(null);
    const [message, setMessage] = useState(null);

    //load existing data
    const fetchEntry = async () => {
        try {
            const response = await axios.get("/api/entries/" + entryId);
            const data = response.data;
            console.log(data.rande_id);
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
            const response = await axios.post(
                "api/entries/" + entryId + "/store",
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
        console.log("data fetched");
        console.log("After use effect: ", entry);
    }, []);

    return (
        <>
            {entry ? (
                <div className="edit-page-main-container">
                    {message ? <span>{message}</span> : ""}
                    <div className="edit-container">
                        <button className="edit-container__back-btn">
                            <Link to={"/my-journal"}>My Journal</Link>
                        </button>

                        <h1 className="edit-container__title">
                            Rande name to edit {entry.rande_id}
                        </h1>

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
                                    name="rande-date"
                                    //value={entry.date}
                                    onChange={handleChange}
                                ></input>
                                <input
                                    className="edit-form__input edit-form__input--location"
                                    type="text"
                                    id="location"
                                    name="rande-location"
                                    placeholder="Enter location"
                                    // value={entry.location}
                                    onChange={handleChange}
                                ></input>
                                <textarea
                                    className="edit-form__textarea"
                                    id="text"
                                    name="text"
                                    placeholder="Add a memorable note about your rande here"
                                    rows="4"
                                    cols="50"
                                    // value={entry.text}
                                    onChange={handleChange}
                                ></textarea>
                            </form>
                        </div>
                        <button className="edit-container__button">Save</button>
                    </div>
                </div>
            ) : (
                "Loading..."
            )}
        </>
    );
}
