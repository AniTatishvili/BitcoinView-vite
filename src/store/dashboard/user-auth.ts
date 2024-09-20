import { create } from "zustand";

type UserSignupStoreType = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  role: [];
  updateUserFields: (fields: Partial<UserSignupStoreType>) => void;
};

export const useUserSignupStore = create<UserSignupStoreType>((set) => ({
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  mobile: "",
  role: [],

  updateUserFields: (fields: Partial<UserSignupStoreType>) => {
    set((state) => ({ ...state, ...fields }));
  },
}));
