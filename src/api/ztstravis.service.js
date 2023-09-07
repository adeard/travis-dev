import axios from "axios";
import Api from ".";

export const getZtsTravis = (data, callback) => {
    axios.get(`${Api}/api/v1/zts_travis?task_status=${data.task_status}&start_date=${data.start_date}&end_date=${data.end_date}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(true, res.data.data)
    }).catch((err) => {
        callback(false, err)
    })
}