import React, { createContext, useReducer, useContext } from "react";
import filterReducer from "./filterReducer";

const FiltersContext = createContext(); // Filters Context

const FiltersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, {
        budgetFilter: "",
        seasonFilter: "",
        localityFilter: "",
    });

    return (
        <FiltersContext.Provider value={{ state, dispatch }}>
            {children}
        </FiltersContext.Provider>
    );
};

const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error(
            "useFiltersContext must be used within a FiltersProvider"
        );
    }
    return context;
};

export { FiltersProvider, useFiltersContext };
