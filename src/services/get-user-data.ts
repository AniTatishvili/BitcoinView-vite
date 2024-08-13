import { instance } from "./instance";

export interface GetUsersData {
  message: string[];
}

export const getDogsSubBreeds = async (token: string) => {
  return (await instance.get<GetUsersData>(`/wp-json/wp/v2/users/me`))?.data.message;
};
