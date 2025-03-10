import axios from "axios";


const API = 'http://localhost:5100/';

export const genreRequest = async (genre) => await axios.post(`${API}genre`, genre);