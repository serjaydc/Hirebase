import { Pencil, Trash2 } from "lucide-react";
import { statusStyles, priorityStyles } from "../../utils/jobStyles";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleJobMeta = ({ job, deleteJob, id }) => {
  const navigate = useNavigate();
  const deleteHandler = async (id) => {
    await deleteJob(id);
    navigate("/dashboard/jobs");
  };

  return (
    <section className="bg-white border border-neutral-200 rounded-lg mb-8 p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="mb-2 sm:mb-0">
          <h1 className="font-medium text-2xl lg:text-3xl leading-tight">
            {job.companyName}
          </h1>
          <p>{job.jobRole}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-fit">
          <button className="flex items-center gap-2 py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors cursor-pointer w-full sm:w-fit">
            <Pencil className="size-5" />
            <span>Edit</span>
          </button>
          <button
            onClick={() => deleteHandler(id)}
            className="flex items-center gap-2 text-red-500 border border-red-200 hover:bg-red-100 hover:border-red-300 transition-colors py-2 px-4 rounded-lg cursor-pointer w-full sm:w-fit"
          >
            <Trash2 className="size-5" />
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4">
        <p className="capitalize text-neutral-500">
          Status:{" "}
          <span
            className={`${statusStyles[job.jobStatus]} py-1 px-3 ml-1 rounded-full`}
          >
            {job.jobStatus}
          </span>
        </p>
        <p className="capitalize text-neutral-500">
          Priority:{" "}
          <span
            className={`${priorityStyles[job.jobPriority]} py-1 px-3 ml-1 rounded-full`}
          >
            {job.jobPriority}
          </span>
        </p>
      </div>
    </section>
  );
};

export default SingleJobMeta;
