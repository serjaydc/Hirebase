import React from "react";

const JobsCounter = ({ jobs }) => {
  const jobsTotal = jobs.length;
  const jobsApplied = jobs.filter((job) => job.jobStatus === "applied").length;
  const jobsInterview = jobs.filter(
    (job) => job.jobStatus === "interview",
  ).length;
  const jobsOffer = jobs.filter((job) => job.jobStatus === "offer").length;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="border border-neutral-200 rounded-lg p-4 bg-white">
        <p className="text-neutral-500 text-sm">Total</p>
        <p className="font-semibold text-2xl">{jobsTotal}</p>
      </div>
      <div className="border border-neutral-200 rounded-lg p-4 bg-white">
        <p className="text-neutral-500 text-sm">Applied</p>
        <p className="font-semibold text-2xl text-blue-600">{jobsApplied}</p>
      </div>
      <div className="border border-neutral-200 rounded-lg p-4 bg-white">
        <p className="text-neutral-500 text-sm">Interviews</p>
        <p className="font-semibold text-2xl text-amber-600">{jobsInterview}</p>
      </div>
      <div className="border border-neutral-200 rounded-lg p-4 bg-white">
        <p className="text-neutral-500 text-sm">Offers</p>
        <p className="font-semibold text-2xl text-green-600">{jobsOffer}</p>
      </div>
    </section>
  );
};

export default JobsCounter;
