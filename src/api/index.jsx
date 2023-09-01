//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost:6969' //local
    // baseURL: 'http://10.126.20.217:6969' //dev server
})

export default Api