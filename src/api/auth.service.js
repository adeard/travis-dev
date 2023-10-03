import axios from "axios";
import Api from ".";

export const login = (data, callback) => {
    axios.post(`${Api}/api/v1/auth/sign_in`, data).then((res) => {
        callback(true, res.data.data.token)
    }).catch((err) => {
        callback(false, err)
    })
}

export const getLoggedUser = (callback) => {
    axios.get(`${Api}/api/v1/auth/logged`, 
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}