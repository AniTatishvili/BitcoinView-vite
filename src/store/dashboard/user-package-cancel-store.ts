import { create } from "zustand";

export interface UserPackageCancelStore {
  userPackageCancelData: { package_cancled: boolean };
  setUserPackageCancelData: (data: { package_cancled: boolean }) => void;
}

export const useUserPackageCancelStore = create<UserPackageCancelStore>((set) => ({
  userPackageCancelData: { package_cancled: false },
  setUserPackageCancelData: (data) => set({ userPackageCancelData: data }),
}));
