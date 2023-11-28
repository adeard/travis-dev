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
    axios.post(`${Api}/api/v1/vehicle`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}

export const getVehicles = (data, callback) => {
    axios.get(`${Api}/api/v1/vehicle?vendor_id=${data.vendor_id}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getVehicle = (vehicleId, callback) => {
    axios.get(`${Api}/api/v1/vehicle/${vehicleId}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const updateVehicle = (data, callback) => {
    axios.post(`${Api}/api/v1/vehicle/${data.vehicle_id}`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data)
    }).catch((err) => {
        callback(false, err)
    })
}