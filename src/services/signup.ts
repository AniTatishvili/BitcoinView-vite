import { instance } from "./instance";

export const signup = async (data: { username: string; password: string; email: string; phone_number: string }) => {
  return (await instance.post("wp-json/myplugin/v1/register", data)).data;
};
