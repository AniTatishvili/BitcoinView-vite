// import axios from "axios";
import { instance } from "./instance";

export const login = async (data: { username: string; password: string }) => {
  return (await instance.post(`/wp-json/jwt-auth/v1/token`, data)).data;
};
