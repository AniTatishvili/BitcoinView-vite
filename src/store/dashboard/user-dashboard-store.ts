import { create } from "zustand";

type State = {
  user_dashboard_menu_visibility: boolean | null;
};

type Actions = {
  update_user_dashboard_menu_visibility: (visibility: boolean | null) => void;
};

export const useUserDashboardStore = create<State & Actions>((set) => ({
  user_dashboard_menu_visibility: null,

  update_user_dashboard_menu_visibility: (visibility) => set(() => ({ user_dashboard_menu_visibility: visibility })),
}));
