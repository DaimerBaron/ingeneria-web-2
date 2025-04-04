
import axios from "axios"; // peticiones al igual que fetch

const API = import.meta.env.VITE_API_URL;
export const typeRequest = async (type) => await axios.post(`${API}type`, type);
export const typeList = async () => await axios.get(`${API}type`);
export const typeDelete = async (id) => await axios.delete(`${API}type/${id}`);
export const typeUpdate = async (id, updatedData) => await axios.put(`${API}type/${id}`, updatedData);


