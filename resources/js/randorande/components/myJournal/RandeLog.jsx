import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


//we need to use props for the date name from the journal list page
const RandeLog = ({ entryId }) => {
    // const [data, setData] = useState(null);
    const [entryData, setEntryData] = useState({
        rande_name: null,
        date: null,
        location: null,
        entry_text: null,
        rande_description: null,
        image_url: null
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchEntryData = async () => {
            try {
                // Replace 'API_ENDPOINT_URL'
                const response = await axios.get(
                    `/api/entries/${entryId}/show`,
                    {
                        // headers: {
                        //     // Authorization: `Bearer ${authToken}`, // token should be stored and then we can dynamically use
                        // },
                    }
                );
                if (response.status === 200) {
                    const apiEntryData = response.data;
                    setEntryData(apiEntryData);
                     console.log("Entry Data:", apiEntryData);
                } else {
                    console.error("Failed to fetch journal entry");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        
        fetchEntryData();
    }, [entryId]);

     const openModal = () => {
         setIsModalOpen(true);
     };

     const closeModal = () => {
         setIsModalOpen(false);
     };

    return (
        <div className="journal-container">
            <div className="randorande-data">
                <div className="left-section">
                    <h2 className="data__rande-name">
                        {/* we need to use props for the date name from the
                            journal list page */}
                        {entryData.rande_name ?? "Date Name"}
                    </h2>

                    <h5 className="data__rande-date">
                        {entryData.date ?? "MM/DD/YYYY"}
                    </h5>

                    <h5 className="date__rande-location">
                        {entryData.location ?? "Location"}
                    </h5>
                    <div className="modal">
                        
                        <button onClick={openModal}>Rande</button>
                    
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                
                                <p>
                                    {entryData.rande_description ??
                                        "No description available."}
                                </p>
                                <button onClick={closeModal}>Close</button>
                            </div>
                        </div>
                        
                    )}
</div>
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
                        {entryData.entry_text ??
                            " Please click on the edit button to log your date in your journal."}
                    </p>

                    <div className="buttons">
                        <Link
                            to="/my-journal/entry/edit"
                            className="button-link"
                        >
                            Edit
                        </Link>

                        <Link className="button-link">Photo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandeLog;
