import React, { useEffect } from "react";
import { useJobStore } from "../../store/jobStore.js";
import { getJobStats } from "../../utils/jobStats.js";

const ProfileJobStats = () => {
  const { jobs, getJobs } = useJobStore();
  const stats = getJobStats(jobs);

  const jobsTotal = stats.total;
  const jobsApplied = stats.applied;
  const jobsInterview = stats.interview;
  const jobsOffer = stats.offer;
  const jobsRejected = stats.rejected;

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="bg-white border border-neutral-300 rounded-xl p-4 mb-4">
      <h2 className="text-lg font-medium mb-4">Your Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold">{jobsTotal}</p>
          <p className="text-sm text-neutral-500">Total Jobs</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold text-blue-600">{jobsApplied}</p>
          <p className="text-sm text-neutral-500">Applied</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold text-amber-600">
            {jobsInterview}
          </p>
          <p className="text-sm text-neutral-500">Interviews</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold text-green-600">{jobsOffer}</p>
          <p className="text-sm text-neutral-500">Offers</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-semibold text-red-600">{jobsRejected}</p>
          <p className="text-sm text-neutral-500">Rejected</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileJobStats;
