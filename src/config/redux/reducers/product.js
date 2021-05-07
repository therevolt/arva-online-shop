const initialState = {
    product: [],
    popular: [],
    recomend: [],
    loading: false,
    error: "",
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HOME_PRODUCT":
            return {
                ...state,
                product: action.payload,
            };
        case "NEW_PRODUCT":
            return {
                ...state,
                product: action.payload,
            };
        case "POPULAR_PRODUCT":
            return {
                ...state,
                popular: action.payload,
            };
        case "CATEGORY_PRODUCT":
            return {
                ...state,
                product: action.payload,
            };
        case "DETAIL_PRODUCT":
            return {
                ...state,
                product: action.payload,
            };
        case "RECOMENDATION_PRODUCT":
            return {
                ...state,
                recomend: action.payload,
            };

        default:
            return state;
    }
};

export default productReducer;