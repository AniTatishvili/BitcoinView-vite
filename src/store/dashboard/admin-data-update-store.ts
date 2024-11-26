import { create } from "zustand";

type State = {
  admin_add_event_id: number;
  admin_add_package_id: number;
};

type Actions = {
  save_admin_add_event_id: (id: number) => void;
  save_admin_add_package_id: (id: number) => void;
};

export const useAdminUpdateStore = create<State & Actions>((set) => ({
  admin_add_event_id: 0,
  admin_add_package_id: 0,
  save_admin_add_event_id: (id) => set(() => ({ admin_add_event_id: id })),
  save_admin_add_package_id: (id) => set(() => ({ admin_add_package_id: id })),
}));
