import { MoveLeft, Pencil, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useJobStore } from "../store/jobStore";
import SingleJobMeta from "../components/job/SingleJobMeta";
import InfoGrid from "../components/common/JobInfoGrid";
import { CONTACT_INFO_FIELDS, JOB_INFO_FIELDS } from "../utils/jobFields.js";

const SingleJob = () => {
  const { id } = useParams();
  const { selectedJob, getSingleJob, deleteJob } = useJobStore();

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  useEffect(() => {
    if (id) getSingleJob(id);
  }, [id]);

  return (
    <div className="container mx-auto">
      <Link
        to="/dashboard/jobs"
        className="text-neutral-500 flex items-center gap-2 hover:text-black transition-colors text-lg mb-4"
      >
        <MoveLeft />
        <span>Back to Jobs</span>
      </Link>

      <SingleJobMeta job={selectedJob} deleteJob={deleteJob} id={id} />
      <InfoGrid fields={JOB_INFO_FIELDS} data={selectedJob} />
      <InfoGrid fields={CONTACT_INFO_FIELDS} data={selectedJob} />
      <p className="text-center text-neutral-500">
        Created {formatDate(selectedJob.createdAt)}
      </p>
    </div>
  );
};

export default SingleJob;
