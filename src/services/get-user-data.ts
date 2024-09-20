import { instance } from "./instance";

export const getUsersData = async () => {
  return (await instance.get(`/api/user-information`))?.data;
};
