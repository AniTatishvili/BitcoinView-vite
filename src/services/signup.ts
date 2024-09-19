import { instance } from "./instance";

export const signup = async (data: { username: string; password: string; password_confirmation: string; email: string; mobile: string }) => {
  return (await instance.post("/api/register", data)).data;
};
