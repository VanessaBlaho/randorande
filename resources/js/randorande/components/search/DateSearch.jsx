import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFiltersContext } from "../../FiltersContext"; //change to FiltersContext

const DateSearch = () => {
    const { state, dispatch } = useFiltersContext();
    const isButtonDisabled = !state.budgetFilter || !state.seasonFilter || !state.localityFilter;

    return (
        <>
            <div className="datesearch">
                <h1>Rendezvous</h1>
                <h3>Your next date idea is just moments away!</h3>
                <div className="filters">
                    {/* Budget dropdown */}
                    <div className="filter__budget-dropdown">
                        <h3>Tell us what you're in the mood for:</h3>
                        <label htmlFor="budgetFilter">Budget</label>
                        <select
                            id="budgetFilter"
                            value={state.budgetFilter}
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_BUDGET_FILTER",
                                    payload: e.target.value,
                                })
                            }
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
                            value={state.seasonFilter}
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_SEASON_FILTER",
                                    payload: e.target.value,
                                })
                            }
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
                            value={state.localityFilter}
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_LOCALITY_FILTER",
                                    payload: e.target.value,
                                })
                            }
                        >
                            <option value="">--</option>
                            <option value="1">Indoors</option>
                            <option value="0">Outdoors</option>
                        </select>
                    </div>
                    {isButtonDisabled ? (
                        <p>
                            Please select one option from each search feature.
                        </p>
                    ) : (
                        <Link className="search_rande_btn" to="/date-search/results">Rendezvous</Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default DateSearch;