import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RandeLog = ({ editedData }) => {
    // const [data, setData] = useState(null);
    const [entryData, setEntryData] = useState({
        name: null,
        date: null,
        location: null,
        description: null
     });
   

    useEffect(() => {
        const fetchEntryData = async () => {
            try {
                // Replace 'API_ENDPOINT_URL'
                const response = await axios.get("api-endpoint-url", {
                    headers: {
                        Authorization: `Bearer ${authToken}`, // token should be stored and then we can dynamically use
                    },
                });
                if (response.status === 200) {
                    const apiEntryData = response.data;
                    setEntryData(apiEntryData);
                } else {
                    console.error("Failed to fetch journal entry");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Fetch data from the API
        fetchEntryData();
    }, [editedData]);

    return (
        <div>
            <div className="journal-container">
                <Link to="/edit"> 
                {/* get path for above from Maria */}
                    <h1>My Journal</h1>
                </Link>

                <div className="randorande-data">
                    <div className="left-section">
                        <h2 className="data__rande-name">
                            {entryData.name ?? "Date Name"}
                        </h2>

                        <h5 className="data__rande-date">
                            {entryData.date ?? "MM/DD/YYYY"}
                        </h5>

                        <h5 className="date__rande-location">
                            { entryData.location ?? "Location"}
                        </h5>

                        {entryData && entryData.image_url ? (
                            <img
                                src={entryData.image_url}
                                alt="Date Photo"
                                className="data__rande-photo"
                            />
                        ) : (
                            <div className="data__rande-photo-placeholder">
                                {/* Placeholder for photo */}
                            </div>
                        )}

                        <p className="data__rande-description">
                            Description:
                            {entryData.entry_text ?? " Please click on the edit button to log your date in your journal."}
                        </p>

                        <Link to="/edit" className="button-link">
                            Edit
                        </Link>
                        <button disabled>Upload Photo</button>
                    </div>
                    <div className="right-section"></div>
                </div>
            </div>
        </div>
    );
};

export default RandeLog;
