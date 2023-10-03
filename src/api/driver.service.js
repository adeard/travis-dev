import axios from "axios";
import Api from ".";

export const addDriver = (data, callback) => {
    axios.post(`${Api}/api/v1/zts_travis/driver`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.response.status, res.response.data.error)    
    }).catch((err) => {
        console.log(err)
        callback(err.response.status, err.data.data)
    })
}

export const getDrivers = (data, callback) => {
    axios.get(`${Api}/api/v1/zts_travis/driver`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}