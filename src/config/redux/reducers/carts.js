const initialState = {
    carts: [],
    loading: false,
    error: "",
};

const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                carts: action.payload,
            };
        case "GET_CART":
            return {
                ...state,
                carts: action.payload,
            };
        case "DELETE_CART":
            return {
                ...state,
                carts: action.payload,
            };
        default:
            return state;
    }
};

export default cartsReducer;