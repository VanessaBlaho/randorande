import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function RevealedDateDetail() {
    // search-related variables
    const { rande_id } = useParams();
    const [rande, setRande] = useState(null);
    const [message, setMessage] = useState(null);

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
                date: 'date', 
                location: 'Some location', 
                entry_text: 'Your entry text here', 
            });

         
            
           setMessage(response.data["message"]);

            
        } catch (error) {
            console.log(error);
            
        }
    };


    useEffect(() => {
        fetchRandeDetail();
    }, [rande_id]);

    return (
        <div className="date-detail">
            {rande ? (
                <>
                    <div className="date-detail-name">
                        <h3>{rande.name}</h3>
                    </div>
                    <div className="date-detail-image-description">
                        <div className="date-detail-image">
                            <img src={rande.image_path} alt={rande.name} />
                        </div>

                        <div className="date-detail-description">
                            <p> {rande.description}</p>
                            <button onClick ={addToJournal}>Add to My Journal</button>
                            {message ? <span>{message}</span> : ""}
                        </div>
                    </div>
                </>
            ) : (
                <div className="edit-loader">&#9203;</div>
            )}
        </div>
    );
}
