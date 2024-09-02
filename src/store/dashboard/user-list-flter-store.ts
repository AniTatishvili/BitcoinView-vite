import { create } from "zustand";

type State = {
  user_list_filter_id: number;
};

type Actions = {
  save_user_filer_id: (id: number) => void;
};

export const useUserListFilterStore = create<State & Actions>((set) => ({
  user_list_filter_id: 1,

  save_user_filer_id: (id) => set(() => ({ user_list_filter_id: id })),
}));
