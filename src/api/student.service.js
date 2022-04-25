import axios from "axios";

const API_URL = "http://localhost:4000/student";

export const getStudents = () => {
  return axios.get(`${API_URL}/`);
};

export const addStu = (student) => {
  return axios.post(`${API_URL}/`, student);
};

export const deleteStu = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateStu = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};
