// src/app/services/authApi.js

import axios from "axios";

const API_URL = "http://localhost/coin/wp-json/jwt-auth/v1/token";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Sign up function
// export const signUp = async (userData) => {
//   try {
//     const response = await apiClient.post("/signup", userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during sign up:", error);
//     throw error;
//   }
// };

// Login function
export const login = async (credentials: any) => {
  try {
    const response = await apiClient.post("/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
