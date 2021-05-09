import axios from "axios";
import axiosApiInstance from "../../../helper/axios";

const signUpRequest = () => {
    return { type: "SIGN_UP_REQUEST" };
};

const signUpSuccess = (data) => {
    return { type: "SIGN_UP_SUCCESS", payload: data };
};

const signUpFailure = (error) => {
    return { type: "SIGN_UP_FAILURE", payload: error };
};

// const resetRequest = () => {
//     return { type: "RESET_REQUEST" };
// };

// const resetSuccess = () => {
//     return { type: "RESET_SUCCESS" };
// };

// const resetFailure = (error) => {
//     return { type: "RESET_FAILURE", payload: error };
// };

export const signUp = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        dispatch(signUpRequest());
        axios
            .post(`${Url}/v1/users/`, data)
            .then((res) => {
                dispatch(signUpSuccess(res.data.data));
                resolve(res.data.message);
            })
            .catch((err) => {
                dispatch(signUpFailure(err.response.data.message));
                reject(new Error(err.response.data.message));
            });
    });
};


export const verify = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/v1/users/verify`)
            .then((res) => {
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};

export const login = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axios
            .post(`${Url}/v1/users/login`, data)
            .then((res) => {
                dispatch({ type: "LOGIN", payload: res.data.data });
                // localStorage.setItem("id", res.data.data.id)
                localStorage.setItem("token", res.data.data.token);
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
    });
};

export const refresPage = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/v1/users/profile`)
            .then((res) => {
                dispatch({ type: "LOGIN", payload: res.data.data, role: res.data.data.role, status: res.data.status });
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
    });
};