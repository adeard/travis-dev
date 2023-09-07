import axios from "axios";
import Api from ".";

export const login = (data, callback) => {
 axios.post(`${Api}/api/v1/auth/sign_in`, data).then((res) => {
     callback(true, res.data.data.token)
 }).catch((err) => {
     callback(false, err)
 })
}