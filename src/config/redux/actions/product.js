import axios from "axios";
import axiosApiInstance from "../../../helper/axios";

export const getHomeProduct = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/v1/product/home`)
            .then((res) => {
                dispatch({ type: "HOME_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};


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

export const getCategoryProduct = (category) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axios
            .get(`${Url}/v1/product/list?category=${category}`)
            .then((res) => {
                dispatch({ type: "CATEGORY_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};

export const getDetailProduct = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axios
            .get(`${Url}/v1/product/details?id=${id}`)
            .then((res) => {
                dispatch({ type: "DETAIL_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};

export const getRecomendationProduct = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axios
            .get(`${Url}/v1/product/recom?category=${data}`)
            .then((res) => {
                dispatch({ type: "RECOMENDATION_PRODUCT", payload: res.data.data });
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};