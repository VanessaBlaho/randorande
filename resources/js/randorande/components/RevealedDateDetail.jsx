
import React, { useEffect, useState } from 'react'

export function RevealedDateDetail () {
    const [rande,setRande] = useState(null)

        const fetchRandeDetail = async () => {
            try {
                let rande_id = 1
                const response = await fetch(`/api/randes/${rande_id}`);
                const data = await response.json();
                console.log('Data:', data);
                setRande(data);
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(() => {
            fetchRandeDetail()
        }, [])

    return(
        
        <div className="date-detail"> 
        {
            rande
            ?(
                <>
        
                <h1>Date name:  {rande.name}</h1>
                <img src={rande.image_path} alt={rande.name} />
            <br/>
            <p> {rande.description}
                </p>
                </>
            )
            :'Loading...'
        }
        </div>
       
    )
}

 {/* <h1>Date name:  {rande.name}</h1>
            <img src={rande.image_path} alt={rande.name} />
            <br/>
            <p> {rande.description}
                </p> */}


            