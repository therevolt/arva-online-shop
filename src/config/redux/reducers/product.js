const initialState = {
    product: [],
    popular: [],
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
        default:
            return state;
    }
};

export default productReducer;