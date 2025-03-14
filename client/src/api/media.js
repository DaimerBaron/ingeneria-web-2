import axios from "axios";

const API = 'http://localhost:5100/';

export const mediaRequest = async (media) => await axios.post(`${API}media`, media);