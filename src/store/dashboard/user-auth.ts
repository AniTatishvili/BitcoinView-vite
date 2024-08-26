import { create } from "zustand";

type UserSignupStoreType = {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  role: ["Subscriber"];
  updateUserFields: (fields: Partial<UserSignupStoreType>) => void;
};

export const useUserSignupStore = create<UserSignupStoreType>((set) => ({
  username: "",
  email: "",
  password: "",
  phone_number: "",
  role: ["Subscriber"],

  updateUserFields: (fields: Partial<UserSignupStoreType>) => {
    set((state) => ({ ...state, ...fields }));
  },
}));
