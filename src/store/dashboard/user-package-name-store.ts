import { create } from "zustand";

export interface UserPackageNameStore {
  userPackageNameData: { package_name: string };
  setUserPackageNameData: (data: { package_name: string }) => void;
}

export const useUserPackageNameStore = create<UserPackageNameStore>((set) => ({
  userPackageNameData: { package_name: "" },
  setUserPackageNameData: (data) => set({ userPackageNameData: data }),
}));
