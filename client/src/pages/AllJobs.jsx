import React, { useEffect } from "react";
import { useJobStore } from "../store/jobStore";
import JobsCounter from "../components/job/JobsCounter";
import JobsFilter from "../components/job/JobsFilter";
import JobsDisplay from "../components/job/JobsDisplay";

const AllJobs = () => {
  const { jobs, getJobs, search, status } = useJobStore();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.companyName.toLowerCase().includes(search.toLowerCase()) ||
      job.jobRole.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status ? job.jobStatus === status : true;

    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="container mx-auto">
      <section className="mb-4">
        <h1 className="font-medium text-2xl lg:text-3xl leading-tight">
          All Jobs
        </h1>
        <p className="text-neutral-500">
          Manage and track your job applications
        </p>
      </section>
      <JobsFilter />
      <JobsCounter jobs={jobs} />
      <JobsDisplay jobs={filteredJobs} />
      <p className="text-center text-neutral-500">
        Showing {filteredJobs.length} of {jobs.length} jobs
      </p>
    </div>
  );
};

export default AllJobs;
