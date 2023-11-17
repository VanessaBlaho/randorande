
const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_BUDGET_FILTER":
            return { ...state, budgetFilter: action.payload };
        case "SET_SEASON_FILTER":
            return { ...state, seasonFilter: action.payload };
        case "SET_LOCALITY_FILTER":
            return { ...state, localityFilter: action.payload };
        default:
            return state;
    }
};

export default filterReducer;
