import axios from "axios";
// import { setCookie, getCookie } from '../../Cookie';

const api = axios.create({
    baseURL: "http://15.164.171.223:9091"
})

export default api;