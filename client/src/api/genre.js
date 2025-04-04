import axios from "axios"; // peticiones al igual que fetch


const API = import.meta.env.VITE_API_URL;
export const genreRequest = async (genre) => await axios.post(`${API}genre`, genre);
export const genreList = async () => await axios.get(`${API}genre`);
export const genreDelete = async (id) => await axios.delete(`${API}genre/${id}`);