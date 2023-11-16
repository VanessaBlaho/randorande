import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ResultsContext from "../../ResultsContext";

const DateSearch = () => {
    // State for filters and results
    const [budgetFilter, setBudgetFilter] = useState("");
    const [seasonFilter, setSeasonFilter] = useState("");
    const [localityFilter, setLocalityFilter] = useState("");
    const { setResults } = useContext(ResultsContext);

    const isButtonDisabled = !budgetFilter || !seasonFilter || !localityFilter;

    // Fetch data from the backend based on filters
    const fetchRande = async () => {
        try {
            const response = await fetch(
                `/api/date-search/results?budget=${budgetFilter}&season=${seasonFilter}&locality=${localityFilter}`
            );
            const data = await response.json();
            setResults(data);
            
        } catch (error) {
            console.log(error);
        }
    };

    //handling search and redirect on button click
    const handleSearch = () => {
        fetchRande();
    };

   

    return (
        <>
            <div className="datesearch">
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
                    {isButtonDisabled ? (
                        <p>Please select one option from each search feature.</p>
                    ) : (
                        <button onClick={() => handleSearch()}>
                            <Link to="/date-search/results">Rendezvous</Link>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default DateSearch;
