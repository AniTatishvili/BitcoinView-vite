import { create } from "zustand";

type State = {
  username: string;
  name: string;
  surname: string;
  role: string[];
};

type Actions = {
  setUserData: (data: Partial<State>) => void;
  clearUserData: () => void;
};

export const useUserDataStore = create<State & Actions>((set) => ({
  username: "",
  name: "",
  surname: "",
  role: [],

  setUserData: (data) =>
    set((state) => ({
      ...state,
      ...data,
    })),

  clearUserData: () =>
    set(() => ({
      username: "",
      name: "",
      surname: "",
      role: [],
    })),
}));
