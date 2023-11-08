import axios from "axios";
import Api from ".";

export const getTask = (data, callback) => {
    axios.get(`${Api}/api/v1/task?task_status=${data.task_status ? data.task_status : ''}&start_date=${data.start_date ? data.start_date : ''}&end_date=${data.end_date ? data.end_date : ''}&taskid=${data.taskid ? data.taskid : ''}&vendor_id=${data.vendor_id ? data.vendor_id : ''}`,
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