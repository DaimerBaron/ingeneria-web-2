
import axios from "axios"; // peticiones al igual que fetch

const API = import.meta.env.VITE_API_URL;
export const directorRequest = async (director) => await axios.post(`${API}director`, director);
export const directorList = async () => await axios.get(`${API}director`);
export const directorDelete = async (id) => await axios.delete(`${API}director/${id}`);
export const directorUpdate = async (id, updatedData) => await axios.put(`${API}director/${id}`, updatedData);


