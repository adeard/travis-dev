import axios from "axios";
import Api from ".";

export const getTaskLog = (data, callback) => {
    axios.get(`${Api}/api/v1/log?taskid=${data.taskid ? data.taskid : ''}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}