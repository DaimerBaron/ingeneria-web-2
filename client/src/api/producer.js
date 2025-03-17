
import axios from "axios"; // peticiones al igual que fetch

const API = "http://localhost:5100/";

export const producerRequest = async (producer) => await axios.post(`${API}producer`, producer);
export const producerList = async () => await axios.get(`${API}producer`);
export const producerDelete = async (id) => await axios.delete(`${API}producer/${id}`);
export const producerUpdate = async (id, updatedData) => await axios.put(`${API}producer/${id}`, updatedData);
