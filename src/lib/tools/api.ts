import axios from "axios";

const   ACCESS_TOKEN  = process.env.ACCESS_TOKEN,
        REFRESH_TOKEN = process.env.REFRESH_TOKEN

const api = axios.create({
    baseURL: process.env.API_URL
})

api.interceptors.request.use((config) =>{
    const token = localStorage.getItem(ACCESS_TOKEN as string)
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
(error)=>{
    return Promise.reject(error)
})

export default api