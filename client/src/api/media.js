import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const mediaRequest = async (media) => await axiosInstance.post("media", media);
export const mediaList = async () => await axiosInstance.get("media");

export const updatedMedia = async (id, media) => await axiosInstance.put(`media/${id}`, media);