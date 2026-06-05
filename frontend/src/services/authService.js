import axios from "axios";

const API = axios.create({
  baseURL: "https://ats-backend-tzff.onrender.com/api/auth",
});

export const registerUser = (userData) =>
  API.post("/register", userData);

export const loginUser = (userData) =>
  API.post("/login", userData);

export const getProfile = (token) =>
  API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });