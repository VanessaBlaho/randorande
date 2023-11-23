import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function RevealedDateDetail() {
    const revealedDateDetail = {
        backgroundImage: "url('/images/homepage/sunset_noPeople.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
    };

    // search-related variables
    const { rande_id } = useParams();
    const [rande, setRande] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate =useNavigate();

    const fetchRandeDetail = async () => {
        try {
            const response = await axios.get(`/api/randes/${rande_id}`);
            // const data = await response.data();
            console.log("Data:", response.data);
            // console.log("Setting Rande:", data);

            setRande(response.data);

            
        } catch (error) {
            console.log(error);
        }
    };
    const addToJournal = async () => {
        

        try {

            const response = await axios.post('/api/entries/create', {
                rande_id: rande_id,
                date: '',
                location: '',
                entry_text: '',
            });

            setMessage(response.data["message"]);

            navigate ("/my-journal");

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRandeDetail();
    }, [rande_id,navigate]);

    return (
        <div className="revealed-date-detail" style={revealedDateDetail}>
        <div className="date-detail">
            {rande ? (
                <>
                <div className ="date-detail-container">
                    <div className="date-detail-name">
                        <h3>{rande.name}</h3>
                    </div>
                    <div className="date-detail-image-description">
                        <div className="date-detail-image">
                            <img src={rande.image_path} alt={rande.name} />
                        </div>

                        <div className="date-detail-description">
                            <p> {rande.description}</p>
                            <button onClick ={addToJournal}>
                                ///this was loading after being added to my journal so refresh was needed. Better to use navigate.
                                {/* <Link to="/my-journal">ADD TO MY JOURNAL</Link> */}
                                ADD TO MY JOURNAL
                            </button>
                            {message ? <span>{message}</span> : ""}
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <div className="edit-loader">&#9203;</div>
            )}
        </div>
        </div>
    );
}
