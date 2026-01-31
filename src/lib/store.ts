import { create } from 'zustand';

interface AppState {
  // UI state
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isChatOpen: false,
  setIsChatOpen: (isOpen: boolean) => set({ isChatOpen: isOpen }),
}));
