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
  role: string;
  chat_notifications: boolean;
  account_status: string;
  created_at: string;
  currency: string;
  customer_status: string;
  deposit_notifications: boolean;
  employee: boolean;
  id: string;
  other_notifications: boolean;
  resource: any;
  retention_status: boolean;
  show_ftd: boolean;
  time_zone: string;
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
  role: "",
  chat_notifications: false,
  account_status: "",
  created_at: "",
  currency: "",
  customer_status: "",
  deposit_notifications: false,
  employee: false,
  id: "",
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
