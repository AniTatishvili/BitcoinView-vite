import { instance } from "./instance";

export const login = async (data: { username: string; password: string }) => {
  return (await instance.post(`http://localhost/coinservice/wp-json/jwt-auth/v1/token`, data)).data;
};
