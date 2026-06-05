import axios from "axios";

const API = axios.create({
  baseURL: "https://ats-backend-tzff.onrender.com/api/resume",
});

export const uploadResume = (formData) =>
  API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  export const getHistory = (userId) =>
  API.get(`/history/${userId}`);