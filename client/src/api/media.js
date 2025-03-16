import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5100/",
});

export const mediaRequest = async (media) => await axiosInstance.post("media", media);
export const mediaList = async () => await axiosInstance.get("media");