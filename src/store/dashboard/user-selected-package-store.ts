import create from "zustand";

export interface UserSelectedPackageStore {
  userPackageData: { amount: number; package_name: string };
  setUserPackageData: (data: { amount: number; package_name: string }) => void;
}

export const useUserSelectedPackageStore = create<UserSelectedPackageStore>((set) => ({
  userPackageData: { amount: 0, package_name: "" },
  setUserPackageData: (data) => set({ userPackageData: data }),
}));
