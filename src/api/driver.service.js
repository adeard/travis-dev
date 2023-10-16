import axios from "axios";
import Api from ".";

export const addDriver = (data, callback) => {
    axios.post(`${Api}/api/v1/driver`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)    
    }).catch((err) => {
        console.log(err)
    })
}

export const getDrivers = (data, callback) => {
    axios.get(`${Api}/api/v1/driver`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}