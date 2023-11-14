import React, { useState, useEffect } from 'react';

//import ephram's component

import axios from 'axios';

const DateSearch = () => {

    // State for filters and results
    const [budgetFilter, setBudgetFilter] = useState("");
    const [seasonFilter, setSeasonFilter] = useState(""); 
    const [localityFilter, setLocalityFilter] = useState("");
    const [results, setResults] = useState([]);
    const [searchNotEmpty, setSearchNotEmpty] = useState(false); // ternary for the display


    

    // Fetch data from the backend based on filters
    const fetchData = async () => {
        try {
            // Make a request to backend 
            //change url with maria
            const response = await axios.get(`/api/data`, {
                params: {
                    budgetFilter,
                    seasonFilter,
                    localityFilter,
                },
            });

            // Get all data from the response
            const allData = response.data;
                   
            
            // Randomly select 3 items from the data
            // const randomResults = getRandomItems(getRandomItems, 3);

            // Update the results state
            setResults(allData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    // Function to get random items from an array
    //should be in Maria's code
    // const getRandomItems = (array, count) => {
    //     const shuffledArray = array.sort(() => 0.5 - Math.random());
    //     return shuffledArray.slice(0, count);
    // };

    // useEffect to trigger data fetching when filters change
    useEffect(() => {
        fetchData();
    }, [budgetFilter, seasonFilter, localityFilter]);

//delete on merge potentially
    const handleSearch = async () => {
        try {
            await fetchData();
            setSearchNotEmpty(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }; 



    return (
        <>
            <div className='datesearch'>
                <h1>Rendezvous</h1>
                <h3>Your next date idea is moments away!</h3>
                <div className="filters">
                    {/* Budget dropdown */}
                    <div className="filter__budget-dropdown">
                        <h3>Tell us what you're in the mood for:</h3>
                        <label htmlFor="budgetFilter">Budget</label>
                        <select
                            id="budgetFilter"
                            value={budgetFilter}
                            onChange={(e) => setBudgetFilter(e.target.value)}
                        >
                            <option value="">--</option>
                            <option value="1">Free</option>
                            <option value="2">$</option>
                            <option value="3">$$</option>
                        </select>
                    </div>
    
                    {/* Season dropdown */}
                    <div className="filter__season-dropdown">
                        <label htmlFor="seasonFilter">Time of Year</label>
                        <select
                            id="seasonFilter"
                            value={seasonFilter}
                            onChange={(e) => setSeasonFilter(e.target.value)}
                        >
                            <option value="">--</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="fall">Fall</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
    
                    {/* Locality dropdown */}
                    <div className="filter__locality-dropdown">
                        <label htmlFor="localityFilter">
                            Stay indoors or go outside?
                        </label>
                        <select
                            id="localityFilter"
                            value={localityFilter}
                            onChange={(e) => setLocalityFilter(e.target.value)}
                        >
                            <option value="">--</option>
                            <option value="1">Indoors</option>
                            <option value="0">Outdoors</option>
                        </select>
                    </div>
    
                    <button onClick={handleSearch}>Rendezvous</button>
    
                    {searchNotEmpty ? (
                        <div>
                            
                            
                               {/* path to eprham's component */}
                            
                        </div>
                    ) : (
                        <div>
                            
                            {/*additional content when the search is empty */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}; 

export default DateSearch;
