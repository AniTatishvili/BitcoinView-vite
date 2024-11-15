import { create } from "zustand";

type UserSignupStoreType = {
  avatar: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  country: string;
  role_name: string;
  role_id: number;
  referral_code: string;
  referer_id: string;
  chat_notifications: boolean;
  account_status: string;
  adviser_username: string;
  created_at: string;
  currency: string;
  current_balance: string;
  estimated_balance: string;
  customer_status: string;
  deposit_notifications: boolean;
  employee: boolean;
  id: string;
  active_package: number;
  active_package_name: string;
  other_notifications: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resource: any;
  retention_status: boolean;
  show_ftd: boolean;
  time_zone: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tp_account_groups: any[];
  user_id: string;
  updateUserFields: (fields: Partial<UserSignupStoreType>) => void;
};

export const useUserSignupStore = create<UserSignupStoreType>((set) => ({
  avatar: "",
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  mobile: "",
  country: "",
  role_name: "",
  role_id: 0,
  referral_code: "",
  referer_id: "",
  chat_notifications: false,
  account_status: "",
  adviser_username: "",
  created_at: "",
  currency: "",
  current_balance: "",
  estimated_balance: "",
  customer_status: "",
  deposit_notifications: false,
  employee: false,
  id: "",
  active_package: 0,
  active_package_name: "",
  other_notifications: false,
  resource: {},
  retention_status: false,
  show_ftd: false,
  time_zone: "",
  tp_account_groups: [],
  user_id: "",

  updateUserFields: (fields: Partial<UserSignupStoreType>) => {
    set((state) => ({ ...state, ...fields }));
  },
}));
