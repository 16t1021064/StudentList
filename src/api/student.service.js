import axios from "axios";

const API_URL = "http://localhost:4000";

export const getStudents = () => {
  return axios.get(`${API_URL}/student`);
};

export const addStu = (student) => {
    return axios.post(`${API_URL}/student`, student);
}

export const deleteStu = (id) => {
    return axios.delete(`${API_URL}/student/${id}`)
}