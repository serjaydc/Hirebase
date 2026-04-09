import { create } from "zustand";
import { api } from "../api/axios.js";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/user");

      set({
        user: res.data.user,
        isCheckingAuth: false,
        error: null,
      });
    } catch (error) {
      set({
        user: null,
        isCheckingAuth: false,
        error: error.response?.data?.message,
      });
    }
  },

  signup: async (data) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post("/auth/signup", data);

      set({
        user: res.data.user,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },

  signin: async (data) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post("/auth/signin", data);

      set({
        user: res.data.user,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },

  signout: async () => {
    try {
      set({ loading: true });

      await api.post("/auth/signout");

      set({
        user: null,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },
}));
