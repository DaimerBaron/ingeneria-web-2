import axios from "axios";



const axiosInstance = axios.create({
    baseURL: 'http://localhost:5100/'
})

export const directorList = async () => await axiosInstance.get('director');