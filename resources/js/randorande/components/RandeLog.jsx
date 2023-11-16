import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RandeLog = ({ editedData }) => {
    const [data, setData] = useState(null);
    const [entryData, setEntryData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'API_ENDPOINT_URL'
                const response = await fetch("API_ENDPOINT_URL");
                const fetchedData = await response.json();

                // Check if editedData is available in the API response
                const apiEntryData = editedData
                    ? fetchedData.entries.find(
                          (entry) => entry.id === editedData.id
                      )
                    : null;

                // Update state with fetched data
                setData(fetchedData);

                // Set entryData based on API response
                setEntryData(apiEntryData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Fetch data from the API
        fetchData();
    }, [editedData]);

    return (
        <div>
            <div className="journal-container">
                <h1>My Journal</h1>

                <div className="randorande-data">
                    <div className="left-section">
                        <h2 className="data__rande-name">
                            {entryData ? entryData.name : "Date Name"}
                        </h2>

                        <h5 className="data__rande-date">
                            {entryData ? entryData.date : "MM/DD/YYYY"}
                        </h5>

                        <h5 className="date__rande-location">
                            {entryData ? entryData.location : "Location"}
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
                            {entryData
                                ? entryData.entry_text
                                : " Please click on the edit button to log your date in your journal."}
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
