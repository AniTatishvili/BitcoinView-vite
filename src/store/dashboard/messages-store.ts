// store/messagesStore.ts
import { create } from "zustand";

interface MessagesStore {
  clickedTabIndex: number | null;
  setClickedTabIndex: (index: number) => void;
  refreshMessages: boolean;
  setRefreshMessages: (refresh: boolean) => void;
}

export const useMessagesStore = create<MessagesStore>((set) => ({
  clickedTabIndex: null,
  setClickedTabIndex: (index: number) => set({ clickedTabIndex: index }),
  refreshMessages: false,
  setRefreshMessages: (refresh: boolean) => set({ refreshMessages: refresh }),
}));
