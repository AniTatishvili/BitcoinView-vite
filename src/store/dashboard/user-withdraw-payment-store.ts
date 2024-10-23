import { create } from "zustand";

export interface UserWithdrawPaymentStore {
  userWithdrawData: { amount_usd: string; btc_wallet: string } | null;
  setUserWithdrawData: (data: { amount_usd: string; btc_wallet: string }) => void;
}

export const useUserWithdrawStore = create<UserWithdrawPaymentStore>((set) => ({
  userWithdrawData: null,
  setUserWithdrawData: (data) => set({ userWithdrawData: data }),
}));
