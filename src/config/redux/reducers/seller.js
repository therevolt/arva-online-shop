const initialState = {
    user: {},
    loading: false,
    error: "",
    role: null,
    status:false
};

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQ_UPDATE_PROFIL_SELLER":
            return {message:action.message};
        default:
            return state;
    }
};

export default sellerReducer;