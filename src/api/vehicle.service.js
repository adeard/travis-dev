import axios from "axios";
import Api from ".";

export const getVehicleType = (callback) => {
    axios.get(`${Api}/api/v1/vehicle_type`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const addVehicle = (data, callback) => {
    axios.post(`${Api}/api/v1/zts_travis/vehicle`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        console.log(res)
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getVehicles = (data, callback) => {
    axios.get(`${Api}/api/v1/zts_travis/vehicle`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}