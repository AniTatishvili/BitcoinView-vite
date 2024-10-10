import create from "zustand";

export interface UserSelectedPackageStore {
  userPackageData: { amount: number; package_name: string; purchase_id: number; is_purchase: boolean };
  setUserPackageData: (data: { amount: number; package_name: string; purchase_id: number; is_purchase: boolean }) => void;
}

export const useUserSelectedPackageStore = create<UserSelectedPackageStore>((set) => ({
  userPackageData: { amount: 0, package_name: "", purchase_id: 0, is_purchase: false },
  setUserPackageData: (data) => set({ userPackageData: data }),
}));
