
import React, { useEffect, useState } from react

export function RevealedDateDetail () {
    const [rande,setRande] = useState(null)

        const fetchRandeDetail = async () => {
            try {
                const response = await fetch('http://www.randorande.test/api/randes/{rande_id}');
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
        <></>
    //     <div className="date-detail">
    //         <h1>Date name:  {rande.name}</h1>
    //         <img src={rande.image_path} alt={rande.name} />
    //         <br/>
    //         <p> {rande.description}
    //             </p>
    // </div>
    )
}

