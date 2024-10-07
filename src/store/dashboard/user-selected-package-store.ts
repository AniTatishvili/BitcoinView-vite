import create from "zustand";

export interface UserSelectedPackageStore {
  userPackageData: { value: number; label: string } | 0;
  setUserPackageData: (data: { value: number; label: string }) => void;
}

export const useUserSelectedPackageStore = create<UserSelectedPackageStore>((set) => ({
  userPackageData: 0,
  setUserPackageData: (data) => set({ userPackageData: data }),
}));
