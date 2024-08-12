import { create } from "zustand";

type State = {
  user_dashboard_menu_visibility: boolean | null;
};

type Actions = {
  update_user_dashboard_menu_visibility: (visibility: boolean | null) => void;
};

export const useUserDashboardStore = create<State & Actions>((set) => ({
  // Initialize the state
  user_dashboard_menu_visibility: null,

  // Define the action to update the state
  update_user_dashboard_menu_visibility: (visibility) => set(() => ({ user_dashboard_menu_visibility: visibility })),
}));
