import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

<<<<<<< Updated upstream
//we need to use props for the date name from the journal list page
const RandeLog = () => {
    const { entryId } = useParams();
    // const [data, setData] = useState(null);
=======

//coming from parent component
const RandeLog = ({ entryId }) => {
>>>>>>> Stashed changes
    const [entryData, setEntryData] = useState({
        rande_name: null,
        date: null,
        location: null,
        entry_text: null,
        rande_description: null,
        image_url: null,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("photo", selectedFile);

            const response = await axios.post(
                `/api/entries/${entryId}/upload-photo`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                console.log("Photo uploaded successfully");
                setUploadedImageUrl(response.data.imageUrl); // Assuming the server returns the URL of the uploaded image
            } else {
                console.error("Failed to upload photo");
            }
        } catch (error) {
            console.error("Error uploading photo:", error);
        }
    };

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
                        {entryData.rande_name ?? "Date Name"}
                    </h2>
                    <h5 className="data__rande-date">
                        {entryData.date ?? "MM/DD/YYYY"}
                    </h5>
                    <h5 className="date__rande-location">
                        {entryData.location ?? "Location"}
                    </h5>
                    <div className="modal">
                        

                        <button onClick={openModal}>Rande Info</button>
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
                    
                    {uploadedImageUrl ? (
                        <img
                            src={uploadedImageUrl}
                            alt="Uploaded Photo"
                            className="data__rande-photo"
                        />
                    ) : (
                        <div className="data__rande-photo-placeholder">
                            {/* Placeholder for photo */}
                        </div>
                    )}
                    <p className="data__rande-description">
                        
                        {entryData.entry_text ??
                            ` Date Description: Please click on the edit button to log your date in your journal.`}
                    </p>
                    <div className="buttons">
                        <Link
                            to={"/my-journal/edit/" + entryData.id}
                            className="button-link"
                        >
                            Edit
                        </Link>
                        <label className="button-link">
                            Add Photo
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                        </label>
                        <button onClick={handleUpload}
                        className="button-link">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RandeLog;
