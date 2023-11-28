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
    axios.get(`${Api}/api/v1/driver?vendor_id=${data.vendor_id}&driver_status=${data.driver_status ? data.driver_status : ''}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getDriverDetail = (driverId, callback) => {
    axios.get(`${Api}/api/v1/driver/${driverId}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const updateDriver = (data, callback) => {
    axios.post(`${Api}/api/v1/driver/${data.driver_id}`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data)
    }).catch((err) => {
        callback(false, err)
    })
}