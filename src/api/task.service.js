import axios from "axios";
import Api from ".";

export const getTask = (data, callback) => {
    axios.get(`${Api}/api/v1/task?task_status=${data.task_status ? data.task_status : ''}&start_date=${data.start_date ? data.start_date : ''}&end_date=${data.end_date ? data.end_date : ''}&taskid=${data.taskid ? data.taskid : ''}&vendor_id=${data.vendor_id ? data.vendor_id : ''}&limit=${data.limit ? data.limit : ''}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}

export const getTaskVolum = (data, callback) => {
    axios.get(`${Api}/api/v1/task/volum?` +
    `limit=${data.limit ? data.limit : ''}` +
    `&erdat=${data.erdat ? data.erdat : ''}` +
    `&bldat=${data.bldat ? data.bldat : ''}` +
    `&vbeln=${data.vbeln ? data.vbeln : ''}` +
    `&taskid=${data.taskid ? data.taskid : ''}` +
    `&sort_by=${data.sort_by ? data.sort_by : ''}` +
    `&end_date=${data.end_date ? data.end_date : ''}` +
    `&order_by=${data.order_by ? data.order_by : ''}` +
    `&vendor_id=${data.vendor_id ? data.vendor_id : ''}` +
    `&start_date=${data.start_date ? data.start_date : ''}` +   
    `&vehicle_no=${data.vehicle_no ? data.vehicle_no : ''}` + 
    `&driver_name=${data.driver_name ? data.driver_name : ''}` +
    `&task_status=${data.task_status ? data.task_status : ''}` +
    `&jenis_kirim=${data.jenis_kirim ? data.jenis_kirim : ''}` +    
    `&shipto_name=${data.shipto_name ? data.shipto_name : ''}` +
    `&receive_date=${data.receive_date ? data.receive_date : ''}` +
    `&vehicle_type=${data.vehicle_type ? data.vehicle_type : ''}` +
    `&shipto_street=${data.shipto_street ? data.shipto_street : ''}` +
    `&pick_location=${data.pick_location ? data.pick_location : ''}` ,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}

export const getTaskView = (data, callback) => {
    axios.get(`${Api}/api/v1/task/view?` + 
    `limit=${data.limit ? data.limit : ''}` +
    `&taskid=${data.taskid ? data.taskid : ''}` + 
    `&end_date=${data.end_date ? data.end_date : ''}` + 
    `&vendor_id=${data.vendor_id ? data.vendor_id : ''}` +
    `&driver_id=${data.driver_id ? data.driver_id : ''}` + 
    `&start_date=${data.start_date ? data.start_date : ''}` + 
    `&task_status=${data.task_status ? data.task_status : ''}` ,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}

export const updateTask = (data, callback) => {
    axios.post(`${Api}/api/v1/task/${data.task_id}`, data,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data)
    }).catch((err) => {
        callback(false, err)
    })
}

export const getTaskStatistic = (data, callback) => {
    axios.get(`${Api}/api/v1/task/statistic?task_status=${data.task_status ? data.task_status : ''}&start_date=${data.start_date ? data.start_date : ''}&end_date=${data.end_date ? data.end_date : ''}&taskid=${data.taskid ? data.taskid : ''}&vendor=${data.vendor_id ? data.vendor_id : ''}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}

export const getTaskStatisticByDate = (data, callback) => {
    axios.get(`${Api}/api/v1/task/statistic/date?task_status=${data.task_status ? data.task_status : ''}&start_date=${data.start_date ? data.start_date : ''}&end_date=${data.end_date ? data.end_date : ''}&taskid=${data.taskid ? data.taskid : ''}&vendor=${data.vendor_id ? data.vendor_id : ''}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}