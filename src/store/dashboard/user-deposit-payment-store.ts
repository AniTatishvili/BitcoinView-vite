import create from "zustand";

export interface UserDepositPaymentStore {
  userData: { qr_code: string; btc_wallet: string } | null;
  setUserDepositData: (data: { qr_code: string; btc_wallet: string }) => void;
}

export const useUserDepositStore = create<UserDepositPaymentStore>((set) => ({
  userData: null,
  setUserDepositData: (data) => set({ userData: data }),
}));
