import { create } from "zustand";
import { api } from "../api/axios.js";

export const useJobStore = create((set, get) => ({
  jobs: [],
  selectedJob: {},
  jobsCount: null,
  loading: false,
  error: null,

  // Get All Jobs
  getJobs: async () => {
    try {
      set({ loading: true, error: null });

      const res = await api.get("/job/all");

      set({
        jobs: res.data.jobs,
        jobsCount: res.data.jobsCount,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        jobs: [],
        jobsCount: 0,
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },

  // Get Job By Id
  getSingleJob: async (id) => {
    try {
      set({ loading: true, error: null });

      const res = await api.get(`/job/${id}`);

      set({
        selectedJob: res.data.job,
        loading: false,
        error: null,
      });

      return res.data.job;
    } catch (error) {
      set({
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },

  // Add Job
  addJob: async (data) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post("/job/add", data);

      set((state) => ({
        jobs: [res.data.job, ...state.jobs],
        loading: false,
        error: null,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },

  // Update Job By Id
  updateJob: async (id, data) => {
    try {
      set({ loading: true, error: null });

      const res = await api.patch(`/job/${id}`, data);

      set((state) => ({
        jobs: state.jobs.map((job) => (job._id === id ? res.data.job : job)),
        loading: false,
        error: null,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message,
        loading: false,
      });
    }
  },
  // Delete Job By Id
  deleteJob: async (id) => {
    const prevJobs = get().jobs;

    set({ jobs: prevJobs.filter((job) => job._id !== id) });

    try {
      await api.delete(`/job/${id}`);
    } catch (error) {
      set({
        jobs: prevJobs,
        error: error.response?.data?.message,
      });
    }
  },
}));
