import { instance } from "./instance";

export const getUsersData = async () => {
  return (await instance.get(`/wp-json/wp/v2/users/me`))?.data;
};
