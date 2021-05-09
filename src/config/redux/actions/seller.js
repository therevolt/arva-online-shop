import axiosApiInstance from "../../../helper/axios";

export const requestUpdateProfile = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .put(`${Url}/v1/users`, data)
            .then((res) => {
                dispatch({ type: "REQ_UPDATE_PROFIL_SELLER", message: res.data.message});
                resolve(res.data.message)
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
    });
};