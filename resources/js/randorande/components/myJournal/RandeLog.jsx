import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


//coming from parent component
const RandeLog = () => {
    const { entryId } = useParams();

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
    const [uploadError, setUploadError] = useState(null);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("photo", selectedFile);
            formData.append("entry_id", entryId)

            const response = await axios.post(
                `/api/entries/upload-photo`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                console.log("Photo uploaded successfully");
                console.log(response.data.photo_path);
                setUploadedImageUrl('/images/'+response.data.photo_path); 
                setUploadError(null);
            } else {
                console.error("Failed to upload photo");
            }
        } catch (error) {
            console.error("Error uploading photo:", error);
            setUploadError("Error uploading photo. Please try another image.");
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
                    // console.log(apiEntryData);
                    setEntryData(apiEntryData);


                    if (apiEntryData.image_path && apiEntryData.image_path.trim() !== "") {
                        setUploadedImageUrl("/images/" + apiEntryData.image_path);
                    }
                    // setUploadedImageUrl("/images/" + apiEntryData.image_path);
                    //console.log("Entry Data:", apiEntryData);
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
                        {entryData.date ?? "When"}
                    </h5>
                    <h5 className="date__rande-location">
                        {entryData.location ?? "Where"}
                    </h5>
                    <div className="modal">
                        <button onClick={openModal}>RANDE INFO</button>
                        {isModalOpen && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <p>
                                        {entryData.rande_description ??
                                            "No description available."}
                                    </p>
                                    <button onClick={closeModal}>CLOSE</button>
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
                            <img
                                src="\images\homepage\upload-image_icon.svg"
                                alt="image placholder"
                            />
                        </div>
                    )}
                    <p className="data__rande-description">
                        {entryData.entry_text ??
                            ` Date Description: Please click on the edit button to log your date in your journal.`}
                    </p>
                    {uploadError && <p>{uploadError}</p>}
                    <div className="buttons">
                        <Link
                            to={"/my-journal/edit/" + entryData.id}
                            className="button-link"
                        >
                            EDIT
                        </Link>
                        <label className="button-link">
                            ADD PHOTO
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                        </label>

                        <button onClick={handleUpload} className="button-link">
                            UPLOAD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RandeLog;
