import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5100/'
})


export const producerList = async () => await axiosInstance.get('producer');