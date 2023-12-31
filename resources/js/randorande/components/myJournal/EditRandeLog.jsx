import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//{ entryId, setEntryId }
export default function EditRandeLog() {
    const { entryId } = useParams();
    const [entry, setEntry] = useState(null);
    const [message, setMessage] = useState(null);

    //load existing data
    const fetchEntry = async () => {
        try {
            // '/api/entries/{entryId}/edit'
            //edit: /api/entries/${entryId}/edit
            ///api/entries/${entryId}/show`
            const response = await axios.get(`/api/entries/${entryId}/show`);
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
            // below displays "journal entry updated" for 2 seconds
            setTimeout(() => {
                setMessage(null);
            }, 1500);
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
                        {/* rande name */}
                        <h1 className="edit-container__title">
                            {entry.rande_name}
                        </h1>

                        <div className="journal_saved_message_div">
                            {message ? (
                                <span className="journal_saved_message">
                                    {message}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>

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
                                    SAVE
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
