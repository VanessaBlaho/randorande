
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export function RevealedDateDetail () {
    const { rande_id } = useParams();
    const [rande,setRande] = useState(null)

        const fetchRandeDetail = async () => {
            try {
                
                const response = await fetch(`/api/randes/${rande_id}`);
                const data = await response.json();
                console.log('Data:', data);
                console.log('Setting Rande:', data);

                setRande(data);
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(() => {
            fetchRandeDetail()
        }, [rande_id])

        return (
            <div className="date-detail">
                {rande ? (
                    <>
                    <div className="date-detail-name">
                        <h3>Rande name: {rande.name}</h3>
                    </div>
                    <div className="date-detail-image-description">
                        <div className="date-detail-image"> 
                            <img src={rande.image_path} alt={rande.name}/>
                        </div>  
                        
                        <div className="date-detail-description">
                            <p> {rande.description}
                            </p>
                        </div>
                    </div>
                    </>
                ) : (
                    "Loading..."
                )}
            </div>
          );
 }