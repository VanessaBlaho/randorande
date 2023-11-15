import React, { useEffect, useState } from "react";

export function RevealedDateDetail() {
    const [rande, setRande] = useState(null);

    const fetchRandeDetail = async () => {
        try {
            let rande_id = 1;
            const response = await fetch(`/api/randes/${rande_id}`);
            const data = await response.json();
            console.log("Data:", data);
            setRande(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRandeDetail();
    }, []);

    return (
        <div className="date-detail">
            {rande ? (
                <>
                    <div className="date-detail-image">
                        <h3>Date name: {rande.name}</h3>

                        {/* <img src={rande.image_path + ".png"} alt={rande.name} /> */}
                        {/* below is with the database fixed and without .png added */}
                        <img src={rande.image_path} alt={rande.name} />
                    </div>

                    <div className="date-detail-description">
                        <p> {rande.description}</p>
                    </div>
                </>
            ) : (
                "Loading..."
            )}
        </div>
    );
}

{
    /* <h1>Date name:  {rande.name}</h1>
            <img src={rande.image_path} alt={rande.name} />
            <br/>
            <p> {rande.description}
                </p> */
}

//     <div className="date-detail-image">
//     <h1>Date name:  {rande.name}</h1>
//     <img src={rande.image_path + '.png'} alt={rande.name} />
// </div>
// <br/>
// <div className="date-detail-description">
// <p> {rande.description}
// </p>
// </div>
