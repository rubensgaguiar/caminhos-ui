import create from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set: any, get: any) => ({
      user: undefined,
      setUser: (user: any) => set({ user: user }),
    }),
    {
      name: "user-storage",
    }
  )
);
