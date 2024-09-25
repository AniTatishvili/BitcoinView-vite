import { create } from "zustand";

type State = {
  forget_password_content_visibility: boolean | null;
};

type Actions = {
  update_forget_password_content_visibility: (visibility: boolean | null) => void;
};

export const useForgetPasswordStore = create<State & Actions>((set) => ({
  forget_password_content_visibility: true,

  update_forget_password_content_visibility: (visibility) => set(() => ({ forget_password_content_visibility: visibility })),
}));
