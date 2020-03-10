import axios from "axios";

const api = axios.create({
    baseURL: "http://10.33.182.2:3333"
})

export default api;