import { instance } from "./instance";

export const login = async (data: { login: string; password: string }) => {
  return (await instance.post(`/api/login`, data)).data;
};
