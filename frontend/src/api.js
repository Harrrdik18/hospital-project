import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

export const fetchPatients = () => axios.get(`${API_URL}/patients`);
export const addPatient = (data) => axios.post(`${API_URL}/patients`, data);
export const dischargePatient = (id) => axios.delete(`${API_URL}/patients/${id}`);


export const fetchBeds = () => axios.get(`${API_URL}/beds`);
export const addBed = (data) => axios.post(`${API_URL}/beds`,data);