import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5100/'
})

export const typeList = async () => await axiosInstance.get('type');