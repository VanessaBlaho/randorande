
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

export function RevealedDateDetail () {
    const navigate = useNavigate();
    const { rande_id } = useParams();
    const [rande, setRande] = useState(null);

    const fetchRandeDetail = async () => {
        try {
            const response = await fetch(`/api/randes/${rande_id}`);
            const data = await response.json();
            console.log("Data:", data);
            console.log("Setting Rande:", data);

            setRande(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRandeDetail();
    }, [rande_id]);

    // EXPERIMENT
    useEffect(() => {
        // This effect will be called when the component mounts
        const handleBackButton = (event) => {
            
            if (window.location.pathname === "/randes/:rande_id") {
                // Redirect to the desired page
                navigate("/date-search");
            }
        };

        // Attach the event listener for the "popstate" event (back button press)
        window.addEventListener("popstate", handleBackButton);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [navigate]); // Make sure to include navigate in the dependencies array

    return (
        <div className="date-detail">
            {rande ? (
                <>
                    <div className="date-detail-name">
                        <h3>Rande name: {rande.name}</h3>
                    </div>
                    <div className="date-detail-image-description">
                        <div className="date-detail-image">
                            <img src={rande.image_path} alt={rande.name} />
                        </div>

                        <div className="date-detail-description">
                            <p> {rande.description}</p>
                        </div>
                    </div>
                </>
            ) : (
                "Loading..."
            )}
        </div>
    );
}
