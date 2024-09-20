import axios from "axios";

// const token = JSON.parse(localStorage.getItem("USER_AUTH") || "");

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",

    "Access-Control-Allow-Origin": "*",
  },
});
