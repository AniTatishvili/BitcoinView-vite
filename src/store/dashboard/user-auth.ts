import { create } from "zustand";

type UserSignupStoreType = {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  role: [];
  updateUserFields: (fields: Partial<UserSignupStoreType>) => void;
};

export const useUserSignupStore = create<UserSignupStoreType>((set) => ({
  username: "",
  email: "",
  password: "",
  phone_number: "",
  role: [],
  updateUserFields: (fields: Partial<UserSignupStoreType>) => {
    set((state) => ({ ...state, ...fields }));
  },
}));
