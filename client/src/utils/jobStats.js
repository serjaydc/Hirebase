export const getJobStats = (jobs) => {
  return {
    total: jobs.length,
    applied: jobs.filter((job) => job.jobStatus === "applied").length,
    interview: jobs.filter((job) => job.jobStatus === "interview").length,
    offer: jobs.filter((job) => job.jobStatus === "offer").length,
    rejected: jobs.filter((job) => job.jobStatus === "rejected").length,
  };
};
