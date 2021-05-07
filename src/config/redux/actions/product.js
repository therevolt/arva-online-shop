import axios from "axios";
import axiosApiInstance from "../../../helper/axios";



export const getNewProduct = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/v1/product/new`)
            .then((res) => {
                dispatch({ type: "NEW_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};

export const getPopularProduct = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/v1/product/popular`)
            .then((res) => {
                dispatch({ type: "POPULAR_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};

export const getCategoryProduct = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/v1/product/list?category=${data}`)
            .then((res) => {
                dispatch({ type: "CATEGORY_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};
