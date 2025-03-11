import axios from "axios";


const API = 'http://localhost:5100/';

export const genreRequest = async (genre) => await axios.post(`${API}genre`, genre);
export const genreList = async () => await axios.get(`${API}genre`);
export const genreDelete = async (id) => await axios.delete(`${API}genre/${id}`);